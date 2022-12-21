import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MumbleLogo } from '../../components/icons/MumbleLogo';
import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { ISVGProps } from '../../interfaces/SVG';

export default {
  title: 'Branding/Logo',
  component: MumbleLogo,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    title: {
      name: 'title',
      defaultValue: 'Homepage',
    },
    href: {
      name: 'href',
      defaultValue: '#',
    },
    alignment: {
      control: {
        type: 'select',
      },
      defaultValue: 'vertical',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'violet',
    },
    iconName: {
      control: false,
      table: {
        disable: true,
      },
      defaultValue: 'mumble-logo',
    },
    iconWidth: {
      control: false,
      table: {
        disable: true,
      },
      defaultValue: '246px',
    },
    iconHeight: {
      control: false,
      table: {
        disable: true,
      },
      defaultValue: 'auto',
    },
    iconColor: {
      control: false,
      table: {
        disable: true,
      },
      defaultValue: 'fill-violet-600',
    },
  },
} as ComponentMeta<typeof MumbleLogo>;

const Template: ComponentStory<typeof MumbleLogo> = (args) => {
  const props: ISVGProps = {
    className: `${args.className}`,
    width: `${args.iconWidth}`,
    height: `${args.iconHeight}`,
  };
  const childrenWithProps = React.Children.map(args.children, (child) => {
    if (React.isValidElement<ISVGProps>(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

  return <MumbleLogo {...args}>{childrenWithProps}</MumbleLogo>;
};
/**
 * @button
 * @desc button standard slate
 */
export const LogoVariants = Template.bind({});

LogoVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

LogoVariants.storyName = 'Logo';
