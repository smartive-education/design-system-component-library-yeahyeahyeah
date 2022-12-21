import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { Heading } from '../../components/typography/Heading';

export default {
  title: 'Typography',
  component: Heading,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Heading',
    },
    variant: {
      control: { type: 'select' },
      description: 'Lable style variants.',
      defaultValue: 'default',
    },
    tag: {
      control: { type: 'select' },
      description: 'Choose your HTML-Tag',
      defaultValue: 'h1',
    },
    color: {
      control: { type: 'select' },
      description: 'Color variants',
      defaultValue: 'medium',
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HeadingStory = Template.bind({});

HeadingStory.storyName = 'Heading';
