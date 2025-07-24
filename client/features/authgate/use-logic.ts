/* eslint-disable react-hooks/exhaustive-deps */

'use client';
import { wait } from '@/lib/wait';
import { useAccount } from '@/store/account.store';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export const useLogic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const account = useAccount((state) => state);
  const router = useRouter();
  const pathname = usePathname();

  const onload = useCallback(async () => {
    setIsLoading(true);
    if (!account.hydrated) return;
    try {
      await wait();
      console.log(account.data);
      if (account.data.user) {
        console.log(account.data.user.name);
        if (pathname.includes('/dashboard')) return;
        else return router.replace('/dashboard');
      }
    } catch (error) {
      console.error(error);
      if (pathname === '/') return;
      else router.push('/');
    } finally {
      await wait();
      setIsLoading(false);
    }
  }, [account.hydrated, account.data]);

  useEffect(() => {
    onload();
  }, [onload]);

  return {
    isLoading,
  };
};
