const path = require('path');
const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/stories/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-docs'],
  // FIXME: it's a workaround for:
  // https://github.com/storybookjs/storybook/issues/10231#issuecomment-728038867
  // workaround #1: https://github.com/storybookjs/storybook/issues/12262#issuecomment-681953346
  // workaround #2: https://github.com/chakra-ui/chakra-ui/blob/a5abb6f9477d87a1cbc0c2d784e009d2bc8a8c6d/.storybook/main.js
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...emotionless(config.resolve.alias),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};

// make a shallow copy of an object, rejecting keys that match /emotion/
function emotionless(object = {}) {
  let result = {};
  for (let key in object) {
    if (!/emotion/.test(key)) {
      result[key] = object[key];
    }
  }
  return result;
}
