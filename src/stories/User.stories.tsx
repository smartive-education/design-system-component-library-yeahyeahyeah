import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from '../components/User';
import { DefaultLayout } from '../components/layouts/DefaultLayout';

export default {
  title: 'User/User',
  component: User,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      defaultValue: 'Display Name',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'small',
    },
    username: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Username',
        href: '',
      },
    },
    timestamp: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Timestamp',
        href: '',
      },
    },
    location: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Location',
        href: '',
      },
    },
    joined: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Joined',
        href: '',
      },
    },
    btn: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Follow',
        fCallBack: () => console.log('Clicked on the button'),
      },
    },
    avatar: {
      control: {
        type: 'object',
      },
      defaultValue: {
        src: 'https://i.stack.imgur.com/5xd5n.png',
        alt: 'Alter Tag',
      },
    },
  },
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;
/**
 * @button
 * @desc button standard slate
 */
export const UserStory = Template.bind({});

UserStory.args = {
  variant: 'recommended',
};

UserStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

UserStory.storyName = 'User';
