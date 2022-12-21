import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconLink } from '../components/IconLink';
import { DefaultLayout } from '../components/layouts/DefaultLayout';

export default {
  title: 'Interactions',
  component: IconLink,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'username',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'slate',
    },
    href: {
      defaultValue: '',
    },
    handleClick: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => {
  return <IconLink {...args} />;
};
/**
 * @button
 * @desc button standard slate
 */
export const IconLinkVariants = Template.bind({});

IconLinkVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

IconLinkVariants.storyName = 'Icon Link';
