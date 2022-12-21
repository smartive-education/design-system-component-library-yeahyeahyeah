import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputForm } from '../../components/forms/Input';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';

export default {
  title: 'Form/Fields',
  component: InputForm,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      name: 'type',
      defaultValue: 'text',
    },
    placeholder: {
      name: 'placeholder',
      defaultValue: 'Placeholder',
    },
    width: {
      control: false,
      table: {
        disable: true,
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    errorMessage: {
      name: 'errorMessage',
      defaultValue: 'Error Message',
    },
    editType: {
      control: false,
      table: {
        disable: true,
      },
    },
    autoComplete: {
      control: {
        type: 'select',
      },
      defaultValue: 'off',
    },
  },
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => (
  <InputForm {...args} />
);

/**
 * @input
 * @desc form input field
 */
export const FormInput = Template.bind({});

FormInput.args = {
  editType: 'input',
  label: 'Label',
};

FormInput.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

FormInput.storyName = 'Input';

/**
 * @textarea
 * @desc form textarea
 */
export const FormTextarea = Template.bind({});

FormTextarea.argTypes = {
  editType: {
    control: false,
    table: {
      disable: true,
    },
  },
  type: {
    control: false,
    table: {
      disable: true,
    },
  },
  required: {
    control: false,
    table: {
      disable: true,
    },
  },
};

FormTextarea.args = {
  editType: 'textarea',
  type: undefined,
  label: 'Label',
  required: false,
  placeholder: 'Was gibt es neues',
};

FormTextarea.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

FormTextarea.storyName = 'Textarea';
