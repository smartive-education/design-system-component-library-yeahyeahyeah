import React, { useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import { Heading } from './typography/Heading';
import { Button, IButtonProps } from './buttons/Button';
import { Cancel } from './index';

export interface IModalProps extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  cancel: IButtonProps;
  save: IButtonProps;
  openModal: IButtonProps;
  fCallBack?: (type: string) => void;
  spacing?: TSpacing;
  children?: React.ReactNode;
  openOnStart: boolean;
}

export const Modal: React.FC<IModalProps> = ({
  label = 'Einstellungen',
  children,
  openOnStart = false,
  cancel = {
    label: 'Abbrechen',
    icon: 'cancel',
    size: 'small',
    type: 'button',
    variant: 'slate',
    width: 'full',
    fCallBack: (type: string) => {
      return type;
    },
  },
  save = {
    label: 'Label',
    icon: 'checkmark',
    size: 'small',
    type: 'submit',
    variant: 'violet',
    width: 'full',
    fCallBack: () => {
      return null;
    },
  },
  openModal = {
    label: 'Open Modal',
    icon: 'cancel',
    size: 'small',
    type: 'button',
    variant: 'slate',
    width: 'full',
    fCallBack: (type: string) => {
      return type;
    },
  },
}) => {
  const [open, setOpen] = useState<boolean>(openOnStart);

  const handleClose = () => {
    setOpen(!open);
    cancel.fCallBack && cancel.fCallBack(open.toString());
  };

  const handleOpen = () => {
    setOpen(!open);
    openModal.fCallBack && openModal.fCallBack(open.toString());
  };

  useEffect(() => {
    const close = (e: { keyCode: number }) => {
      if (e.keyCode === 27) {
        handleClose();
        setOpen(false);
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
        variant={openModal.variant}
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
                  fCallBack={save.fCallBack}
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

const ModalContainer = styled.div(() => [
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
