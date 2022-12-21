import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../components/buttons/Button';
import { Icons } from '../../components/icons/IconMap';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';

export default {
  title: 'Interactions',
  component: Button,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Button Label',
    },
    type: {
      control: {
        type: 'select',
      },
      defaultValue: 'button',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    size: {
      description: 'A sized version of the button',
      control: { type: 'select' },
      defaultValue: 'small',
    },
    width: {
      description: 'A full width version of the button',
      control: {
        type: 'radio',
      },
      defaultValue: 'default',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'slate',
    },
    handleClick: {
      action: () => 'handleClick',
    },
    icon: {
      control: 'select',
      options: Object.keys(Icons),
      name: 'Icon',
      defaultValue: 'settings',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

/**
 * @button
 * @desc button standard slate
 */
export const ButtonVariants = Template.bind({});

ButtonVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ButtonVariants.storyName = 'Button';
