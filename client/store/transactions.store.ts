import { combine, deduct } from '@/lib';
import { Transaction } from '@/types';
import { create } from 'zustand';

type TransactionData = {
  transactions: Transaction[];
};

type State = {
  data: TransactionData;
  set_data: (params: Partial<TransactionData>) => void;
  insert_transactions: (params: Transaction[]) => void;
  remove_transactions: (params: number[]) => void;
  reset: () => void;
};

const initial: TransactionData = {
  transactions: [],
};

export const useTransactions = create<State>()((set, get) => ({
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
  insert_transactions(params) {
    const current = get().data;
    const combined = combine<Transaction>(
      'id',
      current.transactions,
      params,
    );
    set({
      data: {
        transactions: combined,
      },
    });
  },
  remove_transactions(params) {
    const current = get().data;
    const reduced = deduct<Transaction, 'id'>(
      'id',
      current.transactions,
      params,
    );
    set({
      data: {
        transactions: reduced,
      },
    });
  },
}));
