import React from 'react';
import tw, { styled } from 'twin.macro';
import { User, IUserProps } from '../User';
import { Paragraph } from '../typography/Paragraph';
import { IImageContainerProps, ImageContainer } from '../ImageContainer';
import { Avatar, IAvatarProps } from '../Avatar';
import type { TmbSpacing } from '../../types/types';

export interface IMumbleHeaderProps {
  label: string;
  variant?: 'view' | 'edit';
  user: IUserProps;
  text: string;
  banner?: IImageContainerProps;
  avatar: IAvatarProps;
  mbSpacing?: TmbSpacing;
}

export const MumbleHeader: React.FC<IMumbleHeaderProps> = ({
  label = 'Display Name',
  text,
  banner = {
    src: 'https://placebeard.it/640x360',
    alt: 'Picture',
    type: 'banner',
  },
  user = {
    variant: 'large',
    username: {
      label: 'Username',
      type: 'joined',
      href: '#',
    },
    location: {
      label: 'location',
      type: 'joined',
      href: '#',
    },
    joined: {
      label: 'Joined',
      type: 'joined',
      href: '#',
    },
    avatar: {
      src: 'https://placebeard.it/640x360',
      alt: 'Alttag',
    },
  },
}) => {
  return (
    <MumbleHeaderWrapper>
      <ImageContainer src={banner.src} alt={banner.alt} type={banner.type} />
      <div tw="px-8 mb-16">
        <User
          avatar={user.avatar}
          username={user.username}
          location={user.location}
          joined={user.joined}
          label={label}
          variant={user.variant}
        />
      </div>
      <div tw="flex justify-end items-end z-10 h-0 relative -top-16 overflow-visible">
        <Avatar src={user.avatar?.src || ''} alt={user.avatar?.alt || ''} variant="edit" />
      </div>
      <div tw="p-8 mb-32">
        <Paragraph text={text} color={'light'} size={'default'} alignment={'left'} />
      </div>
    </MumbleHeaderWrapper>
  );
};

const MumbleHeaderWrapper = styled.div(() => [
  tw`
    flex
    flex-col
    justify-between
  `,
]);
