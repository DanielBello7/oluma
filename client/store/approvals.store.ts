import { combine, deduct } from '@/lib';
import { Approval } from '@/types';
import { create } from 'zustand';

type ApprovalData = {
  approvals: Approval[];
};

type State = {
  data: ApprovalData;
  set_data: (params: Partial<ApprovalData>) => void;
  insert_approvals: (params: Approval[]) => void;
  remove_approvals: (params: number[]) => void;
  reset: () => void;
};

const initial: ApprovalData = {
  approvals: [],
};

export const useApproval = create<State>()((set, get) => ({
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
  insert_approvals(params) {
    const current = get().data;
    const combined = combine<Approval>('id', current.approvals, params);
    set({
      data: {
        approvals: combined,
      },
    });
  },
  remove_approvals(params) {
    const current = get().data;
    const reduced = deduct<Approval, 'id'>(
      'id',
      current.approvals,
      params,
    );
    set({
      data: {
        approvals: reduced,
      },
    });
  },
}));
