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
          src: 'https://i0.wp.com/www.mobiflip.de/wp-content/uploads/2022/12/avatar-2-film-detail.jpg?resize=1600%2C1280&ssl=1',
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
