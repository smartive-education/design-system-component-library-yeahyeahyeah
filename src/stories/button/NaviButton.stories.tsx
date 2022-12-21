import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NaviButton } from '../../components/buttons/NaviButton';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { Icons } from '../../components/icons/IconMap';

export default {
  title: 'Navigation',
  component: NaviButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Label',
    },
    variant: {
      control: {
        type: 'select',
      },
    },
    fCallBack: {
      action: () => 'handleClick',
    },
    width: {
      control: false,
      table: {
        disable: true,
      },
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    icon: {
      control: 'select',
      options: Object.keys(Icons),
      name: 'Icon',
      defaultValue: 'settings',
    },
  },
} as ComponentMeta<typeof NaviButton>;

const Template: ComponentStory<typeof NaviButton> = (args) => {
  return <NaviButton {...args} />;
};
/**
 * @button
 * @desc button standard slate
 */
export const NaviButtonStory = Template.bind({});

NaviButtonStory.args = {
  label: 'Label',
  variant: 'default',
};

NaviButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

NaviButtonStory.storyName = 'Navi Button';
