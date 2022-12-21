import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Share } from '../../components/icons/icons';

export interface IShareButton
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  fCallBack?: () => void;
}

export const ShareButton: React.FC<IShareButton> = ({
  label = 'Copy Link',
  fCallBack,
}) => {
  const [labelText, setLabelText] = useState<string>(label);

  const handleClick = () => {
    setLabelText('Link copied');

    window.setTimeout(() => {
      setLabelText(label);
    }, 1000);

    fCallBack && fCallBack();
  };

  return (
    <>
      <ButtonStyles onClick={handleClick}>
        <Share className="fill-slate-600 mr-6" width="16px" height="16px" />
        {labelText}
      </ButtonStyles>
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */
const ButtonStyles = styled.button(() => [
  tw`
    text-skin-light
    font-semibold
    leading-normal
    text-slate-600

    flex
    grow-0
    justify-center
    items-center
    p-12
    rounded-full
    
    w-auto
    outline-none
    bg-none
    
    hover:(text-slate-700 bg-slate-100)
    focus:(text-slate-700)
  `,
  css`
    svg {
      margin-left: 0;
      margin-right: 8px;
    }
    :hover svg {
      fill: #334155;
    }
  `,
]);
