'use client';

import { useUser } from '@/store';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useLogic = () => {
  const query = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const id = query.get('id');

  const users = useUser((state) => state);

  const close = () => {
    router.push(pathname);
  };

  // prettier-ignore
  const {
    isPending,
    isError,
    error,
    data
  } = useQuery({
    queryKey: [`user-${id}`],
    queryFn: () => {
      if (!id) return null;
      return users.data.users.find((i) => i.id == Number(id)) ?? null;
    },
    refetchOnWindowFocus: false,
  });

  return {
    close,
    isError,
    isPending,
    error,
    data,
    id,
  };
};
