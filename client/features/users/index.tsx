'use client';

import { DataTable } from '@/components/datatable';
import { Render } from '@/components/render';
import { useLogic } from './use-logic';
import { columns } from './user-columns';

export const Users = () => {
  // prettier-ignore
  const {
    data,
    error,
    isError,
    isPending
  } = useLogic()

  return (
    <div className="w-8/12 mx-auto pt-10 pb-2">
      <div className="mb-4">
        <h1 className="text-2xl tracking-tighter">Users</h1>
        <p className="text-muted-foreground">List of registered users</p>
      </div>
      <Render error={error} isError={isError} isLoading={isPending}>
        <DataTable columns={columns} data={data} />
      </Render>
    </div>
  );
};
