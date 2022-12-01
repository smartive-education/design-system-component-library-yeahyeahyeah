import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph } from 'src/components/typography/Paragraph';

export default {
  title: 'Typography',
  component: Paragraph,
  argTypes: {
    variant: {
      description: 'Add description here ...',
      control: { type: 'select' },
    },
    color: {
      description: 'The color of paragraph',
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const ParagraphVariants = Template.bind({});

ParagraphVariants.args = {
  variant: 'large',
  color: 'dark',
};

ParagraphVariants.storyName = 'Variants';
