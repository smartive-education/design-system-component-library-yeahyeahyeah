import React from 'react';
import tw, { styled } from 'twin.macro';
import { BottomSpacing } from '../Spacing';
import type { TmbSpacing } from '../../types/types';

export interface IHeadingProps {
  label: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  color?: 'light' | 'medium' | 'dark' | 'violet' | 'pink' | 'white';
  size: 'default' | 'xlarge' | 'large' | 'medium' | 'small';
  mbSpacing?: TmbSpacing;
}

export const Heading: React.FC<IHeadingProps> = ({
  label,
  tag = 'h1',
  color = 'default',
  size = 'default',
  mbSpacing = '0',
}) => {
  const props = { label, tag, color, size, mbSpacing };

  return (
    <>
      {tag === 'h1' && <H1Styles {...props}>{label}</H1Styles>}
      {tag === 'h2' && <H2Styles {...props}>{label}</H2Styles>}
      {tag === 'h3' && <H3Styles {...props}>{label}</H3Styles>}
      {tag === 'h4' && <H4Styles {...props}>{label}</H4Styles>}
      {tag === 'span' && <SpanStyles {...props}>{label}</SpanStyles>}
    </>
  );
};

interface IHeadingStylesProps {
  color: string;
  size: string;
  tag: string;
  mbSpacing?: TmbSpacing;
}

const HeadingSize = ({ size, tag }: IHeadingStylesProps) => [
  tw`
    font-bold
    m-0
  `,
  size === 'xlarge' && tw`text-lg`,
  size === 'large' && tw`text-md`,
  size === 'medium' && tw`text-sm`,
  size === 'small' && tw`text-xs`,
  tag === 'h3' && tw`font-semibold`,
  tag === 'h4' && tw`font-semibold`,
];

const HeadingColor = ({ color }: IHeadingStylesProps) => [
  color === 'light' && tw`text-slate-500`,
  color === 'white' && tw`text-slate-white`,
  color === 'medium' && tw`text-slate-600`,
  color === 'dark' && tw`text-slate-900`,
  color === 'violet' && tw`text-violet-600`,
  color === 'pink' && tw`text-pink-900`,
  color === 'default' && tw`text-slate-900`,
];

const H1Styles = styled.h1(() => [
  tw`
    text-4xl font-bold
	`,
  HeadingColor,
  HeadingSize,
  BottomSpacing,
]);

const H2Styles = styled.h2(() => [
  tw`
    text-3xl font-bold
	`,
  HeadingColor,
  HeadingSize,
  BottomSpacing,
]);

const H3Styles = styled.h3(() => [
  tw`
    text-2xl
	`,
  HeadingColor,
  HeadingSize,
  BottomSpacing,
]);

const H4Styles = styled.h4(() => [
  tw`
    text-xl
	`,
  HeadingColor,
  HeadingSize,
  BottomSpacing,
]);

const SpanStyles = styled.span(() => [
  tw`
    text-xl
	`,
  HeadingColor,
  HeadingSize,
  BottomSpacing,
]);
