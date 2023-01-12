import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph } from '../../components/typography/Paragraph';
import ParagraphReadme from '../../docs/Paragraph.md';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    alignment: {
      control: 'select',
    },
    size: {
      description: 'Add description here ...',
      control: { type: 'select' },
      defaultValue: 'default',
    },
    color: {
      description: 'The color of paragraph',
      control: { type: 'select' },
      defaultValue: 'default',
    },
    text: {
      defaultValue:
        'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    mbSpacing: {
      control: 'select',
      options: ['0', '2', '4', '8', '16', '32', '64'],
      defaultValue: '0',
    },
  },
  args: {
    alignment: 'left',
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const ParagraphVariants = Template.bind({});

ParagraphVariants.parameters = {
  docs: {
    description: {
      component: ParagraphReadme,
    },
  },
};

ParagraphVariants.storyName = 'Paragraph';
