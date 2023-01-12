import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleLogo } from '../../components/branding/MumbleLogo';
import React from 'react';

export default {
  title: 'Branding/Logo',
  component: MumbleLogo,
  argTypes: {
    title: {
      name: 'title',
      defaultValue: 'Homepage',
    },
    href: {
      name: 'href',
      defaultValue: '#',
    },
    alignment: {
      control: {
        type: 'select',
      },
      defaultValue: 'horizontal',
    },
    color: {
      control: {
        type: 'select',
      },
      defaultValue: 'violet',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
    isNavigation: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof MumbleLogo>;

const Template: ComponentStory<typeof MumbleLogo> = (args) => {
  return <MumbleLogo {...args} />;
};

export const LogoVariants = Template.bind({});

LogoVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

LogoVariants.storyName = 'Logo';
