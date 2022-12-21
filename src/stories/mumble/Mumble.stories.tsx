import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Mumble } from '../../components/Mumble';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';

export default {
  title: 'Mumble/Mumble',
  component: Mumble,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    variant: {
      defaultValue: 'timeline',
    },
    user: {
      control: {
        type: 'object',
      },
      defaultValue: {
        avatar: {
          alt: 'avatar',
          src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
          fCallBack: () => {
            console.log('user avatar clicked');
          },
        },
        btn: {
          fCallBack: () => {},
          label: 'Follow',
        },
        joined: {
          href: '',
          label: 'Joined',
        },
        label: 'Display Name',
        location: {
          href: '',
          label: 'Location',
        },
        timestamp: {
          href: '',
          label: 'Timestamp',
        },
        username: {
          href: '',
          label: 'Username',
        },
        variant: 'xlarge',
      },
    },
    avatar: {
      control: {
        type: 'object',
      },
      defaultValue: {
        alt: 'Alt-Tag',
        src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
        fCallBack: () => {
          console.log('avatar clicked');
        },
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
        fCallBack: () => {},
        src: 'https://shorturl.at/uvyKU',
      },
    },
    comment: {
      control: { type: 'object' },
      defaultValue: {
        fCallBack: () => {
          console.log('comment');
        },
        quantity: 0,
      },
    },
    like: {
      control: { type: 'object' },
      defaultValue: {
        fCallBack: () => {
          console.log('like');
        },
        quantity: 999,
      },
    },
    share: {
      control: { type: 'object' },
      defaultValue: {
        fCallBack: () => {
          console.log('share');
        },
        label: 'Share',
      },
    },
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
