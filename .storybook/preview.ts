import { addParameters, addDecorator } from '@storybook/react';
import { sortStories } from './utils/helpers';
import FerbesDecorator from './FerbesDecorator';

const SORT_ORDER = {
  Introduction: ['Getting Started'],
  Logic: [],
  Components: [],
};

addParameters({
  options: {
    viewMode: 'docs',
    storySort: sortStories(SORT_ORDER),
  },
});

addDecorator(FerbesDecorator);
