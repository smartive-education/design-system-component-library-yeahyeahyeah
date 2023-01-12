import React, { useState } from 'react';
import tw, { styled, TwStyle } from 'twin.macro';
import { MumbleText, MumbleGradient, LogoMumble as Logo } from '../icons/index';

export interface IMumbleLogoProps {
  title: string;
  href: string;
  color: 'violet' | 'gradient' | 'white';
  alignment: 'horizontal' | 'vertical';
  fCallBack?: () => void;
  isNavigation?: boolean;
}

export const MumbleLogo: React.FC<IMumbleLogoProps> = (props: IMumbleLogoProps) => {
  const {
    title = 'Mumble Logo',
    href = '#',
    color = 'white',
    alignment = 'horizontal',
    fCallBack,
    isNavigation = true,
  } = props;
  const [hover, setHover] = useState(false);

  return (
    <>
      <MumbleLogoStyledLink
        title={title}
        href={href}
        target={'_self'}
        onClick={fCallBack}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <MumbleLogoStyledDiv alignment={alignment}>
          <StyledLogoMumble color={color} hover={hover ? 'true' : 'false'} navigation={isNavigation ? 'true' : 'false'} />

          {color !== 'gradient' ? (
            <StyledMumbleText
              color={color}
              navigation={isNavigation ? 'true' : 'false'}
              alignment={alignment}
              hover={hover ? 'true' : 'false'}
            />
          ) : (
            <StyledMumbleGradient
              navigation={isNavigation ? 'true' : 'false'}
              alignment={alignment}
              hover={hover ? 'true' : 'false'}
            />
          )}
        </MumbleLogoStyledDiv>
      </MumbleLogoStyledLink>
    </>
  );
};

type IStyled = {
  hover: 'true' | 'false';
  color: 'violet' | 'gradient' | 'white';
  alignment: 'horizontal' | 'vertical';
  navigation: 'true' | 'false';
};

type IMumbleLogoStyledDiv = Pick<IStyled, 'alignment'>;

const MumbleLogoStyledDiv = styled.div(({ alignment }: IMumbleLogoStyledDiv) => [
  tw`
    flex
    justify-between
    items-center
    p-0
    cursor-pointer
    w-[130px]
    sm:w-auto
  `,
  alignment === 'vertical' && tw`flex-col`,
  alignment === 'horizontal' && tw`flex-row`,
]);

const MumbleLogoStyledLink = styled.a(() => [
  tw`
    cursor-pointer
  `,
]);

type IStyledLogoMumble = Pick<IStyled, 'color' | 'hover' | 'navigation'>;

const StyledLogoMumble = styled(Logo)(({ color, hover, navigation }: IStyledLogoMumble) => [
  tw`fill-violet-600`,
  navigation === 'true' ? tw`w-48 h-48` : tw`w-64 h-64 `,
  IconColor(color, hover),
]);

type IStyledMumbleText = Pick<IStyled, 'alignment' | 'navigation' | 'color' | 'hover'>;

const StyledMumbleText = styled(MumbleText)(({ alignment, navigation, color, hover }: IStyledMumbleText) => [
  navigation === 'true' ? tw`h-[30px] w-[154px]` : tw`h-[48px] w-[246px]`,
  TextSvgStyles(alignment, navigation),
  IconColor(color, hover),
]);

type IStyledMumbleGradient = Pick<IStyled, 'alignment' | 'navigation' | 'hover'>;

const StyledMumbleGradient = styled(MumbleGradient)(({ alignment, navigation }: IStyledMumbleGradient) => [
  navigation === 'true' ? tw`h-[30px] w-[154px]` : tw`h-[48px] w-[246px]`,
  TextSvgStyles(alignment, navigation),
]);

const IconColor = (color: string, hover: string) => {
  let hoverColor: TwStyle;
  let defaultColor: TwStyle;

  switch (color) {
    case 'violet':
      defaultColor = tw`fill-violet-600`;
      hoverColor = tw`fill-slate-white`;
      return hover === 'true' ? hoverColor : defaultColor;
    case 'gradient':
      defaultColor = tw`fill-violet-600`;
      hoverColor = tw`fill-slate-white`;
      return hover === 'true' ? hoverColor : defaultColor;
    case 'white':
      defaultColor = tw`fill-slate-white`;
      hoverColor = tw`fill-slate-300`;
      return hover === 'true' ? hoverColor : defaultColor;
  }
  return null;
};

const TextSvgStyles = (alignment: string, navigation: string) => {
  switch (alignment) {
    case 'horizontal':
      return navigation === 'true' ? (tw`ml-8 sm:ml-16` as TwStyle) : (tw`ml-8 sm:ml-16 ` as TwStyle);
    case 'vertical':
      return navigation === 'true' ? (tw`mt-8` as TwStyle) : (tw`mt-16` as TwStyle);
  }
  return null;
};
