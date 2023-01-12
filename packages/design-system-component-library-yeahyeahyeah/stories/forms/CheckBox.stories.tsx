import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBox } from '../../components/forms/CheckBox';

export default {
  title: 'Form',
  component: CheckBox,
  argTypes: {
    selection: {
      control: 'select',
      table: {
        defaultValue: {
          summary: 'mumbles',
        },
      },
    },
    fCallBack: {
      action: () => 'handleChange',
      table: {
        defaultValue: {
          summary: 'mumbles',
        },
      },
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

/**
 * @input
 * @desc form input field
 */
export const CheckBoxStory = Template.bind({});

CheckBoxStory.args = {
  selection: 'mumbles',
};

CheckBoxStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

CheckBoxStory.storyName = 'CheckBox';
