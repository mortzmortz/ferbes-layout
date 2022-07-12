import * as React from 'react';
import {
  Global,
  css,
  SerializedStyles,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import FocusVisibleProvider, {
  hideFocusRingsDataAttribute,
} from '../../utils/FocusVisibleProvider';
import { Theme } from 'styled-system';
import { defaultTheme } from '../../defaultTheme';

const ThemeContext = React.createContext<Theme>(defaultTheme);
const useTheme = (): Theme => {
  const theme = React.useContext(ThemeContext);
  if (theme === null) {
    throw new Error('No theme available on context');
  }
  return theme;
};

const hideFocusRingsStyles = css`
  [${hideFocusRingsDataAttribute}='true'] * {
    outline: none;
  }
`;

const FerbesProvider: React.FC<FerbesProviderProps> = ({
  theme = {},
  styles,
  hideFocusRings = false,
  children,
}) => {
  const t = Object.assign(defaultTheme, theme);
  const s = hideFocusRings ? [hideFocusRingsStyles, styles] : [styles];
  return (
    <ThemeContext.Provider value={t}>
      <EmotionThemeProvider theme={t}>
        <Global styles={s} />
        <FocusVisibleProvider>{children}</FocusVisibleProvider>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export type FerbesProviderProps = {
  children?: React.ReactNode;
  theme?: Theme;
  styles?: SerializedStyles;
  hideFocusRings?: boolean;
};

FerbesProvider.displayName = 'FerbesProvider';
export { FerbesProvider, useTheme };
