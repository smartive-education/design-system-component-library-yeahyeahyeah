import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WriteComponent } from '../../components/forms/WriteComponent';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';

export default {
  title: 'Write-Component/Inline',
  component: WriteComponent,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    mode: {
      control: {
        type: 'select',
      },
      defaultValue: 'inline',
    },
    user: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Display Name',
        username: {
          label: 'Username',
          href: '#',
        },
        avatar: {
          src: 'https://shorturl.at/cioP7',
          alt: 'Family Guy goes Mumble',
        },
      },
    },
    form: {
      control: {
        type: 'object',
      },
      defaultValue: {
        placeholder: 'Na, was meinste dazu ...?',
        errorMessage: 'Da ist etwas schief gelaufen',
      },
    },
  },
} as ComponentMeta<typeof WriteComponent>;

const Template: ComponentStory<typeof WriteComponent> = (args) => (
  <WriteComponent {...args} />
);

/**
 * @input
 * @desc form input field
 */
export const ComponentWrite = Template.bind({});

ComponentWrite.storyName = 'Inline';

ComponentWrite.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};
