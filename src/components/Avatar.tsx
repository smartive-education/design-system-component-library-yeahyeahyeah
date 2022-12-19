import tw from 'twin.macro';
import styled from 'styled-components';
import { IconButton } from 'src/components/buttons/IconButton';

export interface IAvatarProps
  extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  variant: 'small' | 'medium' | 'large' | 'xlarge' | 'edit';
  fCallBack?: () => void;
}

export const Avatar: React.FC<IAvatarProps> = ({
  variant = 'small',
  src,
  alt,
  fCallBack,
}) => {
  return (
    <>
      {variant !== 'edit' ? (
        <Image variant={variant} src={src} alt={alt} onClick={fCallBack} />
      ) : (
        <>
          <Row>
            <Image variant={variant} src={src} alt={alt} />
            <IconButton
              variant="edit"
              icon="edit"
              label="Label"
              fCallBack={fCallBack}
            />
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
  variant === 'small' && tw`h-48 w-48 min-w-[48px]`,
  variant === 'small' && ImageAnim,

  variant === 'medium' && tw`h-70 w-70 border-4`,
  variant === 'medium' && ImageAnim,

  variant === 'large' && tw`h-96 w-96 border-4`,
  variant === 'large' && ImageAnim,

  variant === 'xlarge' && tw`h-160 w-160 border-4`,

  variant === 'edit' &&
    tw`
		flex
		items-end
		justify-end
		h-160
		w-160
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
