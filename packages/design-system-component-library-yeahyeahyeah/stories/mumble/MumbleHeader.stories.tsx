import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleHeader } from '../../components/mumble/MumbleHeader';

export default {
  title: 'Mumble/Mumble-Header',
  component: MumbleHeader,
  argTypes: {
    variant: {
      control: 'select',
      defaultValue: 'edit',
    },
    label: {
      control: 'text',
      defaultValue: 'Display Name',
    },
    user: {
      control: {
        type: 'object',
      },
      defaultValue: {
        variant: 'xlarge',
        username: {
          type: 'joined',
          label: 'Username',
          href: '#',
        },
        location: {
          label: 'Location',
          type: 'joined',
          href: '#',
        },
        joined: {
          label: 'Joined',
          type: 'joined',
          href: '#',
        },
        avatar: {
          src: 'https://placebeard.it/640x360',
          alt: 'Alttag',
        },
      },
    },
    banner: {
      control: 'object',
      defaultValue: {
        src: 'https://placebeard.it/640x360',
        alt: 'Picture',
        type: 'banner',
      },
    },
    text: {
      defaultValue:
        'De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking.',
    },
    avatar: {
      control: 'object',
      defaultValue: {
        src: 'https://placebeard.it/640x360',
        alt: 'Picture',
        variant: 'edit',
      },
    },
  },
} as ComponentMeta<typeof MumbleHeader>;

const Template: ComponentStory<typeof MumbleHeader> = (args) => <MumbleHeader {...args} />;

export const MumbleStory = Template.bind({});

MumbleStory.parameters = {
  docs: {
    source: { type: 'auto' },
  },
};

MumbleStory.storyName = 'Mumble-Header';
