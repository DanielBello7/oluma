'use client';

import { Spinner } from '@/components/index';
import { Button, Input, Label } from '@/components/ui';
import { useLogic } from './use-logic';

export const Forms = () => {
  // prettier-ignore
  const { 
		handleSubmit, 
		register, 
		submit,
		isLoading, 
	} = useLogic();

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(submit)}>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          disabled={isLoading}
          placeholder="m@example.com"
          required
          {...register('email')}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? <Spinner /> : 'Login'}
      </Button>
    </form>
  );
};
