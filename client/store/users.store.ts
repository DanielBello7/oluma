import { combine, deduct } from '@/lib';
import { User } from '@/types';
import { create } from 'zustand';

type UsersData = {
  users: User[];
};

type State = {
  data: UsersData;
  set_data: (params: Partial<UsersData>) => void;
  insert_users: (params: User[]) => void;
  remove_users: (params: number[]) => void;
  reset: () => void;
};

const initial: UsersData = {
  users: [],
};

export const useUser = create<State>()((set, get) => ({
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
  insert_users(params) {
    const current = get().data;
    const combined = combine<User>('id', current.users, params);
    set({
      data: {
        users: combined,
      },
    });
  },
  remove_users(params) {
    const current = get().data;
    const reduced = deduct<User, 'id'>('id', current.users, params);
    set({
      data: {
        users: reduced,
      },
    });
  },
}));
