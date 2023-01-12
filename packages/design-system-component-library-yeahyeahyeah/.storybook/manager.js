// .storybook/manager.js

import { addons } from '@storybook/addons';
import MumbleTheme from './mumbleTheme';

addons.setConfig({
  theme: MumbleTheme,
  sidebar: {
    showRoots: true,
  },
});
