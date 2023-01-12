import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IconsMapped, IconTypes } from '../icons/IconMap';
import { Avatar } from '../Avatar';

export interface INaviButtonProps {
  label: string;
  variant?: 'icon' | 'default' | 'profile';
  disabled?: boolean;
  fCallBack?: () => void;
  icon?: IconTypes;
  src?: string;
}

export const NaviButton: React.FC<INaviButtonProps> = ({
  label,
  variant = 'default',
  disabled = false,
  fCallBack,
  icon = 'logo',
  src = 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
}) => {
  const Icon = createIcon(icon);

  return (
    <>
      {variant === 'default' && (
        <ButtonStyles variant={variant} disabled={disabled} onClick={fCallBack} aria-label={label}>
          <Icon />
          <Span>{label}</Span>
        </ButtonStyles>
      )}

      {variant === 'icon' && (
        <ButtonStyles variant={variant} disabled={disabled} onClick={fCallBack} aria-label={label}>
          <Icon />
        </ButtonStyles>
      )}

      {variant === 'profile' && (
        <ButtonStyles variant={variant} disabled={disabled} onClick={fCallBack} aria-label={label}>
          <Avatar alt={'Alter Tag'} src={src} variant={'small'} />
        </ButtonStyles>
      )}
    </>
  );
};

const createIcon = (icon: IconTypes) => {
  return styled(IconsMapped[icon as IconTypes])(() => [tw`fill-slate-white`]);
};

const buttonFont = tw`
  text-xs
  text-skin-light
  font-semibold
  leading-normal
`;

const buttonDefaults = tw`
  bg-violet-600
  flex
  flex-col
  justify-center
  items-center
  p-12
  rounded
  border-hidden
  outline-none
  cursor-pointer
`;

const Span = styled.span(() => [
  tw`
    hidden
    sm:(block mt-6)
  `,
]);

const buttonHover = tw`
  hover:(text-skin-light bg-violet-700)
`;

const buttonFocus = tw`
  focus:(bg-violet-700)
`;

const variantIcon = tw`
  p-8
`;

interface ButtonProps {
  variant?: string;
}

const ButtonStyles = styled.button(({ variant }: ButtonProps) => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  variant === 'icon' && variantIcon,
]);
