import * as React from 'react';
import { css } from '@emotion/react';
import { FerbesProvider } from '../src/components';
import { defaultTheme } from '../src/defaultTheme';

const storybookStyles = css`
  body {
    background-color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const FerbesDecorator = Story => (
  <FerbesProvider theme={defaultTheme} styles={storybookStyles}>
    <Story />
  </FerbesProvider>
);

export default FerbesDecorator;
