import React from 'react';
import tw, { styled } from 'twin.macro';
import { Icons, IconTypes } from '../icons/IconMap';
import { Avatar } from '../../components/Avatar';

export interface INaviButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'icon' | 'default' | 'profile';
  disabled?: boolean;
  fCallBack?: () => void;
  icon?: IconTypes;
}

export const NaviButton: React.FC<INaviButtonProps> = ({
  label,
  variant = 'default',
  disabled = false,
  fCallBack,
  icon = 'mumble',
}) => {
  const Icon = React.cloneElement(Object(Icons[icon]), {
    className: 'fill-slate-white',
  });

  return (
    <>
      {variant === 'default' && (
        <ButtonStyles variant={variant} disabled={disabled} onClick={fCallBack}>
          {Icon}
          <Span>{label}</Span>
        </ButtonStyles>
      )}

      {variant === 'icon' && (
        <ButtonStyles variant={variant} disabled={disabled} onClick={fCallBack}>
          {Icon}
        </ButtonStyles>
      )}

      {variant === 'profile' && (
        <ButtonStyles variant={variant} disabled={disabled} onClick={fCallBack}>
          <Avatar
            alt={'Alter Tag'}
            src="https://i.stack.imgur.com/5xd5n.png"
            variant={'small'}
          />
        </ButtonStyles>
      )}
    </>
  );
};

interface ButtonProps {
  variant?: string;
}

/**
 * @Button
 * @desc Button styles
 */
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

const ButtonStyles = styled.button(({ variant }: ButtonProps) => [
  buttonFont,
  buttonDefaults,
  buttonHover,
  buttonFocus,
  variant === 'icon' && variantIcon,
]);
