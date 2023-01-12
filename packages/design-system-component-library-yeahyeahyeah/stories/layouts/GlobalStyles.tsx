// styles/GlobalStyles.tsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';
import MumbleStyles from '../../components/styles/MumbleStyles';

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
