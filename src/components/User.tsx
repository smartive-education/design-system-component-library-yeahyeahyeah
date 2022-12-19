import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading } from '../components/typography/Heading';
import { IconLink, IIconLinkProps } from '../components/IconLink';
import { Button } from './buttons/Button';
import { Avatar } from '../components/Avatar';

export interface IUserProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  label: string;
  variant:
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'recommended'
    | 'write'
    | 'inline';
  username: IIconLinkProps;
  timestamp?: IIconLinkProps;
  location?: IIconLinkProps;
  joined?: IIconLinkProps;
  avatar?: { src: string; alt: string; fCallBack?: () => void };
  btn?: { fCallBack?: () => void; label: string };
}

export const User: React.FC<IUserProps> = ({
  label = 'Display Name',
  variant = 'small',
  username = { label: 'Username', href: '#' },
  timestamp = { label: 'TimeStamp', href: '#' },
  location = { label: 'Location', href: '#' },
  joined = { label: 'Joined', href: '#' },
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
            fCallBack={avatar.fCallBack}
          />
          <Column variant={variant}>
            <Heading tag="h4" color="dark" variant={'default'} label={label} />
            <Row>
              <IconLink
                label={username.label}
                type="username"
                variant="violet"
                href={username.href}
              ></IconLink>
              <IconLink
                label={timestamp.label}
                type="timestamp"
                variant="slate"
                href={timestamp.href}
              ></IconLink>
            </Row>
          </Column>
        </Row>
      )}
      {variant === 'write' && (
        <Row gap="small">
          <Avatar alt={avatar.alt} src={avatar.src} variant={'small'} />
          <Column variant={variant}>
            <Heading tag="h4" color="dark" variant={'default'} label={label} />
            <Row>
              <IconLink
                label={username.label}
                type="username"
                variant="violet"
                href={username.href}
              />
            </Row>
          </Column>
        </Row>
      )}

      {variant === 'inline' && (
        <Row gap="small">
          <Column variant={variant}>
            <Avatar alt={avatar.alt} src={avatar.src} variant={'medium'} />
            <Heading tag="h4" color="dark" variant={'default'} label={label} />
          </Column>
        </Row>
      )}

      {variant === 'medium' && (
        <Column>
          <Heading tag="h4" color="dark" variant={'large'} label={label} />
          <Row>
            <IconLink
              label={username.label}
              type="username"
              variant="violet"
              href={username.href}
            ></IconLink>
            <IconLink
              label={timestamp.label}
              type="timestamp"
              variant="slate"
              href={timestamp.href}
            ></IconLink>
          </Row>
        </Column>
      )}
      {variant === 'large' && (
        <Column>
          <Heading tag="h4" color="dark" variant={'xlarge'} label={label} />
          <Row>
            <IconLink
              label={username.label}
              type="username"
              variant="violet"
              href={username.href}
            ></IconLink>
            <IconLink
              label={timestamp.label}
              type="timestamp"
              variant="slate"
              href={timestamp.href}
            ></IconLink>
          </Row>
        </Column>
      )}
      {variant === 'xlarge' && (
        <Column>
          <Heading tag="h4" color="dark" variant={'xlarge'} label={label} />
          <Row>
            <IconLink
              label={username.label}
              type="username"
              variant="violet"
              href={username.href}
            ></IconLink>
            <IconLink
              label={location.label}
              type="location"
              variant="slate"
              href={location.href}
            ></IconLink>
            <IconLink
              label={joined.label}
              type="joined"
              variant="slate"
              href={joined.href}
            ></IconLink>
          </Row>
        </Column>
      )}
      {variant === 'recommended' && (
        <article className="flex flex-col p-16 bg-slate-white rounded-16">
          <Column variant="recommended">
            <Avatar alt={avatar.alt} src={avatar.src} variant={'large'} />
            <Row className="mb-8">
              <Heading tag="h4" color="dark" variant={'large'} label={label} />
            </Row>
            <div className="mb-16">
              <IconLink
                label={username.label}
                type="username"
                variant="violet"
                href={username.href}
              ></IconLink>
            </div>
            <Button
              handleClick={btn?.fCallBack}
              icon="mumble"
              label={btn?.label}
              size="small"
              type="button"
              variant="violet"
              width="large"
            />
          </Column>
        </article>
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
}

const Column = styled.div(({ variant }: IUserStyles) => [
  tw`
    flex
    flex-col
    gap-4
  `,
  variant === 'small' && tw`mt-2`,
  variant === 'recommended' && tw`items-center`,
  variant === 'inline' &&
    tw`
    flex
    flex-row
    items-center
    gap-8
  `,
]);

const Row = styled.div(({ gap }: IRowStyles) => [
  tw`
    flex
    flex-row
    justify-start
    items-center
    max-w-lg
    gap-16
  `,
  gap === 'small' && tw`gap-8`,
]);
