import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { HeartFilled, HeartOutlined, ReplyFilled, ReplyOutlined } from '../icons/index';

export interface IInteractionButton {
  type?: 'like' | 'comment';
  quantity?: number;
  favourite?: boolean;
  fCallBack?: () => void;
}

export const InteractionButton: React.FC<IInteractionButton> = ({ type, quantity, favourite, fCallBack }) => {
  const [label, setLabel] = useState<string>('');
  const [count, setCount] = useState<number>(quantity || 0);
  const [isFavourite, setIsFavourite] = useState<boolean>(favourite || false);
  const [hover, setHover] = useState(false);

  const setLabels = useCallback(() => {
    if (type === 'comment') {
      if (count >= 2) {
        setLabel('Comments');
      } else {
        setLabel('Comment');
      }
    } else if (type === 'like') {
      if (count > 1) {
        setLabel('Likes');
      } else if (count === 1 && isFavourite === true) {
        setLabel('Liked');
      } else if ((count === 0 && !isFavourite) || (count === 1 && !isFavourite)) {
        setLabel('Like');
      }
    }
  }, [type, count, isFavourite]);

  useEffect(() => {
    type === 'like' ? setLabel('Like') : setLabel('Comment');
    setLabels();
  }, [type, count, isFavourite, setLabels]);

  useEffect(() => {
    setCount(quantity || 0);
  }, [quantity]);

  useEffect(() => {
    setIsFavourite(favourite || false);
  }, [favourite]);

  const handleClickLike = () => {
    setIsFavourite(!isFavourite);
    setCount((count) => (isFavourite ? count - 1 : count + 1));
    fCallBack && fCallBack();
  };

  if (type === 'comment') {
    return (
      <CommentStyles
        onClick={fCallBack}
        count={count}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {count === 0 ? (
          <StyledReplyOutlined hover={hover ? 'true' : 'false'} count={count} />
        ) : (
          <StyledReplyFilled hover={hover ? 'true' : 'false'} count={count} />
        )}
        {count === 0 ? false : `${count}`} {label}
      </CommentStyles>
    );
  }

  if (type === 'like') {
    return (
      <LikeStyles
        onClick={handleClickLike}
        count={count}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-pressed={isFavourite}
      >
        {isFavourite ? (
          <StyledHeartFilled hover={hover ? 'true' : 'false'} count={count} />
        ) : (
          <StyledHeartOutlined hover={hover ? 'true' : 'false'} count={count} />
        )}
        {(count === 1 && isFavourite === true) || count === 0 ? '' : count} {label}
      </LikeStyles>
    );
  }

  return null;
};

/**
 * @Button
 * @desc Button styles
 */
interface IInteractionButtonStyles {
  count: number;
}

interface IInteractionSvgStyles {
  hover: string;
  count?: number;
}

const CommentStyles = styled.button(({ count }: IInteractionButtonStyles) => [
  tw`
    font-semibold
    leading-normal
    text-slate-600
    text-sm
    flex
    grow-0
    justify-center
    items-center
    p-12
    rounded-full
    w-auto
    outline-none
    bg-none
    hover:(text-violet-600 bg-violet-50)
    
`,
  count === 0 && tw`text-slate-600 hover:(text-violet-600 bg-violet-50)`,
]);

const LikeStyles = styled.button(({ count }: IInteractionButtonStyles) => [
  tw`
  font-semibold
  leading-normal
  text-pink-600
  text-sm
  flex
  grow-0
  justify-center
  items-center
  p-12
  rounded-full
  w-auto
  outline-none
  bg-none
  hover:(text-pink-600 bg-pink-50)
  `,
  count >= 1 && tw`text-pink-900`,
  count === 0 && tw`text-slate-600 hover:(text-pink-600 bg-pink-50)`,
]);

const StyledReplyOutlined = styled(ReplyOutlined)(({ hover }: IInteractionSvgStyles) => [
  tw`
      fill-slate-600
      h-16
      w-16
      mr-8
    `,
  hover === 'true' && tw`fill-violet-600`,
]);

const StyledReplyFilled = styled(ReplyFilled)(({ hover, count }: IInteractionSvgStyles) => [
  tw`
      fill-slate-600
      h-16
      w-16
      mr-8
    `,
  hover === 'true' && tw`fill-violet-600`,
  count && count >= 1 && tw`fill-violet-600`,
]);

const StyledHeartOutlined = styled(HeartOutlined)(({ hover, count }: IInteractionSvgStyles) => [
  tw`
      fill-slate-600
      h-16
      w-16
      mr-8
    `,
  hover === 'true' && tw`fill-pink-500`,
  count === 0 && hover === 'false' ? tw`fill-slate-600` : tw`fill-pink-500`,
]);

const StyledHeartFilled = styled(HeartFilled)(({ hover, count }: IInteractionSvgStyles) => [
  tw`
      fill-slate-600
      h-16
      w-16
      mr-8
    `,
  hover === 'true' && tw`fill-pink-500`,
  count === 0 && !hover ? tw`fill-slate-600` : tw`fill-pink-500`,
]);
