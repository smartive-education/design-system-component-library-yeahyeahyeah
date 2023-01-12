import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageContainer } from '../components/ImageContainer';
import ImageContainerReadme from '../docs/ImageContainer.md';

export default {
  title: 'Medias/Image',
  component: ImageContainer,
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
    loading: {
      control: 'boolean',
    },
    type: {
      control: 'select',
    },
  },
  args: {
    src: 'https://shorturl.at/nEO01',
    alt: 'This is a profile picture',
    loading: false,
    type: 'container',
  },
} as ComponentMeta<typeof ImageContainer>;

const Template: ComponentStory<typeof ImageContainer> = (args) => <ImageContainer {...args} />;

export const ImageContainerStory = Template.bind({});

ImageContainerStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: ImageContainerReadme,
    },
  },
};

ImageContainerStory.storyName = 'Image';
