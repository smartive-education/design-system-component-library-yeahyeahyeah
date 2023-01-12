import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface TextButtonProps {
  label: string;
  handleClick?: () => void;
}

export const TextButton: React.FC<TextButtonProps> = ({ label = 'Button Label', handleClick }) => {
  return (
    <StyledTextButton onClick={handleClick} aria-label={label}>
      {label}
    </StyledTextButton>
  );
};

const buttonFont = tw`
  text-xs
  font-semibold
  leading-normal
`;

const buttonDefaults = tw`
  text-violet-600
  flex
  grow-0
  justify-center
  items-center
  py-2
  px-0
  rounded-none
  w-auto
  border-b-2
  border-b-violet-600
`;

const buttonHover = tw`
  hover:(border-b-violet-200)
`;

const buttonFocus = tw`
  focus:(border-b-violet-700)
`;

const StyledTextButton = styled.button(() => [buttonFont, buttonDefaults, buttonHover, buttonFocus]);
