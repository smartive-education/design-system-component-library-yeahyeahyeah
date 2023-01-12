import tw from 'twin.macro';

export interface ISpacingProps {
  mbSpacing?: string;
}

export const BottomSpacing = ({ mbSpacing }: ISpacingProps) => [
  tw`
    mb-0
  `,
  mbSpacing === '0' && tw`mb-0`,
  mbSpacing === '4' && tw`mb-4`,
  mbSpacing === '8' && tw`mb-8`,
  mbSpacing === '16' && tw`mb-16`,
  mbSpacing === '32' && tw`mb-32`,
  mbSpacing === '64' && tw`mb-64`,
];
