export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  storySort: {
    order: ['Introduction', 'Components'],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
