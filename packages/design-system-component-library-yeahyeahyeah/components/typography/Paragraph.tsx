import React from 'react';
import tw, { styled } from 'twin.macro';
import { BottomSpacing } from '../Spacing';
import type { TmbSpacing } from '../../types/types';

export interface IParagraphProps {
  text: string;
  size?: 'default' | 'medium' | 'large';
  color?: 'default' | 'dark' | 'light' | 'white';
  alignment?: 'left' | 'center' | 'right';
  mbSpacing?: TmbSpacing;
}

export const Paragraph: React.FC<IParagraphProps> = ({ size = 'medium', color = 'default', mbSpacing, text, alignment }) => {
  return (
    <>
      <ParagraphStyles size={size} color={color} mbSpacing={mbSpacing} alignment={alignment}>
        {text}
      </ParagraphStyles>
    </>
  );
};

interface IParagraphStylesProps {
  size: string;
  color?: string;
  mbSpacing?: TmbSpacing;
  alignment?: string;
}

const Aligment = ({ alignment }: IParagraphStylesProps) => [
  tw`
    text-left
  `,
  alignment === 'left' && tw`text-left`,
  alignment === 'center' && tw`text-center`,
  alignment === 'right' && tw`text-right`,
];

const paragraphDefaults = tw`font-medium w-full`;
const paragraphMedium = tw`text-base font-medium`;
const paragraphLarge = tw`text-lg font-medium`;
const paragraphColorDark = tw`text-slate-900`;
const paragraphColorLight = tw`text-slate-500`;
const paragraphColorWhite = tw`text-slate-white`;
const ParagraphStyles = styled.p(({ size, color }: IParagraphStylesProps) => [
  tw`
      mb-24
    `,
  paragraphDefaults,
  BottomSpacing,
  Aligment,
  size === 'large' && paragraphLarge,
  size === 'medium' && paragraphMedium,
  color === 'dark' && paragraphColorDark,
  color === 'light' && paragraphColorLight,
  color === 'white' && paragraphColorWhite,
]);
