import React from 'react';
import { css } from '@emotion/react';
import { FerbesProvider } from '../src/components';
import { defaultTheme } from '../src/defaultTheme';

const storybookStyles = css`
  body {
    background-color: #fff;
  }
`;

const FerbesDecorator = Story => (
  <FerbesProvider theme={defaultTheme} styles={storybookStyles}>
    <Story />
  </FerbesProvider>
);

export default FerbesDecorator;
