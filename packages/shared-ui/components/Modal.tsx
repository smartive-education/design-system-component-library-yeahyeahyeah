import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Heading } from './typography/Heading';
import { Button, IButtonProps } from './buttons/Button';
import { Cancel } from './index';

export interface IModalProps extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  cancel: IButtonProps;
  save: IButtonProps;
  fCallBack?: () => void;
  spacing?: TSpacing;
  children?: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({
  label = 'Modal',
  cancel = {
    label: 'Label',
    icon: 'cancel',
    size: 'small',
    type: 'button',
    variant: 'slate',
    width: 'full',
  },
  save = {
    label: 'Label',
    icon: 'checkmark',
    size: 'small',
    type: 'button',
    variant: 'violet',
    width: 'full',
    fCallBack: () => {
      return null;
    },
  },
  children,
}) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    console.log('close clicked');
  };

  const handleOpen = () => {
    setOpen(true);
    console.log('Modal open clicked');
  };

  return (
    <>
      <Button
        fCallBack={handleOpen}
        label={'Open Modal'}
        size={cancel.size}
        type={cancel.type}
        variant={cancel.variant}
        width={'default'}
      />
      <ModalWrapper aria-labelledby={label} role="dialog" aria-modal="true" open={open}>
        <ModalOverlay></ModalOverlay>
        <ModalColumn>
          <ModalRow>
            <ModalBox>
              <ModalHeader>
                <Heading tag="h3" color="white" size="default" label={label} />
                <IconWrapper>
                  <Cancel tw="fill-slate-white" onClick={handleClose} />
                </IconWrapper>
              </ModalHeader>
              <ModalContent>{children}</ModalContent>
              <ModalFooter>
                <Button
                  fCallBack={handleClose}
                  label={cancel.label}
                  size={cancel.size}
                  type={cancel.type}
                  variant={cancel.variant}
                  width={cancel.width}
                  icon={cancel.icon}
                />
                <Button
                  fCallBack={cancel.fCallBack}
                  label={save.label}
                  size={save.size}
                  type={save.type}
                  variant={save.variant}
                  width={save.width}
                  icon={save.icon}
                />
              </ModalFooter>
            </ModalBox>
          </ModalRow>
        </ModalColumn>
      </ModalWrapper>
    </>
  );
};

interface IModalStyles {
  open: boolean;
}

const ModalWrapper = styled.div(({ open }: IModalStyles) => [
  tw`
    relative
    z-10  
  `,
  open === false && tw`hidden`,
]);

const ModalHeader = styled.div(() => [
  tw`
    flex
    flex-row
    justify-between
    items-center

    bg-violet-600
    px-32
    py-24
    text-slate-white
  `,
]);

const ModalOverlay = styled.div(() => [
  tw`
    fixed
    inset-0
    bg-slate-900
    bg-opacity-75
    transition-opacity
  `,
]);

const ModalBox = styled.div(() => [
  tw`
    text-slate-white

    relative
    transform
    overflow-hidden
    rounded-2xl
    bg-slate-white
    text-left
    shadow-xl
    transition-all
    
    w-[465px]
  `,
]);

const ModalColumn = styled.div(() => [
  tw`
    fixed
    inset-0
    z-10
    overflow-y-auto
  `,
]);

const ModalRow = styled.div(() => [
  tw`
    flex
    justify-center
    items-center
    h-screen
  `,
]);

const ModalContent = styled.div(() => [
  tw`
    p-24
    overflow-y-auto
  `,
]);

const ModalFooter = styled.div(() => [
  tw`
    flex
    flex-col
    sm:flex-row

    justify-between
    items-center
    gap-16
    p-16
  `,
]);

const IconWrapper = styled.div(() => [
  tw`
    flex
    flex-row
    justify-center
    items-center
    transition ease-in-out delay-150
    
    hover:(rotate-90 transform-gpu)
    cursor-pointer
  `,
]);
