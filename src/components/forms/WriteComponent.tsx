import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { User, IUserProps } from '../../components/User';
import { InputForm, IFormInputProps } from '../../components/forms/Input';
import { Button } from '../../components/buttons/Button';

interface IWriteComponentProps {
  user: IUserProps;
  form: IFormInputProps;
  variant: 'write' | 'inline';
}

export const WriteComponent: React.FC<IWriteComponentProps> = ({
  variant = 'write',
  user = {
    label: 'Display Name',
    username: {
      label: 'Username',
      href: '#',
    },
    variant: 'inline',
    avatar: {
      src: 'https://i.stack.imgur.com/5xd5n.png',
      alt: 'Alter Tag',
    },
  },
  form = {
    placeholder: 'Na, was meinste dazu ...?',
    errorMessage: 'Da ist etwas schief gelaufen',
  },
}) => {
  return (
    <>
      <CardHeader variant={variant}>
        <CardHeaderRow variant={variant}>
          <User
            avatar={user.avatar}
            label={user.label}
            username={user.username}
            variant={variant}
          />
        </CardHeaderRow>
      </CardHeader>
      <Card variant={variant}>
        <InputForm
          className="mt-16"
          editType={'textarea'}
          label={''}
          required={false}
          placeholder={form.placeholder}
          errorMessage={form.errorMessage}
          autoComplete={'off'}
        />
        <Row>
          <Button
            handleClick={() => {}}
            label="Bild hochladen"
            size="small"
            type="button"
            variant="slate"
            width="full"
            icon="upload"
          />
          <Button
            handleClick={() => {}}
            label="Absenden"
            size="small"
            type="button"
            variant="violet"
            width="full"
            icon="send"
          />
        </Row>
      </Card>
    </>
  );
};

interface ICard {
  variant?: string;
}

const CardHeader = styled.div(({ variant }: ICard) => [
  tw`
  flex
  flex-col
  items-baseline
  bg-slate-white
  pt-16
  px-16
  pl-16
  w-full
  rounded-t-16
  `,
  variant === 'inline' &&
    tw`
      sm:(px-16 pt-16)
      md:(px-16 pt-0)
      lg:(px-48 pt-0)
  `,
  variant === 'write' &&
    tw`
      rounded-none
      sm:(px-16 pt-24)
      md:(px-32 pt-32)
      lg:(px-48 pt-32)
  `,
]);

const CardHeaderRow = styled.div(({ variant }: ICard) => [
  variant === 'inline' &&
    tw`
    relative
    sm:(left-0 top-8)
    md:(-left-[60px] top-16)
    lg:(-left-[76px] top-16)
  `,
]);

const Card = styled.div(({ variant }: ICard) => [
  tw`
  flex
  flex-col
  bg-slate-white
  pb-32
  px-16
  w-full
  rounded-b-16
  
  sm:(px-16)
  md:(px-32)
  lg:(px-48)
  `,
  variant === 'inline' && tw``,
  variant === 'write' && tw`rounded-none`,
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

/**
 * @write-component
 * @desc styles
 */
