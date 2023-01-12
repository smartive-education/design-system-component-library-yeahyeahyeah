import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

export interface IFormCheckBoxProps {
  selection: 'mumbles' | 'likes';
  fCallBack?: (type: string) => void;
}

export const CheckBox: React.FC<IFormCheckBoxProps> = (props: IFormCheckBoxProps) => {
  const { fCallBack } = props;
  const [isType, setIsType] = useState<string>('mumbles');

  const handleChange = () => {
    isType === 'mumbles' ? setIsType('likes') : setIsType('mumbles');
    fCallBack && fCallBack(isType);
  };

  return (
    <>
      <FormLabel htmlFor="switch">
        <FormInput id="switch" type="checkbox" name="switch" onChange={handleChange} />
        <FormSpanMumble selection={isType}>Deine Mumbles</FormSpanMumble>
        <FormSpanLike selection={isType}>Deine Likes</FormSpanLike>
      </FormLabel>
    </>
  );
};

interface IFormSpanStyles {
  selection: string;
  fCallBack?: () => void;
}

const Span = tw`
    flex
    justify-center
    sm:justify-start
    text-sm
    sm:text-md
    font-semibold
    text-slate-600

    w-full
    sm:w-auto
    p-6
    px-[11px]
    rounded  
    bg-none
`;

const FormSpanMumble = styled.span(({ selection }: IFormSpanStyles) => [
  Span,
  selection === 'mumbles' && tw`bg-slate-white text-violet-600 hover:grow`,
  selection === 'likes' && tw`text-left hover:(sm:text-right text-slate-800)`,
]);

const FormSpanLike = styled.span(({ selection }: IFormSpanStyles) => [
  Span,
  selection === 'likes' && tw`sm:justify-end bg-slate-white text-violet-600 hover:grow`,
  selection === 'mumbles' && tw`hover:(text-slate-800)`,
]);

const FormLabel = styled.label(() => [
  tw`
    flex
    flex-col
    sm:flex-row
    justify-between
    items-center

    w-auto
    h-auto
    sm:w-[336px]
    sm:h-[48px]
    py-4
    px-[5px]
    
    rounded
    bg-slate-200 
    cursor-pointer
  `,
]);

const FormInput = styled.input(() => [
  tw`
    hidden
  `,
]);
