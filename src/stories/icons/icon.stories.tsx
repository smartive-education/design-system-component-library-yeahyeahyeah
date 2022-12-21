import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconTemplate } from '../../components/layouts/IconGrid';
import { Settings } from '../../components/icons/icons';
import { Icons, IconTypes } from '../../components/icons/IconMap';
import { Heading } from '../../components/typography/Heading';
import { Paragraph } from '../../components/typography/Paragraph';

let tailWindColors: string[] = [
  'fill-slate-500',
  'fill-violet-500',
  'fill-pink-500',
];

let tailWindColorsElement: string = '';

export default {
  title: 'Icons/Collection',
  decorators: [(story) => <IconTemplate>{story()}</IconTemplate>],
  component: Settings,
  argTypes: {
    handleClick: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof Settings>;

const TemplateIcon: ComponentStory<typeof Settings | any> = () => (
  <>
    <div className="flex flex-col justify-center items-center  pt-24 w-full">
      <Heading
        tag="h1"
        title={'ICONS'}
        label={'ICONS'}
        color={'medium'}
        variant="default"
      />
      <Paragraph text="THE MUMBLE ICON COLLECTION" color={'white'} />
      <div className="grid grid-rows-12 sm:grid-rows-6 grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-32 p-24">
        {Object.keys(Icons).map((iconType, index) => {
          tailWindColorsElement = tailWindColors.shift() || '';

          const Icon = React.cloneElement(
            Icons[iconType as IconTypes] || Icons['settings'],
            {
              className: tailWindColorsElement,
              width: '50px',
              height: '50px',
              iconName: iconType,
            },
          );

          tailWindColors.push(tailWindColorsElement);
          console.log(Icon);

          return (
            <div
              className="cursor-pointer flex flex-col justify-center items-center w-auto border-1 border-slate-800 bg-slate-800 p-16 hover:scale-105 hover:border-3 hover:rotate-3 hover:bg-slate-800 hover:border-slate-700 rounded-16"
              key={index}
            >
              <div className="flex justify-center items-center h-70 p-16 w-full mb-8 hover:scale-150 hover:-rotate-12 hover:animate-pulse display:fade-in transform-gpu translate-y-4 transition duration-300 ease-in-out">
                {Icon}
              </div>
              <Heading
                tag="h3"
                title={iconType}
                label={iconType}
                color={'light'}
                variant="small"
                className="text-justify font-semibold hover:text-slate-white"
              />
            </div>
          );
        })}
      </div>
    </div>
  </>
);

const TemplateIconSingle: ComponentStory<any> = (args) => {
  const Icon = React.cloneElement(Icons[args.iconName as IconTypes], {
    className: args.iconColor,
    width: args.iconWidth,
    height: args.iconHeight,
    iconName: 'mumble',
  });
  return (
    <>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div>{Icon}</div>
      </div>
    </>
  );
};

export const All = TemplateIcon.bind({});

All.storyName = 'Collection';

export const Single = TemplateIconSingle.bind({});

Single.args = {
  iconName: 'heart-outlined',
  iconColor: 'fill-pink-500',
  iconWidth: '300px',
  iconHeight: '300px',
};

Single.storyName = 'Icon';
