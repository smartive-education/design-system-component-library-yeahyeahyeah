import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../components/Avatar';
import { DefaultLayout } from '../components/layouts/DefaultLayout';

export default {
  title: 'User',
  component: Avatar,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'small',
    },
    src: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://shorturl.at/lowzH',
    },
    alt: {
      control: {
        type: 'text',
      },
      defaultValue: 'Alter Tag',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
/**
 * @button
 * @desc button standard slate
 */
export const AvatarStory = Template.bind({});

AvatarStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

AvatarStory.storyName = 'Avatar';
