import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface ITypographyProps {
  label: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  color: 'slate-500' | 'slate-600' | 'violet-600' | 'pink-900';
}

export const Typography: React.FC<ITypographyProps> = ({ label, variant, color }) => {
  console.log(variant, color);

  return (
    <>
      <div css={tw`bg-violet-700 text-pink-200`}>
        this is the css prop, todo: this component needs to be fixed - no className when u use tailwind
      </div>
      <div className="container">
        <div className="m-4">
          <HeadingStyles variant={variant} color={color}>
            {label}
          </HeadingStyles>
          <h4 className="text-lg font-medium text-slate-500 mb-6">Google Font “Poppins”, Medium, Semibold & Bold</h4>
          <h1>{label}</h1>
          <h2 className="mb-8">{label}</h2>
          <h3 className="mb-8">{label}</h3>
          <h4 className="mb-32">{label}</h4>
          <p className="text-lg font-medium mb-32">
            Paragraph L – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. optio sed quis cumque error magni.
            Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat
            magni.
          </p>
          <p className="text-base font-medium leading-loose mb-32">
            Paragraph M – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum
            optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae
            quos excepturi ut deleniti ut repellat magni.
          </p>
          <p className="text-lg font-semibold mb-8">Label XL</p>
          <p className="text-md font-semibold mb-8">Label L</p>
          <p className="text-base font-semibold mb-8">Label M</p>
          <p className="text-sm font-medium text-slate-300 mb-8">Placeholder</p>
          <p className="text-xs font-semibold mb-8">Label S</p>
        </div>

        <div className="m-4"></div>
      </div>
    </>
  );
};

interface IHeadingStylesProps {
  variant: string;
  color: string;
}

const HeadingStyles = styled.h1(({ variant, color }: IHeadingStylesProps) => [
  tw`
		m-0
	`,
  variant === 'h1' && tw`text-4xl font-bold`,
  variant === 'h2' && tw`text-3xl font-bold`,
  variant === 'h3' && tw`text-2xl font-semibold`,
  variant === 'h4' && tw`text-xl font-semibold`,
  color === 'slate-500' && tw`text-slate-500`,
  color === 'slate-600' && tw`text-slate-600`,
  color === 'violet-600' && tw`text-violet-600`,
  color === 'pink-900' && tw`text-pink-900`,
]);
