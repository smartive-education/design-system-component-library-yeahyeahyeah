import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation } from '../components/Navigation';

export default {
  title: 'Navigation/Navigation',
  component: Navigation,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    logo: {
      control: 'object',
      description: 'Description of mumbleLogo',
      defaultValue: {
        title: 'Mumble Logo',
        href: '#',
        fCallBack: () => {
          console.log('Mumble Logo');
        },
      },
    },
    avatar: {
      control: 'object',
      description: 'User image',
      defaultValue: {
        variant: 'profile',
        fCallBack: () => {
          console.log('Avatar');
        },
        src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
      },
    },
    settings: {
      control: 'object',
      description: 'User settings',
      defaultValue: {
        icon: 'settings',
        label: 'Settings',
        variant: 'default',
        fCallBack: () => {
          console.log('Settings');
        },
      },
    },
    logout: {
      control: 'object',
      description: 'Logout',
      defaultValue: {
        icon: 'logout',
        label: 'Logout',
        variant: 'default',
        fCallBack: () => {
          console.log('Logout');
        },
      },
    },
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const NavigationStory = Template.bind({});

NavigationStory.storyName = 'Navigation';
