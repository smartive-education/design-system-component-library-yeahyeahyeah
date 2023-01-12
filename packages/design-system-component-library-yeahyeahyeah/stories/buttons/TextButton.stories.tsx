import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextButton } from '../../components/buttons/TextButton';
import TextButtonReadme from '../../docs/TextButton.md';

export default {
  title: 'Interactions',
  component: TextButton,
  argTypes: {
    label: {
      control: 'text',
    },
    handleClick: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />;

export const ButtonText = Template.bind({});

ButtonText.args = {
  label: 'Link Label',
};

ButtonText.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: TextButtonReadme,
    },
  },
};

ButtonText.storyName = 'Text Button';
