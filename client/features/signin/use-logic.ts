import { contracts } from '@/constants';
import { ensure_error, initByEthers, toaster } from '@/lib';
import { parse_contract_struct } from '@/lib/parse-contract';
import { wait } from '@/lib/wait';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

type Inputs = {
  email: string;
};

const form_z = z.object({
  email: z.string(),
});

export const useLogic = () => {
  const [isLoading, setIsLoading] = useState(false);

  // prettier-ignore
  const {
		register,
    handleSubmit,
	} = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true);
      await wait();
      const response = form_z.parse(data);
      const ethereum = await initByEthers();
      const contract = await contracts.get_contract(ethereum.signer);
      const contract_user = await contract.getUser(ethereum.account);
      const user = parse_contract_struct.user(contract_user);

      console.log({
        user,
        email: response.email,
        account: ethereum.account,
      });
    } catch (e) {
      const err = ensure_error(e);
      toaster.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    register,
    handleSubmit,
    submit,
  };
};
