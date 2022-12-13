import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface IButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'slate' | 'violet' | 'pink';
  size?: 'small' | 'large';
  width?: 'default' | 'large' | 'full';
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  handleClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({
  label = 'Button Label',
  variant = 'slate',
  type = 'button',
  size = 'small',
  width = 'default',
  disabled = false,
  handleClick,
  children,
}) => {
  return (
    <>
      <ButtonStyles
        variant={variant}
        size={size}
        width={width}
        type={type}
        disabled={disabled}
        onClick={handleClick}
      >
        {label}
        {children}
      </ButtonStyles>
    </>
  );
};

interface ButtonProps {
  variant?: string;
  width?: string;
  size?: string;
}

/**
 * @Button
 * @desc Button styles
 */
const buttonFont = tw`
  text-skin-light
  font-semibold
  leading-normal
`;

const buttonDefaults = tw`
  flex
  grow-0
  justify-center
  items-center
  p-12
  rounded
  w-auto
  outline-none
`;

const buttonHover = tw`
  hover:(outline-3 outline-offset-0)
`;

const buttonFocus = tw`
  focus:(outline-4 outline-offset-0)
`;

const variantSlate = tw`
  bg-slate-600
  hover:(bg-slate-700 outline-slate-100)
  focus:(outline-slate-200)
  disabled:bg-slate-300
`;

const variantViolet = tw`
  bg-violet-600
    hover:(bg-violet-700 outline-violet-100)
    focus:(outline-violet-200)
    disabled:bg-violet-300
`;

const variantPink = tw`
  bg-gradient-to-r
  from-pink-500
  to-violet-500
  hover:(bg-gradient-to-r-70 outline-violet-100)
  focus:(bg-gradient-to-r-80 outline-violet-200)
  disabled:(bg-gradient-to-r from-pink-300 to-violet-300)
`;

const buttonWidth = (width: string | undefined) => [
  width === 'default' ? null : tw`w-full`,
  width === 'large' && tw`w-[184px] h-[40px]`,
];

const buttonSize = (size: string | undefined) =>
  size === 'large' ? tw`py-16 px-24` : null;

const getVariant = (variant: string | undefined) => {
  switch (variant) {
    case 'slate':
      return variantSlate;
    case 'violet':
      return variantViolet;
    case 'pink':
      return variantPink;
    default:
      return variantSlate;
  }
};

const ButtonStyles = styled.button(({ variant, width, size }: ButtonProps) => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  buttonWidth(width),
  buttonSize(size),
  getVariant(variant),
]);
