/* eslint-disable react-hooks/exhaustive-deps */

'use client';
import { initByEthers } from '@/lib';
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
      if (account.data.user) {
        const response = await initByEthers();
        account.set_data({
          connected_at: new Date(),
          eth: {
            id: response.account,
            provider: response.provider,
            signer: response.signer,
          },
        });
        if (pathname.includes('/dashboard')) return;
        else return router.replace('/dashboard');
      }
    } catch {
      if (pathname === '/') return;
      else router.push('/');
    } finally {
      await wait();
      setIsLoading(false);
    }
  }, [account.hydrated, account.data.user]);

  useEffect(() => {
    onload();
  }, [onload]);

  return {
    isLoading,
  };
};
