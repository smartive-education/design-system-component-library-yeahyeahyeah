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
