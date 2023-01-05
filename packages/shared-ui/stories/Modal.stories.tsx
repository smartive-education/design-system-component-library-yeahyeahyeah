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
    openModal: {
      control: 'object',

      table: {
        defaultValue: {
          label: 'Open Modal',
          icon: 'fullscreen',
          size: 'small',
          type: 'button',
          variant: 'violet',
          width: 'large',
          fCallBack: action('handleOpen'),
        },
      },
    },
    cancel: {
      control: 'object',
      table: {
        defaultValue: {
          label: 'Abbrechen',
          icon: 'cancel',
          size: 'small',
          type: 'button',
          variant: 'slate',
          width: 'full',
          fCallBack: action('handleClose'),
        },
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
        fCallBack: action('modal: button save'),
      },
    },
    spacing: {
      control: false,
      table: {
        disable: true,
      },
    },
    openOnStart: {
      control: 'boolean',
      description: 'modal: open on start',
      table: {
        defaultValue: false,
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalStory = Template.bind({});

ModalStory.args = {
  label: 'Modal',
  openOnStart: true,
  openModal: {
    label: 'Open Modal',
    icon: 'fullscreen',
    fCallBack: action('handleOpen'),
  },
  cancel: {
    label: 'Abbrechen',
    icon: 'cancel',
    width: 'full',
    fCallBack: action('handleClose'),
  },
};

ModalStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ModalStory.storyName = 'Modal';
