export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    viewMode: 'docs',
  },
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
