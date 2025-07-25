'use client';

import { DataTable } from '@/components/datatable';
import { Render } from '@/components/render';
import { columns } from './columns';
import { useLogic } from './use-logic';

export const Approvals = () => {
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
        <h1 className="text-2xl tracking-tighter">Approvals</h1>
        <p className="text-muted-foreground">
          List of transaction approvals on the blockchain
        </p>
      </div>
      <Render error={error} isError={isError} isLoading={isPending}>
        <DataTable
          columns={columns}
          data={data}
          pagination={true}
          filter="requester"
        />
      </Render>
    </div>
  );
};
