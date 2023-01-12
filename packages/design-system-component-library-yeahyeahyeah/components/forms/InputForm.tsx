import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Eye } from '../icons/index';

export interface IFormInputProps {
  label?: string;
  editType: 'input' | 'textarea';
  required: boolean;
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'file';
  placeholder?: string;
  errorMessage: string;
  autoComplete: 'off' | 'on';
  handleClick?: () => void;
  setText?: React.Dispatch<React.SetStateAction<string>>;
}

export const InputForm: React.FC<IFormInputProps> = ({
  label = 'Label',
  editType = 'textarea',
  required = true,
  type = 'icon',
  placeholder = 'Placeholder',
  errorMessage,
  autoComplete = 'off',
  setText,
}) => {
  const [buttonType, setbuttonType] = useState(type);

  const showPassword = () => {
    buttonType === 'password' ? setbuttonType('text') : setbuttonType('password');
  };

  return (
    <>
      {editType === ('input' || '') && (
        <FormLabel htmlFor={label}>
          {label}
          <FormInlineWrapperStyles>
            <InputStyles
              id={label}
              placeholder={placeholder}
              type={buttonType}
              required={required}
              maxLength={150}
              autoComplete={autoComplete}
              onChange={(e) => setText && setText(e.target.value)}
            />
            {type === 'password' && <Eye tw="absolute right-16 cursor-pointer" onClick={showPassword} />}
          </FormInlineWrapperStyles>
          <FormFieldError>{errorMessage}</FormFieldError>
        </FormLabel>
      )}

      {editType === 'textarea' && (
        <>
          <FormLabel htmlFor={label}>
            {label}
            <TextareaStyles
              id={label}
              rows={20}
              cols={30}
              aria-colspan={10}
              maxLength={500}
              required={required}
              placeholder={placeholder}
              onChange={(e) => setText && setText(e.target.value)}
            />
            <FormFieldError>{errorMessage}</FormFieldError>
          </FormLabel>
        </>
      )}
    </>
  );
};

/**
 * @Form: Input, Textarea, Label
 * @desc Button styles
 */
const FormFieldError = styled.p(() => [
  tw`
    flex
    flex-row
    justify-end
    items-center
    text-xxs
    font-medium
    text-pink-700
    mt-4
  `,
]);

const FormLabel = styled.label(() => [
  tw`
    block
    text-slate-900 
    font-semibold 
    w-full 
    mt-4
    mb-24
  `,
]);

// LABEL/INPUT WRAPPER
const FormInlineWrapperStyles = styled.div(() => [
  tw`
    relative
    flex
    flex-row
    justify-end
    items-center
  `,
]);

// TEXTAREA
const TextareaStyles = styled.textarea(() => [
  tw`
  text-slate-900
    font-medium
    text-md
    leading-6

    flex
    flex-row
    justify-start
    items-start
    p-16
    rounded
    
    w-full
    h-[160px]
    min-h-[calc(4.375rem)]
    
  bg-slate-100
    border-2
    border-slate-100
    outline-none
  
    hover:(border-2 border-slate-200)
    active:(border-2 border-violet-600)
    focus:(border-2 border-violet-600)
    placeholder:(font-normal text-slate-500)
  `,
]);

// INPUT
const InputStyles = styled.input(() => [
  tw`
    peer-invalid:border-pink-700
  text-slate-500
    font-medium
    text-sm
    leading

    flex
    flex-row
    justify-start
    items-start
    form-input
    w-full
    
    rounded
    border-1
    border-slate-200
    hover:border-violet-700
    focus:border-violet-700
    placeholder:(font-normal text-slate-300)
    bg-slate-50
  `,
]);
