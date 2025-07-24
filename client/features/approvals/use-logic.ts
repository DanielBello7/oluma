import { contracts } from '@/constants';
import { parse_contract_struct } from '@/lib/parse-contract';
import { wait } from '@/lib/wait';
import { useAccount, useApproval } from '@/store';
import { Approval } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useLogic = () => {
  const { data, insert_approvals } = useApproval((state) => state);
  const account = useAccount((state) => state);

  // prettier-ignore
  const { 
    isPending, 
    error, 
    isError 
  } = useQuery({
    queryKey: ['approvals'],
    queryFn: async () => {
      await wait();
      const result: Approval[] = await get_approvals()
      insert_approvals(result);
      return result;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  const get_approvals = async () => {
    if (!account.data.eth) {
      throw new Error('wallet not connected');
    }

    const contract = await contracts.get_contract(account.data.eth.signer);
    const trxCount = await contract.getApprovalCount();

    return Promise.all(
      Array.from(new Array(trxCount), async (_, i) => {
        return parse_contract_struct.approval(await contract.getApproval(i + 1));
      }),
    );
  };

  return {
    isPending,
    error,
    isError,
    data: data.approvals,
  };
};
