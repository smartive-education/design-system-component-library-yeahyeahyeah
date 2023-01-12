import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../../components/typography/Heading';

export default {
  title: 'Typography',
  component: Heading,
  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'select',
    },
    tag: {
      control: 'select',
    },
    color: {
      control: 'select',
    },
    alignment: {
      control: 'select',
    },
    mbSpacing: {
      control: 'select',
    },
  },
  args: {
    label:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
    size: 'default',
    tag: 'h1',
    color: 'violet',
    mbSpacing: '0',
    alignment: 'left',
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const HeadingStory = Template.bind({});

HeadingStory.storyName = 'Heading';
