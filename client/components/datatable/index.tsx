'use client';
import { Table, TableBody, TableHeader } from '@/components/ui';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';
import { useState } from 'react';
import { Empty } from './empty';
import { Filters } from './filters';
import { HeadItem } from './headitem';
import { Pagination } from './pagination';
import { RowItem } from './rowitem';

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pagination?: boolean;
  filter?: string;
}

export const DataTable = <TData, TValue>(props: Props<TData, TValue>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [filters, setFilters] = useState<ColumnFiltersState>([]);
  const [selects, setSelects] = React.useState({});

  const { columns, data } = props;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setSelects,
    state: {
      sorting,
      columnFilters: filters,
      rowSelection: selects,
    },
  });

  return (
    <>
      <div className="w-full">
        {props.filter && <Filters table={table} column={props.filter} />}
      </div>
      <div className="rounded-md border mb-5">
        <Table>
          <TableHeader className="bg-muted">
            {table.getHeaderGroups().map((group) => {
              return <HeadItem headerGroup={group} key={group.id} />;
            })}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                return <RowItem row={row} key={row.id} />;
              })
            ) : (
              <Empty />
            )}
          </TableBody>
        </Table>
      </div>
      {props.pagination && <Pagination table={table} />}
    </>
  );
};
