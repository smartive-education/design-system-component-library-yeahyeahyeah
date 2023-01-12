## Installing Mumble Component Library

### Create Nextjs App

```bash
nvm use 16.17.0
yarn create next-app --typescript
```

### Create Github Token And Add To .npmrc

[Create a classic github token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

To authenticate by adding your personal access token (classic) to your ~/.npmrc file, edit the ~/.npmrc file for your project to include the following line, replacing TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn’t exist.

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

Create .npmrc and add following line

```bash
@smartive-education:registry=https://npm.pkg.github.com
```

### Install The NPM Package

With yarn

```bash
yarn add @smartive-education/design-system-component-library-yeahyeahyeah@latest
```

Or with npm

```bash
npm i @smartive-education/design-system-component-library-yeahyeahyeah@latest
```

# Install Example App with Twin + Next.js + Styled Components + TypeScript + Mumble Component Library

<p><a href="https://github.com/ben-rogerson/twin.macro#gh-light-mode-only" target="_blank"><img src="../.github/twin-light.svg" alt="Twin" width="60" height="70"></a><a href="https://github.com/ben-rogerson/twin.macro#gh-dark-mode-only" target="_blank"><img src="../.github/twin-dark.svg" alt="Twin" width="60" height="70"></a><a href="https://nextjs.org#gh-light-mode-only" target="_blank"><img src="../.github/next-light.svg" alt="Next.js" width="80" height="70"></a><a href="https://nextjs.org#gh-dark-mode-only" target="_blank"><img src="../.github/next-dark.svg" alt="Next.js" width="80" height="70"></a><a href="https://styled-components.com#gh-light-mode-only" target="_blank"><img src="../.github/styled-components-light.svg" alt="Styled components" width="105" height="70"></a><a href="https://styled-components.com#gh-dark-mode-only" target="_blank"><img src="../.github/styled-components-dark.svg" alt="Styled components" width="105" height="70"></a><a href="https://www.typescriptlang.org/" target="_blank"><img src="../.github/typescript.svg" alt="TypeScript" width="60" height="70"></a>
</p>

**Download demo app using [git](https://github.com/tomschall/mumble-test-stack-yeahyeahyeah)**

```shell
git clone git@github.com:tomschall/mumble-test-stack-yeahyeahyeah.git folder-name
```

From within the new folder, run `yarn install`, then `yarn dev` to start the dev server.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config](#add-the-twin-config)
  - [Add the TypeScript types](#add-typescript-types)
  - [Add the next babel config](#add-the-next-babel-config)
  - [Add the server stylesheet](#add-the-server-stylesheet)
- [Resources](#resources)
- [Customization](#customization)
- [Next steps](#next-steps)
- [Other](#other)

[](#getting-started)

## Getting started

### Installation

Install Next.js

```shell
nvm use 16.17.0
yarn create next-app --typescript
```

Create github token and add to .npmrc

[Create a classic github token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

To authenticate by adding your personal access token (classic) to your ~/.npmrc file, edit the ~/.npmrc file for your project to include the following line, replacing TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn’t exist.

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

Create .npmrc and add following line

```bash
@smartive-education:registry=https://npm.pkg.github.com
```

Install Mumble Component Library and Styled Components

```shell
yarn add styled-components @smartive-education/design-system-component-library-yeahyeahyeah@latest
```

Install DEV Dependencies

```shell
yarn add twin.macro tailwindcss babel-plugin-macros babel-plugin-twin @types/styled-components @babel/core babel-loader @babel/plugin-syntax-typescript --dev
```

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

> Due to an issue in styled-components, global styles get added in the wrong order when using styled-components. This gives the tailwind base styles an incorrect specificity.  
> Until [the issue](https://github.com/styled-components/styled-components/issues/3146) is fixed, the workaround is to export the styles from another file.

You can import `GlobalStyles` within a new file placed in `styles/GlobalStyles.tsx`:

The `GlobalStyles as MumbleStyles` import adds Mumble Global CSS settings and all font faces for `Poppins` - it includes all CSS vars and body styles that are needed for Mumble

```js
// styles/GlobalStyles.tsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';
import { MumbleStyles } from '@smartive-education/design-system-component-library-yeahyeahyeah';

const CustomStyles = createGlobalStyle({
  body: {},
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <MumbleStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
```

All you have to do now is to import the GlobalStyles in `pages/_app.tsx` and add the component to get rendered:

```js
// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default App;
```

### Add the twin config

Twin’s config must be added.

We add it to `package.json`:

Here we use the tailwind.config.js from our mumble npm package

```js
// package.json
"babelMacros": {
  "twin": {
    "config": "node_modules/@smartive-education/design-system-component-library-yeahyeahyeah/tailwind.config.js",
    "preset": "styled-components"
  }
},
```

### Add TypeScript types

Create a `types/twin.d.ts` file and add these declarations:

```typescript
// types/twin.d.ts
import 'twin.macro';
import styledImport, { CSSProp, css as cssImport } from 'styled-components';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
    tw?: string;
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp;
    tw?: string;
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element;
    }
  }
}
```

### Add the next babel config

Create a new file either in the root or in a `config`
subfolder:

```js
// withTwin.js
const path = require('path');

// The folders containing files importing twin.macro
// We have to add the mumble npm package also, because we also import twin.macro inside the package
const includedDirs = [
  path.resolve(__dirname, 'pages'),
  path.resolve(__dirname, 'styles'),
  path.resolve(__dirname, 'node_modules/@smartive-education/design-system-component-library-yeahyeahyeah/dist'),
];

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev, isServer } = options;
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        // mumble npm package components are pure js files, therefor js has also to be included
        test: /\.(tsx|ts|jsx)$/,
        include: includedDirs,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              plugins: [
                require.resolve('babel-plugin-twin'),
                require.resolve('babel-plugin-macros'),
                [require.resolve('babel-plugin-styled-components'), { ssr: true, displayName: true }],
                [require.resolve('@babel/plugin-syntax-typescript'), { isTSX: true }],
              ],
            },
          },
        ],
      });

      if (!isServer) {
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          fs: false,
          module: false,
          path: false,
          os: false,
          crypto: false,
        };
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      } else {
        return config;
      }
    },
  };
};
```

Then in your `next.config.js`, import and wrap the main export with `withTwin(...)`:

```js
// next.config.js
const withTwin = require('./withTwin.js');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  reactStrictMode: true, // < Recommended by Next
  // ...
});
```

### Add the server stylesheet

To avoid the ugly Flash Of Unstyled Content (FOUC), add a server stylesheet in `pages/_document.tsx` that gets read by Next.js:

```js
// pages/_document.tsx
import React from 'react';
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
```

### Add index.tsx

To see a nice mumble demo timeline add following code to `pages/index.tsx`.

```js
import {
  Navigation,
  Mumble,
  TextBox,
  Heading,
  Container,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';

export default function Home() {
  const handleAvatar = () => {
    console.log('avatar clicked');
  };

  return (
    <>
      <div tw="flex flex-col justify-center items-start bg-slate-200 w-full h-full">
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
```

[](#resources)

## Resources

[](#customization)

### Customization

- [View the config options →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/options.md)
- [Customizing the tailwind config →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md)

[](#next-steps)

### Next steps

Learn how to work with twin

- [The prop styling guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/prop-styling-guide.md) - A must-read guide to level up on prop styling
- [The styled component guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/styled-component-guide.md) - A must-read guide on getting productive with styled-components

Learn more about styled-components

- [The css prop](https://styled-components.com/docs/api#css-prop)
- [The css import](https://styled-components.com/docs/api#css)
- [The styled import](https://styled-components.com/docs/api#styled)

[](#other)

### Other

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
- [Github](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-packages-from-other-organizations)
