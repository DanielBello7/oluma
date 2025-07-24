import { contracts } from '@/constants';
import { parse_contract_struct } from '@/lib/parse-contract';
import { wait } from '@/lib/wait';
import { useAccount, useTransactions } from '@/store';
import { Transaction } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useLogic = () => {
  const { data, insert_transactions } = useTransactions((state) => state);
  const account = useAccount((state) => state);

  // prettier-ignore
  const { 
    isPending, 
    error, 
    isError 
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      await wait();
      const result: Transaction[] = await get_trx()
      insert_transactions(result);
      return result;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  const get_trx = async () => {
    if (!account.data.eth) {
      throw new Error('wallet not connected');
    }

    const contract = await contracts.get_contract(account.data.eth.signer);
    const trxCount = await contract.getTransactionCount();

    return Promise.all(
      Array.from(new Array(trxCount), async (_, i) => {
        return parse_contract_struct.transaction(
          await contract.getTransaction(i + 1),
        );
      }),
    );
  };

  return {
    isPending,
    error,
    isError,
    data: data.transactions,
  };
};
