import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { ImageContainer } from '../components/ImageContainer';

export default {
  title: 'Assets/Image',
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  component: ImageContainer,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://shorturl.at/uvyKU',
    },
    alt: {
      control: {
        type: 'text',
      },
      defaultValue: 'This is a profile picture!',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
    icon: {
      control: 'select',
      defaultValue: 'fullscreen',
    },
    loading: {
      control: 'boolean',
      description: 'Image loading state',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof ImageContainer>;

const Template: ComponentStory<typeof ImageContainer> = (args) => (
  <ImageContainer {...args} />
);

export const ImageContainerStory = Template.bind({});

ImageContainerStory.storyName = 'Image';
