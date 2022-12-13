import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
interface IDefaultLayout {
  children: React.ReactElement;
}

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return <StyledDefaultLayout className="">{children}</StyledDefaultLayout>;
};

const StyledDefaultLayout = styled.div(() => [
  tw`
    flex
    flex-row
    flex-wrap
    justify-center
    items-start
     w-full
     h-screen
     p-16
     pt-32
  `,
]);
