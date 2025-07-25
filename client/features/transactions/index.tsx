'use client';

import { DataTable } from '@/components/datatable';
import { Render } from '@/components/render';
import { columns } from './columns';
import { useLogic } from './use-logic';

export const Transaction = () => {
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
        <h1 className="text-2xl tracking-tighter">Transactions</h1>
        <p className="text-muted-foreground">
          List of transactions going on in the blockchain
        </p>
      </div>
      <Render error={error} isError={isError} isLoading={isPending}>
        <DataTable columns={columns} data={data} pagination={true} filter="from" />
      </Render>
    </div>
  );
};
