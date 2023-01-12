import React from 'react';
import {
  Navigation,
  Mumble,
  TextBox,
  Heading,
  Container,
  User,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';

export default function Home() {
  const handleAvatar = () => {
    console.log('avatar clicked');
  };

  return (
    <>
      <div tw="flex flex-col justify-center items-start bg-slate-200 w-full h-full">
        <div tw="bg-violet-200">hallo</div>
        <User
          avatar={{
            alt: 'Alter Tag',
            buttonCallBack: () => {
              console.log('clicked');
            },
            imageCallBack: () => {
              console.log('clicked');
            },
            src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
          }}
          btn={{
            fCallBack: () => {
              console.log('clicked');
            },
            label: 'Follow',
          }}
          joined={{
            fCallBack: () => {
              console.log('clicked');
            },
            href: '',
            label: 'Joined',
            type: 'joined',
          }}
          label="Display Name"
          location={{
            fCallBack: () => {
              console.log('clicked');
            },
            href: '',
            label: 'Location',
            type: 'location',
          }}
          timestamp={{
            fCallBack: () => {
              console.log('clicked');
            },
            href: '',
            label: 'Timestamp',
            type: 'timestamp',
          }}
          username={{
            fCallBack: () => {
              console.log('clicked');
            },
            href: '',
            label: 'Username',
            type: 'username',
          }}
          variant="recommended"
        />
        <div tw="w-full mb-32">
          <Navigation
            logo={{
              title: 'Mumble Logo',
              href: '#',
              variant: 'white',
              alignment: 'horizontal',
              fCallBack: () => console.log('logo'),
              isNavigation: true,
            }}
            avatar={{
              label: 'Label',
              variant: 'profile',
              fCallBack: handleAvatar,
              src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
            }}
            settings={{
              label: 'Detailview',
              variant: 'default',
              fCallBack: () => console.log('settings'),
              icon: 'settings',
            }}
            logout={{
              label: 'Logout',
              variant: 'default',
              fCallBack: () => console.log('logout'),
              icon: 'logout',
            }}
          />
        </div>
        <Container layout="plain">
          <Heading label="Willkommen auf Mumble" color="violet" tag="h2" size="default" mbSpacing="32" />
          <Heading
            label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
            color="light"
            tag="h4"
            size="default"
            mbSpacing="32"
          />
        </Container>
        <Container layout="plain">
          <div tw="mb-32">
            <TextBox
              variant="write"
              mbSpacing="64"
              form={{
                editType: 'textarea',
                autoComplete: 'off',
                required: false,
                errorMessage: 'Da ist etwas schief gelaufen',
                placeholder: 'Na, was meinste dazu ...?',
              }}
              send={{
                fCallBack: () => {
                  console.log('clicked');
                },
                icon: 'send',
                label: 'Absenden',
                size: 'small',
                type: 'button',
                variant: 'violet',
                width: 'full',
              }}
              setText={() => {
                return null;
              }}
              startHeading="Hey, was läuft?"
              upload={{
                fCallBack: () => {
                  console.log('clicked');
                },
                icon: 'upload',
                label: 'Bild hochladen',
                size: 'small',
                type: 'button',
                variant: 'slate',
                width: 'full',
              }}
              user={{
                avatar: {
                  alt: 'Family Guy goes Mumble',
                  src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
                },
                label: 'Hey, was läuft?',
                username: {
                  href: '#',
                  label: 'Username',
                  type: 'username',
                },
                variant: 'recommended',
              }}
            />
          </div>
          <Mumble
            comment={{
              fCallBack: () => {
                console.log('clicked');
              },
              quantity: 0,
            }}
            img={{
              alt: 'This is a profile picture!',
              fCallBack: () => {
                console.log('clicked');
              },
              src: 'https://shorturl.at/nEO01',
            }}
            like={{
              fCallBack: () => {
                console.log('clicked');
              },
              quantity: 999,
            }}
            mbSpacing="32"
            share={{
              fCallBack: () => {
                console.log('clicked');
              },
              label: 'Share',
            }}
            text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
            user={{
              avatar: {
                alt: 'avatar',
                buttonCallBack: () => {
                  console.log('clicked');
                },
                imageCallBack: () => {
                  console.log('clicked');
                },
                src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
              },
              joined: {
                type: 'joined',
                fCallBack: () => {
                  console.log('clicked');
                },
                href: '',
                label: 'Joined',
              },
              label: 'Display Name',
              location: {
                type: 'joined',
                fCallBack: () => {
                  console.log('clicked');
                },
                href: '',
                label: 'Location',
              },
              timestamp: {
                type: 'joined',
                fCallBack: () => {
                  console.log('clicked');
                },
                href: '',
                label: 'Timestamp',
              },
              username: {
                type: 'joined',
                fCallBack: () => {
                  console.log('clicked');
                },
                href: '',
                label: 'Username',
              },
              variant: 'xlarge',
            }}
            variant="timeline"
          />
          <Mumble
            comment={{
              fCallBack: () => {
                console.log('clicked');
              },
              quantity: 0,
            }}
            img={{
              alt: 'This is a profile picture!',
              fCallBack: () => {
                console.log('clicked');
              },
              src: 'https://shorturl.at/nEO01',
            }}
            like={{
              fCallBack: () => {
                console.log('clicked');
              },
              quantity: 999,
            }}
            mbSpacing="32"
            share={{
              fCallBack: () => {
                console.log('clicked');
              },
              label: 'Share',
            }}
            text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
            user={{
              avatar: {
                alt: 'avatar',
                buttonCallBack: () => {
                  console.log('clicked');
                },
                imageCallBack: () => {
                  console.log('clicked');
                },
                src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
              },
              joined: {
                type: 'joined',
                fCallBack: () => {
                  console.log('clicked');
                },
                href: '',
                label: 'Joined',
              },
              label: 'Display Name',
              location: {
                type: 'joined',
                fCallBack: () => {
                  console.log('clicked');
                },
                href: '',
                label: 'Location',
              },
              timestamp: {
                type: 'joined',
                fCallBack: () => {
                  console.log('clicked');
                },
                href: '',
                label: 'Timestamp',
              },
              username: {
                type: 'joined',
                fCallBack: () => {
                  console.log('clicked');
                },
                href: '',
                label: 'Username',
              },
              variant: 'xlarge',
            }}
            variant="timeline"
          />
        </Container>
      </div>
    </>
  );
}
