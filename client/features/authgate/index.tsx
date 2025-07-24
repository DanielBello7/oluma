'use client';

import { Spinner } from '@/components/index';
import { ReactNode } from 'react';
import { useLogic } from './use-logic';

type Props = {
  children?: ReactNode;
};
export const AuthGate = (props: Props) => {
  const { isLoading } = useLogic();
  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  return <>{props.children}</>;
};
