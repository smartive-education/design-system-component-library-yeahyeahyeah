import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from '../components/User';
import { action } from '@storybook/addon-actions';
import UserReadme from '../docs/User.md';

export default {
  title: 'User/User',
  component: User,
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
    },
    username: {
      control: 'object',
      defaultValue: {
        label: 'Username',
        href: '',
        fCallBack: action('username clicked'),
      },
    },
    timestamp: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Timestamp',
        href: '',
        fCallBack: action('timestamp clicked'),
      },
    },
    location: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Location',
        href: '',
        fCallBack: action('location clicked'),
      },
    },
    joined: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Joined',
        href: '',
        fCallBack: action('joined clicked'),
      },
    },
    btn: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Follow',
        fCallBack: action('btn clicked'),
      },
    },
    avatar: {
      control: {
        type: 'object',
      },
      defaultValue: {
        src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
        alt: 'Alter Tag',
        buttonCallBack: action('button x clicked'),
        imageCallBack: action('button x clicked'),
      },
    },
  },
  args: {
    label: 'Display Name',
    variant: 'small',
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
    description: {
      component: UserReadme,
    },
  },
};

UserStory.storyName = 'User';
