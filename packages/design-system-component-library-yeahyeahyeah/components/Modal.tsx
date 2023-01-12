import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading } from './typography/Heading';
import { Button, IButtonProps } from './buttons/Button';
import { Cancel } from './index';

export interface IModalProps extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  openModal?: IButtonProps;
  fCallBack?: (type: string) => void;
  children?: React.ReactNode;
  openOnStart?: boolean;
}

export const Modal: React.FC<IModalProps> = ({
  label,
  children,
  fCallBack,
  openOnStart = false,
  openModal = {
    label: 'Open Modal',
    icon: 'cancel',
    size: 'small',
    type: 'button',
    color: 'slate',
    width: 'full',
    fCallBack: (type: string) => {
      return type;
    },
  },
}) => {
  const [open, setOpen] = useState<boolean>(openOnStart);

  const handleClose = () => {
    setOpen(!open);
    fCallBack && fCallBack(open.toString());
  };

  const handleOpen = () => {
    setOpen(!open);
    openModal.fCallBack && openModal.fCallBack(open.toString());
  };

  useEffect(() => {
    const close = (e: { keyCode: number }) => {
      if (e.keyCode === 27 || e.keyCode === 40) {
        handleClose();
        setOpen(false);
      }
      if (e.keyCode === 38) {
        handleOpen();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return (
    <>
      <Button
        fCallBack={handleOpen}
        label={openModal.label}
        size={openModal.size}
        type={openModal.type}
        color={openModal.color}
        icon={openModal.icon}
        width={'default'}
      />
      <ModalDialog
        id={label}
        tabIndex={-1}
        aria-hidden={openOnStart}
        aria-label={label}
        aria-labelledby={label}
        role="dialog"
        aria-modal={openOnStart}
        open={open}
      >
        <ModalOverlay></ModalOverlay>
        <ModalContainer>
          <ModalWrapper>
            <ModalBox>
              <ModalHeader>
                <Heading tag="h3" color="white" size="default" label={label} />
                <IconWrapper>
                  <Cancel tw="fill-slate-white" onClick={handleClose} />
                </IconWrapper>
              </ModalHeader>
              <ModalContent>{children}</ModalContent>
            </ModalBox>
          </ModalWrapper>
        </ModalContainer>
      </ModalDialog>
    </>
  );
};

interface IModalStyles {
  open: boolean;
}

const ModalDialog = styled.div(({ open }: IModalStyles) => [
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
		flex
		flex-col
    transform
    overflow-hidden
    rounded-2xl
		z-50

    bg-slate-white
		font-semibold

    transition-all

    w-[465px]
  `,
]);

const ModalContainer = styled.div(() => [
  tw`
    fixed
    inset-0
    overflow-y-auto
		z-10
  `,
]);

const ModalWrapper = styled.div(() => [
  tw`
    flex
    justify-center
    items-center
    h-screen
		z-20
  `,
]);

const ModalContent = styled.div(() => [
  tw`
    p-24
    overflow-y-auto
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
