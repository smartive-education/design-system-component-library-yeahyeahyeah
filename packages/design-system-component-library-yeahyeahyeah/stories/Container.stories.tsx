import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '../components/Container';

export default {
  title: 'Wireframes/Container',
  component: Container,
  argTypes: {
    layout: {
      control: 'select',
      table: {
        defaultValue: {
          summary: 'plain',
        },
      },
    },
  },
  args: {
    layout: 'box',
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const ContainerStory = Template.bind({});

ContainerStory.storyName = 'Container';
