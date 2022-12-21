import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { Icons, IconTypes } from '../icons/IconMap';

export interface IconButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: IconTypes;
  variant: 'edit' | 'none';
  fCallBack?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  label,
  icon = 'time',
  variant = '',
  fCallBack,
}) => {
  const Icon = React.cloneElement(Object(Icons[icon]), {
    className: 'fill-slate-white',
  });

  return (
    <ButtonStyles variant={variant} onClick={fCallBack}>
      {Icon}
      <p>{label}</p>
    </ButtonStyles>
  );
};

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
  bg-slate-500
  flex
  flex-col-reverse
  justify-center
  overflow-hidden
  place-items-center
  [text-indent: -10000px]
  w-48
  h-48
  min-w-[48px]

  rounded-full
  text-left
  border-hidden
  outline-none
  hover:(bg-slate-700 outline-offset-0 outline-slate-100)
  focus:(outline-offset-0 outline-slate-200)
  disabled:bg-slate-300
`;

const buttonHover = tw`
  hover:(outline-3)
`;

const buttonFocus = tw`
  focus:(outline-4)
`;

interface IButtonStyles {
  variant: string;
}

const ButtonStyles = styled.button(({ variant }: IButtonStyles) => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  css`
    overflow: hidden;
    svg {
      position: relative;
      top: -8px;
      margin-left: 0;
    }
  `,
  variant === 'edit' && tw`relative self-end right-48`,
]);
