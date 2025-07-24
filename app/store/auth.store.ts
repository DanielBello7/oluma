import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthData = {
  jwt_token: string | null;
  refresh: string | null;
  user: Record<string, unknown> | null;
  expires: Date;
};

type State = {
  data: AuthData;
  set_data: (params: Partial<AuthData>) => void;
  reset: () => void;
};

const initial: AuthData = {
  jwt_token: null,
  refresh: null,
  user: null,
  expires: new Date(),
};

export const useAuth = create<State>()(
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
