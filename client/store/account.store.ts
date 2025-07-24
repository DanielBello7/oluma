import { User } from '@/types';
import { ethers } from 'ethers';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ETH = {
  signer: ethers.JsonRpcSigner;
  provider: ethers.BrowserProvider;
  id: string;
};

type AccountData = {
  eth: ETH | null;
  connected_at: Date | null;
  user: User | null;
};

type State = {
  data: AccountData;
  set_data: (params: Partial<AccountData>) => void;
  reset: () => void;
};

const initial: AccountData = {
  connected_at: null,
  eth: null,
  user: null,
};

export const useAccount = create<State>()(
  persist(
    (set, get) => ({
      data: initial,
      reset() {
        set({
          data: initial,
        });
      },
      set_data(param) {
        const current = get().data;
        set({
          data: {
            ...current,
            ...param,
          },
        });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
