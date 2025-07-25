'use client';

import { ensure_error, toaster } from '@/lib';
import { useAccount } from '@/store';
import { UserRole } from '@/types';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

type Inputs = {
  name: string;
  address: string;
  email: string;
  role: UserRole;
};

const user_assert = z.object({
  name: z.string().nonempty(),
  address: z.string().nonempty(),
  email: z.email().nonempty(),
  role: z.enum(UserRole),
});

export const useLogic = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const err = new Error('wallet not connected');

  const account = useAccount((state) => state);

  // prettier-ignore
  const {
		register,
    handleSubmit,
	} = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (!account.data.eth) throw err;
      setIsLoading(true);
      const value = user_assert.parse(data);
    } catch (e) {
      const err = ensure_error(e);
      toaster.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    show,
    setShow,
    submit,
    register,
    handleSubmit,
    isLoading,
  };
};
