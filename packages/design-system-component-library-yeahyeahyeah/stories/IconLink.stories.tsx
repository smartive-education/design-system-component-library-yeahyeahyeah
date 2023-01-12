import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconLink } from '../components/IconLink';
import { action } from '@storybook/addon-actions';
import IconLinkReadme from '../docs/IconLink.md';

export default {
  title: 'Interactions',
  component: IconLink,
  argTypes: {
    label: {
      control: 'text',
    },
    color: {
      control: 'select',
    },
    href: {
      control: 'text',
    },
    type: {
      control: 'select',
    },
    fCallBack: {
      defaultValue: action('IconLink clicked'),
    },
  },
  args: {
    label: 'string',
    color: 'slate',
    href: '#',
    type: 'username',
  },
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => {
  return <IconLink {...args} />;
};

export const IconLinkVariants = Template.bind({});

IconLinkVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: IconLinkReadme,
    },
  },
};

IconLinkVariants.storyName = 'Icon Link';
