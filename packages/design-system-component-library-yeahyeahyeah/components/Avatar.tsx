import React from 'react';
import tw, { styled } from 'twin.macro';
import { IconButton } from './buttons/IconButton';

export interface IAvatarProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  variant: 'small' | 'medium' | 'large' | 'xlarge' | 'edit';
  buttonCallBack?: () => void;
  imageCallBack?: () => void;
}

export const Avatar: React.FC<IAvatarProps> = (props: IAvatarProps) => {
  const { variant = 'small', alt, src, buttonCallBack, imageCallBack } = props;

  return (
    <>
      {variant !== 'edit' ? (
        <Image src={src} alt={alt} variant={variant} onClick={imageCallBack} />
      ) : (
        <>
          <Row>
            <Image src={src} alt={alt} variant={variant} onClick={imageCallBack} />
            <IconButton variant="edit" icon="edit" label="Label" fCallBack={buttonCallBack} />
          </Row>
        </>
      )}
    </>
  );
};

interface IImageProps {
  variant: string;
}

const Row = tw.div`
  flex
  flex-row
  justify-center
  items-end
  overflow-hidden
`;

const ImageAnim = tw`
	relative
	scale-100
	hover:scale-110

	transform
	transition
	duration-500
`;

const Image = styled.img(({ variant }: IImageProps) => [
  tw`
    relative
    left-0

    md:(mr-4)
    lg:(mr-8)
  `,
  variant === 'small' && tw`h-40 w-40 min-w-[40px]`,
  variant === 'small' && ImageAnim,

  variant === 'medium' && tw`h-64 w-64 min-w-[64px] border-4`,
  variant === 'medium' && ImageAnim,

  variant === 'large' && tw`h-96 w-96 border-4`,
  variant === 'large' && ImageAnim,

  variant === 'xlarge' && tw`h-160 w-160 border-4 min-w-[160px]`,
  variant === 'xlarge' && ImageAnim,

  variant === 'edit' &&
    tw`
		flex
		items-end
		justify-end
		h-160
		w-160
    min-w-[160px]
		border-4
    `,
  tw`
  border-slate-100
	bg-violet-200
		rounded-full
		cursor-pointer
    object-cover
	`,
]);