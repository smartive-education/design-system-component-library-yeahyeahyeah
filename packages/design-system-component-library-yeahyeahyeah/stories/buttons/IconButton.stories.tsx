import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '../../components/buttons/IconButton';
import IconButtonReadme from '../../docs/IconButton.md';

export default {
  title: 'Interactions/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: 'select',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
  args: {
    label: 'Label',
    icon: 'logo',
    variant: 'default',
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};

export const ButtonIcon = Template.bind({});

ButtonIcon.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: IconButtonReadme,
    },
  },
};

ButtonIcon.storyName = 'Icon Button';
