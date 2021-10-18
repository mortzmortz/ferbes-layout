import { addons } from '@storybook/addons';
import { create, themes } from '@storybook/theming';

// https://storybook.js.org/docs/configurations/theming/#create-a-theme-quickstart
const customTheme = create({
  ...themes.dark,
  brandTitle: 'Ferbes Layout',
  // brandImage: './logo.svg',
});

addons.setConfig({
  theme: customTheme,
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
});
