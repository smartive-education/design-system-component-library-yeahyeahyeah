import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { MumbleLogo, IMumbleLogoProps } from '../components/icons/MumbleLogo';
import { NaviButton, INaviButtonProps } from '../components/buttons/NaviButton';

export interface INavigationProps extends React.ReactElement<HTMLDivElement> {
  logo: IMumbleLogoProps;
  avatar: INaviButtonProps;
  settings: INaviButtonProps;
  logout: INaviButtonProps;
}

export const Navigation: React.FC<INavigationProps> = ({
  logo = {
    title: 'Mumble Logo',
    href: '#',
    fCallBack: () => {},
  },
  avatar = {
    variant: 'profile',
    label: 'Profile',
    fCallBack: () => {},
  },
  settings = {
    icon: 'settings',
    label: 'Settings',
    variant: 'default',
    fCallBack: () => {},
  },
  logout = {
    icon: 'logout',
    label: 'Logout',
    variant: 'default',
    fCallBack: () => {},
  },
}) => {
  return (
    <>
      <NavigationStyles>
        <Container>
          <Column>
            <MumbleLogo
              title={logo.title}
              href={logo.href}
              alignment="horizontal"
              iconColor="fill-slate-white"
              iconWidth="auto"
              variant="violet"
              fCallBack={logo.fCallBack}
            />
            <Row>
              <NaviButton
                variant={avatar.variant}
                label={avatar.label}
                fCallBack={avatar.fCallBack}
              />
              <NaviButton
                icon={settings.icon}
                label={settings.label}
                variant={settings.variant}
                fCallBack={settings.fCallBack}
              />
              <NaviButton
                icon={logout.icon}
                label={logout.label}
                variant={logout.variant}
                fCallBack={logout.fCallBack}
              />
            </Row>
          </Column>
        </Container>
      </NavigationStyles>
    </>
  );
};

const Container = tw.div`
  flex
  flex-col
  sm:flex-row
  justify-center
  items-center
  container
  px-16
`;

const Column = tw.div`
flex
  justify-between
   w-full
`;

const Row = tw.div`
  flex
  flex-row
  justify-between
  items-center

  gap-0
  sm:gap-16
`;

const NavigationStyles = styled.nav(() => [
  tw`
    flex
    flex-row
    justify-center
    items-center
    w-full

    bg-violet-600
    h-[80px]    
	`,
]);
