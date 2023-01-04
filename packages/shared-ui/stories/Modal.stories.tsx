import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../components/Modal';
import { DefaultLayout } from './layouts/DefaultLayout';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Modal/Modal',
  component: Modal,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Title',
        },
      },
    },
    cancel: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Abbrechen',
        icon: 'cancel',
        size: 'small',
        type: 'button',
        variant: 'slate',
        width: 'full',
        fCallBack: action('Modal cancel clicked'),
      },
    },
    save: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Speichern',
        icon: 'checkmark',
        size: 'small',
        type: 'button',
        variant: 'violet',
        width: 'full',
        fCallBack: action('Modal save clicked'),
      },
    },
    spacing: {
      control: false,
      table: {
        disable: true,
      },
    },
    fCallBack: () => {
      console.log('Avatar');
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
/**
 * @button
 * @desc button standard slate
 */
export const ModalStory = Template.bind({});

ModalStory.args = {
  label: 'Modal',
};

ModalStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ModalStory.storyName = 'Modal';
