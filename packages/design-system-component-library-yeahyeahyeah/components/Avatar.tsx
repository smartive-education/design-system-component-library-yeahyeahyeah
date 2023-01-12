import React from 'react';
import tw, { styled } from 'twin.macro';
import { IconButton } from './buttons/IconButton';

export interface IAvatarProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  variant: 'small' | 'medium' | 'large' | 'xlarge' | 'edit';
  src: string;
  alt: string;
  buttonCallBack?: () => void;
  imageCallBack?: () => void;
}

export const Avatar: React.FC<IAvatarProps> = ({ variant = 'small', alt = '', src = '', buttonCallBack, imageCallBack }) => {
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
  `,
  variant === 'small' && tw`h-40 w-40 min-w-[40px]`,
  variant === 'small' && ImageAnim,

  variant === 'medium' && tw`h-[72px] w-[72px] min-w-[72px] border-4`,
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
  border-slate-200
	bg-violet-200
		rounded-full
		cursor-pointer
    object-cover
	`,
]);
