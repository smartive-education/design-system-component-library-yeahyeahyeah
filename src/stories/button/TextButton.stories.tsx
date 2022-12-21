import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextButton } from '../../components/buttons/TextButton';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';

export default {
  title: 'Interactions',
  component: TextButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Label',
    },
    handleClick: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const ButtonText = Template.bind({});

ButtonText.args = {
  label: 'Link Label',
};

ButtonText.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ButtonText.storyName = 'Text Button';
