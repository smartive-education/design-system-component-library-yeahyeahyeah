import React from 'react';
import tw, { styled, TwStyle } from 'twin.macro';
import { Heading } from './typography/Heading';
import { IconLink, IIconLinkProps } from './IconLink';
import { Button } from './buttons/Button';
import { Avatar } from './Avatar';

export interface IUserProps {
  label: string;
  variant: 'small' | 'medium' | 'large' | 'xlarge' | 'recommended' | 'write' | 'inline';
  username: IIconLinkProps;
  timestamp?: IIconLinkProps;
  location?: IIconLinkProps;
  joined?: IIconLinkProps;
  avatar?: { src: string; alt: string; imageCallBack?: () => void; buttonCallBack?: () => void };
  btn?: { label: string; fCallBack?: () => void };
}

export const User: React.FC<IUserProps> = ({
  label = 'Display Name',
  variant = 'small',
  username = {
    label: 'Username',
    href: '#',
    fCallBack: () => {
      return null;
    },
  },
  timestamp = {
    label: 'TimeStamp',
    href: '#',
    fCallBack: () => {
      return null;
    },
  },
  location = {
    label: 'Location',
    href: '#',
    fCallBack: () => {
      return null;
    },
  },
  joined = {
    label: 'Joined',
    href: '#',
    fCallBack: () => {
      return null;
    },
  },
  avatar = { src: 'https://i.stack.imgur.com/5xd5n.png', alt: 'Alter Tag' },
  btn = { label: 'Follow' },
}) => {
  return (
    <>
      {variant === 'small' && (
        <Row gap="small">
          <Avatar
            alt={avatar.alt}
            src={avatar.src}
            variant={'small'}
            imageCallBack={avatar.imageCallBack}
            buttonCallBack={avatar.buttonCallBack}
          />
          <Column variant={variant}>
            <Heading tag="h4" color="dark" size={'medium'} label={label} />
            <Row>
              <IconLink
                label={username.label}
                type="username"
                color="violet"
                href={username.href}
                fCallBack={username.fCallBack}
              ></IconLink>
              <IconLink
                label={timestamp.label}
                type="timestamp"
                color="slate"
                href={timestamp.href}
                fCallBack={timestamp.fCallBack}
              ></IconLink>
            </Row>
          </Column>
        </Row>
      )}
      {variant === 'inline' && (
        <Row gap="small">
          <Avatar
            alt={avatar.alt}
            src={avatar.src}
            variant={'small'}
            imageCallBack={avatar.imageCallBack}
            buttonCallBack={avatar.buttonCallBack}
          />
          <Column variant={variant}>
            <Heading tag="h4" color="dark" size={'default'} label={label} />
            <Row>
              <IconLink
                label={username.label}
                type="username"
                color="violet"
                href={username.href}
                fCallBack={username.fCallBack}
              />
            </Row>
          </Column>
        </Row>
      )}

      {variant === 'write' && (
        <Row gap="small">
          <Column variant={variant}>
            <Avatar
              alt={avatar.alt}
              src={avatar.src}
              variant={'medium'}
              imageCallBack={avatar.imageCallBack}
              buttonCallBack={avatar.buttonCallBack}
            />
            <HeadingWrapper>
              <Heading tag="h4" color="dark" size={'default'} label={label} />
            </HeadingWrapper>
          </Column>
        </Row>
      )}

      {variant === 'medium' && (
        <Column>
          <Heading tag="h4" color="dark" size={'large'} label={label} />
          <Row>
            <IconLink
              label={username.label}
              type="username"
              color="violet"
              href={username.href}
              fCallBack={username.fCallBack}
            ></IconLink>
            <IconLink
              label={timestamp.label}
              type="timestamp"
              color="slate"
              href={timestamp.href}
              fCallBack={timestamp.fCallBack}
            ></IconLink>
          </Row>
        </Column>
      )}
      {variant === 'large' && (
        <Column>
          <Heading tag="h4" color="dark" size={'xlarge'} label={label} />
          <Row>
            <IconLink
              label={username.label}
              type="username"
              color="violet"
              href={username.href}
              fCallBack={username.fCallBack}
            ></IconLink>
            <IconLink
              label={timestamp.label}
              type="timestamp"
              color="slate"
              href={timestamp.href}
              fCallBack={timestamp.fCallBack}
            ></IconLink>
          </Row>
        </Column>
      )}
      {variant === 'xlarge' && (
        <Column>
          <Heading tag="h4" color="dark" size={'large'} label={label} />
          <Row>
            <IconLink
              label={username.label}
              type="username"
              color="violet"
              href={username.href}
              fCallBack={username.fCallBack}
            ></IconLink>
            <IconLink
              label={location.label}
              type="location"
              color="slate"
              href={location.href}
              fCallBack={location.fCallBack}
            ></IconLink>
            <IconLink
              label={joined.label}
              type="joined"
              color="slate"
              href={joined.href}
              fCallBack={joined.fCallBack}
            ></IconLink>
          </Row>
        </Column>
      )}
      {variant === 'recommended' && (
        <Article>
          <Column variant="recommended">
            <Avatar
              alt={avatar.alt}
              src={avatar.src}
              variant={'large'}
              imageCallBack={avatar.imageCallBack}
              buttonCallBack={avatar.buttonCallBack}
            />
            <Row spacing={tw`mb-8`}>
              <Heading tag="h4" color="dark" size={'large'} label={label} />
            </Row>
            <div tw="mb-16">
              <IconLink
                label={username.label}
                type="username"
                color="violet"
                href={username.href}
                fCallBack={username.fCallBack}
              ></IconLink>
            </div>
            <Button
              fCallBack={btn?.fCallBack}
              icon="logo"
              label={btn?.label}
              size="small"
              type="button"
              width="large"
              color="violet"
            />
          </Column>
        </Article>
      )}
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */
interface IUserStyles {
  variant?: string;
}

interface IRowStyles {
  gap?: string;
  spacing?: TwStyle;
}

const Column = styled.div(({ variant }: IUserStyles) => [
  tw`
    flex
    flex-col
    gap-4
  `,
  variant === 'small' && tw`mt-2`,
  variant === 'recommended' && tw`items-center`,
  variant === 'write' &&
    tw`
    flex
    flex-row
    items-center
  `,
]);

const Row = styled.div(({ gap, spacing }: IRowStyles) => [
  tw`
    flex
    flex-row
    flex-wrap
    justify-start
    items-center
    max-w-lg
    gap-16
  `,
  gap === 'small' && tw`gap-8`,
  spacing && spacing,
]);

const Article = styled.article(() => [tw`flex flex-col p-16 bg-slate-white rounded-16`]);

const HeadingWrapper = tw.div`
  ml-12
`;
