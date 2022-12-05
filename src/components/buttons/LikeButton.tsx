import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Icon, IIcon } from 'src/components/Icon';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  iconName: string;
  handleClick?: () => void;
}

export const LikeButton: React.FC<IButtonProps & IIcon> = ({
  label,
  iconColor = 'fill-slate-500',
  iconName = 'heart-outlined',
}) => {
  const [iconChange, setIconChange] = useState(iconName);
  const [labelChange, setLabelChange] = useState<string>(label);
  const [iconColorChange, setIconColorChange] = useState(iconColor);
  let [likes, setLikes] = useState<number>(0);
  const [fontColor, setFontColor] = useState('text-slate-500');

  const handleClick = () => {
    setIconChange('heart-filled');
    setIconColorChange('fill-pink-500');
    setLikes(likes + 1);

    if (likes >= 1) {
      setFontColor('hasAction');
      setLabelChange('Likes');
    } else {
      setLabelChange('Like');
    }
  };

  return (
    <>
      <ButtonStyles className={fontColor} onClick={handleClick} likes={likes}>
        <Icon iconName={iconChange} iconColor={iconColorChange} />
        {likes > 0 && `${likes}`} {labelChange}
      </ButtonStyles>
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */
interface IButtonStyles {
  likes: number;
}
const ButtonStyles = styled.button(({ likes }: IButtonStyles) => [
  tw`
  font-semibold
  leading-normal
  text-slate-500
  text-sm
  flex
  grow-0
  justify-center
  items-center
  p-12
  rounded-full
  w-auto
  outline-none
  bg-none
  hover:(text-pink-600 bg-pink-50)
  active:(bg-none text-pink-900)
  `,
  likes === 1 && tw`text-pink-900`,
  css`
    &.hasAction {
      color: #831843;
    }

    svg {
      margin: 0 8px 0 0;
    }

    :hover svg {
      fill: #db2777;
    }
  `,
]);