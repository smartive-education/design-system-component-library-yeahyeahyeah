import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ShareButton } from '../../components/buttons/ShareButton';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';

export default {
  title: 'Interactions',
  component: ShareButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Copy Link',
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof ShareButton>;

const Template: ComponentStory<typeof ShareButton> = (args) => (
  <ShareButton {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const ShareButtonStory = Template.bind({});

ShareButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ShareButtonStory.storyName = 'Share Button';
