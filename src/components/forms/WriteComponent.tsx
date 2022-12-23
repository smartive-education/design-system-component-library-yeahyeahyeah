import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { User, IUserProps } from '../../components/User';
import { InputForm, IFormInputProps } from '../../components/forms/Input';
import { Button } from '../../components/buttons/Button';

interface IWriteComponentProps {
  user: IUserProps;
  form: IFormInputProps;
  mode: 'write' | 'inline';
}

export const WriteComponent: React.FC<IWriteComponentProps> = ({
  mode = 'write',
  user = {
    label: 'Display Name',
    username: {
      label: 'Username',
      href: '#',
    },
    variant: mode,
    avatar: {
      src: 'https://shorturl.at/cioP7',
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
      <Card mode={mode}>
        <CardHeaderRow>
          <User
            avatar={user.avatar}
            label={user.label}
            username={user.username}
            variant={mode}
          />
        </CardHeaderRow>
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
  mode?: string;
}

// const CardHeader = styled.div(({ mode }: ICard) => [
//   tw`
//     container
//     bg-slate-white
//     p-16
//     pb-0
//   `,
//   mode === 'inline' &&
//     tw`
//       rounded-t-16
//       sm:(px-16 pt-16)
//       md:(px-16 pt-0)
//       lg:(px-48 pt-0)
//   `,
//   mode === 'write' &&
//     tw`
//       rounded-none
//       sm:(px-16 pt-24)
//       md:(px-32 pt-32)
//       lg:(px-48 pt-32)
//   `,
// ]);

const CardHeaderRow = styled.div(({ mode }: ICard) => [
  mode === 'inline' &&
    tw`
    absolute
    bg-pink-600
    translate-x-64
    sm:(left-0 top-8)
    md:(-left-[60px] top-16)
    lg:(-left-[76px] top-16)
  `,
]);

const Card = styled.div(({ mode }: ICard) => [
  tw`
  flex
  flex-col
  bg-slate-white
  pb-32
  px-16
  w-full
  rounded-16
  
  sm:(px-16)
  md:(px-32)
  lg:(px-48)
  `,
  mode === 'inline' && tw``,
  mode === 'write' && tw`rounded-none`,
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
