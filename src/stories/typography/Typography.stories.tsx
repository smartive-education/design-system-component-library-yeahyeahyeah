import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '../../components/typography/Typography';

export default {
  title: 'Typography/All Font Styles',
  component: Typography,
  argTypes: {
    label: {
      name: 'Heading',
    },
    variant: {
      description: 'Lorem ipsum',
      control: { type: 'select' },
    },
    color: {
      description: 'Choose your font color',
      control: { type: 'select' },
    },
  },
  args: {
    label: 'Typografie',
    variant: 'h1',
    color: 'slate-600',
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Heading = Template.bind({});

Heading.storyName = 'All Font Styles';

Heading.decorators = [
  (Story) => <div className="sm:container mx-auto">{Story()}</div>,
];
