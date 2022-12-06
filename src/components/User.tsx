import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IconLink } from 'src/components/IconLinks';

interface IUserProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'small' | 'medium' | 'large' | 'xlarge';
  color: string;
}

export const User: React.FC<IUserProps> = ({
  label = 'Display Name',
  variant = 'small',
}) => {
  return (
    <>
      {variant === 'small' && 
        <UserStyles>
        <h4>{label}</h4>
        <div className="flex flex-row justify-between max-w-lg gap-16 mt-8">
          <IconLink label="username" iconName='profile' iconColor='slate-500' variant="violet" />
          <IconLink label="Timestamp" iconName='time' iconColor='text-slate-500' />
        </div>
        </UserStyles>
      }
      
      {variant === 'medium' && 
        <UserStyles>
        <h4 tw='font-semibold text-md'>{label}</h4>
        <div className="flex flex-row justify-between max-w-lg gap-16 mt-8">
          <IconLink label="username" iconName='profile' iconColor="fill-pink-500" variant="violet" />
          <IconLink label="Timestamp" iconName='time' iconColor='text-slate-500' />
        </div>
        </UserStyles>
      }

      {variant === 'large' && 
        <UserStyles>
        <h4 tw='font-semibold text-lg'>{label}</h4>
        <div className="flex flex-row justify-between max-w-lg gap-16 mt-8">
          <IconLink label="username" iconName='profile' iconColor="fill-pink-500" variant="violet" />
          <IconLink label="Timestamp" iconName='time' iconColor='text-slate-500' />
        </div>
        </UserStyles>
      }

      {variant === 'xlarge' && 
        <UserStyles>
        <h3>{label}</h3>
        <div className="flex flex-row justify-between max-w-lg gap-16 mt-8">
          <IconLink label="username" iconName='profile' iconColor="fill-pink-500" variant="violet" />
          <IconLink label="Timestamp" iconName='time' iconColor='text-slate-500' />
          <IconLink label="Joined" iconName='calendar' iconColor='text-slate-500' />
        </div>
        </UserStyles>
      }
    </>
  );
};

interface IUserStylesProps {
  variant?: string;
}

/**
 * @Button
 * @desc Button styles
 */


const UserStyles = styled.div(() => [
]);
