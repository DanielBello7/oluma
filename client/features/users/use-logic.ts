import { contracts } from '@/constants';
import { parse_contract_struct } from '@/lib/parse-contract';
import { useAccount, useUser } from '@/store';
import { useQuery } from '@tanstack/react-query';

export const useLogic = () => {
  const { data } = useAccount((state) => state);
  const { insert_users, data: users_data } = useUser((state) => state);

  // prettier-ignore
  const { 
    isPending, 
    error, 
    isError 
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const result = await get_users();
      insert_users(result);
      return result;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  const get_users = async () => {
    if (!data.eth) throw new Error('wallet not connected');
    const contract = await contracts.get_contract(data.eth.signer);

    const users_count = Number(await contract.getUserCount());

    const users_addresses = await Promise.all(
      Array.from(new Array(users_count), async (_, k) => {
        return contract.allUserAddresses(k);
      }),
    );

    return Promise.all(
      users_addresses.map(async (i) => {
        const user = await contract.getUser(i);
        return parse_contract_struct.user(user);
      }),
    );
  };

  return {
    isPending,
    error,
    isError,
    data: users_data.users,
  };
};
