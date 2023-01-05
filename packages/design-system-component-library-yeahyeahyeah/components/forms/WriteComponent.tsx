import React from 'react';
import tw, { styled } from 'twin.macro';
import { User, IUserProps } from '../User';
import { InputForm, IFormInputProps } from './Input';
import { Button, IButtonProps } from '../buttons/Button';
import { BottomSpacing } from '../Spacing';
import { Heading, Paragraph } from '../index';

export interface IWriteComponentProps {
  user: IUserProps;
  form: IFormInputProps;
  variant: 'write' | 'inline' | 'start';
  upload: IButtonProps;
  send: IButtonProps;
  setText: React.Dispatch<React.SetStateAction<string>>;
  spacing?: TSpacing;
  startHeading?: string;
  startParagraph?: string;
}

export const WriteComponent: React.FC<IWriteComponentProps> = ({
  variant = 'write',
  startHeading = 'Hey, was läuft?',
  setText,
  startParagraph = 'Schreib deinen ersten Mumble, oder folge einem User',
  user = {
    label: 'Display Name',
    username: {
      label: 'Username',
      href: '#',
    },
    avatar: {
      src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
      alt: 'Alter Tag',
    },
  },
  form = {
    placeholder: 'Na, was meinste dazu ...?',
    errorMessage: 'Da ist etwas schief gelaufen',
  },
  upload = {
    label: 'Bild hochladen',
    icon: 'upload',
    size: 'small',
    type: 'button',
    variant: 'slate',
    width: 'full',
    fCallBack: () => {
      return null;
    },
  },
  send = {
    label: 'Absenden',
    icon: 'send',
    size: 'small',
    type: 'button',
    variant: 'violet',
    width: 'full',
    fCallBack: () => {
      return null;
    },
  },
}) => {
  return (
    <>
      <Card variant={variant}>
        <UserWrapper variant={variant} spacing={'16'}>
          {variant === 'write' && (
            <User avatar={user.avatar} label={user.label} username={user.username} variant={'write'} />
          )}
          {variant === 'inline' && (
            <User avatar={user.avatar} label={user.label} username={user.username} variant={'inline'} />
          )}
          {variant === 'start' && (
            <>
              <Heading tag="h3" label={startHeading} color="light" size="default" />
              <Paragraph text={startParagraph} color="light" size="default" />
            </>
          )}
        </UserWrapper>
        <InputForm
          editType={'textarea'}
          label={''}
          required={false}
          placeholder={form.placeholder}
          errorMessage={form.errorMessage}
          autoComplete={'off'}
          setText={setText}
        />
        <Row>
          <Button
            fCallBack={upload.fCallBack}
            label={upload.label}
            size={upload.size}
            type={upload.type}
            variant={upload.variant}
            width={upload.width}
            icon={upload.icon}
          />
          <Button
            fCallBack={send.fCallBack}
            label={send.label}
            size={send.size}
            type={send.type}
            variant={send.variant}
            width={send.width}
            icon={send.icon}
          />
        </Row>
      </Card>
    </>
  );
};

interface ICard {
  variant?: string;
  spacing?: string;
}

const Card = styled.div(({ variant }: ICard) => [
  tw`
    flex
    flex-col
    bg-slate-white
    
    pt-24
    pb-32
    px-16
    w-full
    
    sm:(px-16)
    md:(px-32)
    lg:(px-48)
  `,
  variant === 'write' && tw`rounded pt-4`,
  variant === 'inline' && tw`rounded-none`,
  variant === 'start' && tw`rounded`,
]);

const UserWrapper = styled.div(({ variant }: ICard) => [
  BottomSpacing,
  variant === 'write' && tw`relative left-0 top-16 md:-left-70`,
]);

const Row = styled.div(() => [
  tw`
    flex
    justify-between
    gap-16
    flex-col
    sm:(flex-row)
  `,
]);