// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Mumble Component Library',
  brandUrl: '/',
  brandImage:
    'https://raw.githubusercontent.com/smartive-education/design-system-component-library-yeahyeahyeah/master/packages/design-system-component-library-yeahyeahyeah/stories/assets/mumble-logo.svg',
  brandTarget: '_self',

  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  appBg: '#F1F5F9', //'#1E293B',
  appContentBg: '#F1F5F9',
  barBg: '#F1F5F9',

  appBorderColor: '#E2E8F0',
  appBorderRadius: 0,

  textColor: '#0F172A',
  barTextColor: '#0F172A',
});
