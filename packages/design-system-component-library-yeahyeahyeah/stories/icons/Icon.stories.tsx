import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconTemplate } from '../layouts/IconGrid';
import { Settings } from '../../components/icons/index';
import { IconsMapped, IconTypes } from '../../components/icons/IconMap';
import { Heading } from '../../components/typography/Heading';
import { Paragraph } from '../../components/typography/Paragraph';
import tw, { TwStyle } from 'twin.macro';
import React from 'react';
import styled from 'styled-components';

const tailWindColors: TwStyle[] = [tw`fill-slate-500`, tw`fill-violet-500`, tw`fill-pink-500`];

let tailWindColorsElement: TwStyle = tw`fill-slate-500`;

export default {
  title: 'Medias/Collection',
  decorators: [(story) => <IconTemplate>{story()}</IconTemplate>],
  argTypes: {
    handleClick: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof Settings>;

const GridDiv = tw.div`grid md:grid-cols-5 sm:grid-cols-3 gap-32 p-24`; // todo grid-rows-12 fehlt ??
const Col = tw.div`flex flex-col justify-center items-center pt-24`;

const createIcon = (icon: IconTypes) => {
  return styled(IconsMapped[icon as IconTypes])(() => [tw`w-full h-full`]);
};

const TemplateIcon: ComponentStory<(IconsMapped: React.SVGProps<SVGSVGElement>) => JSX.Element> = () => (
  <>
    <Col>
      <Heading tag="h1" label={'ICONS'} color={'medium'} size="default" />
      <Paragraph text="THE MUMBLE ICON COLLECTION" color={'white'} />
      <GridDiv>
        {Object.keys(IconsMapped).map((iconType, index) => {
          tailWindColorsElement = (tailWindColors.shift() as TwStyle) || '';

          const Icon = createIcon(iconType as IconTypes);

          tailWindColors.push(tailWindColorsElement);

          const IconCol = tw.div`cursor-pointer flex flex-col justify-center items-center w-auto border-1 border-slate-800 bg-slate-800 p-16 hover:scale-105 hover:rotate-3 hover:bg-slate-800 hover:border-slate-700 rounded-16`;
          const IconFlex = tw.div`flex justify-center items-center h-70 p-16 w-full mb-8 hover:scale-150 hover:-rotate-12 hover:animate-pulse transform-gpu translate-y-4 transition duration-300 ease-in-out`;

          return (
            <IconCol key={index}>
              <IconFlex>
                <Icon fill={tailWindColorsElement.fill as string} />
              </IconFlex>
              <Heading
                tag="h3"
                label={iconType}
                color={'light'}
                size="small"
                tw="text-justify font-semibold hover:text-slate-white"
              />
            </IconCol>
          );
        })}
      </GridDiv>
    </Col>
  </>
);

const TemplateIconSingle: ComponentStory<typeof IconsMapped.logo> = () => {
  const Div = tw.div`grid grid-rows-4 grid-flow-col gap-4`;

  const createIcon = (icon: IconTypes) => {
    return styled(IconsMapped[icon as IconTypes])(() => [tw`w-[200px] h-[200px] fill-violet-500`]);
  };

  const Icon = createIcon('logo');

  return (
    <Div>
      <Icon />
    </Div>
  );
};

export const All = TemplateIcon.bind({});

All.storyName = 'Collection';

export const Single = TemplateIconSingle.bind({});

All.parameters = {
  darkMode: {
    current: 'dark',
  },
};

Single.storyName = 'Icon';
