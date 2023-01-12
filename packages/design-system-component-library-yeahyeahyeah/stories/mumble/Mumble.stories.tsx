import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Mumble } from '../../components/mumble/Mumble';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Mumble/Mumble',
  component: Mumble,
  argTypes: {
    variant: {
      control: 'select',
    },
    user: {
      control: {
        type: 'object',
      },
      defaultValue: {
        avatar: {
          alt: 'avatar',
          src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
          buttonCallBack: action('button mumble clicked'),
          imageCallBack: action('image mumble clicked'),
        },
        joined: {
          href: '',
          label: 'Joined',
          fCallBack: action('joined clicked'),
          type: 'joined',
        },
        label: 'Display Name',
        location: {
          href: '',
          label: 'Location',
          fCallBack: action('location clicked'),
          type: 'location',
        },
        timestamp: {
          href: '',
          label: 'Timestamp',
          fCallBack: action('timestamp clicked'),
          type: 'timestamp',
        },
        username: {
          href: '',
          label: 'Username',
          fCallBack: action('username clicked'),
          type: 'username',
        },
        variant: 'xlarge',
      },
    },
    text: {
      defaultValue:
        'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking.',
    },
    img: {
      control: {
        type: 'object',
      },
      defaultValue: {
        alt: 'This is a profile picture!',
        fCallBack: action('icon clicked'),
        src: 'https://shorturl.at/nEO01',
      },
    },
    comment: {
      control: { type: 'object' },
      defaultValue: {
        fCallBack: action('comment clicked'),
        quantity: 0,
      },
    },
    like: {
      control: { type: 'object' },
      defaultValue: {
        fCallBack: action('like clicked'),
        quantity: 999,
      },
    },
    share: {
      control: { type: 'object' },
      defaultValue: {
        fCallBack: action('share clicked'),
        label: 'Share',
      },
    },
    mbSpacing: {
      control: 'select',
      options: ['0', '2', '4', '8', '16', '32', '64'],
      defaultValue: '0',
    },
  },
  args: {
    variant: 'timeline',
  },
} as ComponentMeta<typeof Mumble>;

const Template: ComponentStory<typeof Mumble> = (args) => <Mumble {...args} />;
/**
 * @button
 * @desc button standard slate
 */
export const MumbleStory = Template.bind({});

MumbleStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

MumbleStory.storyName = 'Mumble';
