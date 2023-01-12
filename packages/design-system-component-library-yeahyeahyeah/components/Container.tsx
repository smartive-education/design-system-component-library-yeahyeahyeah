import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface IContainerProps {
  children?: React.ReactNode;
  layout: 'plain' | 'box';
}

export const Container: React.FC<IContainerProps> = (props: IContainerProps) => {
  const { layout = 'colored', children } = props;

  return <SectionWrapper layout={layout}>{children}</SectionWrapper>;
};

interface ContainerStyles {
  layout: string;
}

const SectionWrapper = styled.section(({ layout }: ContainerStyles) => [
  tw`
    container
    mx-4
    sm:mx-auto
  `,
  layout === 'box' && tw`bg-slate-white rounded-lg py-8 mx-4`,
  layout === 'plain' && tw`bg-none px-4`,
]);
