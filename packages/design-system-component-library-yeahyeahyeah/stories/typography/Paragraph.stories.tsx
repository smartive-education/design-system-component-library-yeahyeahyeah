import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph } from '../../components/typography/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
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
      defaultValue: 'This is a paragraph',
    },
    mbSpacing: {
      control: 'select',
      options: ['0', '2', '4', '8', '16', '32', '64'],
      defaultValue: '0',
    },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const ParagraphVariants = Template.bind({});

ParagraphVariants.storyName = 'Paragraph';