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
      description: 'Element that opens modal',
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
    openOnStart: {
      control: 'boolean',
      description: 'Open modal on start',
      table: {
        defaultValue: false,
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalStory = Template.bind({});

ModalStory.args = {
  label: 'Title modal',
  openOnStart: true,
  openModal: {
    label: 'Open Modal',
    icon: 'fullscreen',
    fCallBack: action('handleOpen'),
  },
  fCallBack: action('handleClose'),
};

ModalStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ModalStory.storyName = 'Modal';
