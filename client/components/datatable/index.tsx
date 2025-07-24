'use client';
import { Table, TableBody, TableHeader } from '@/components/ui';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Empty } from './empty';
import { HeadItem } from './headitem';
import { RowItem } from './rowitem';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const DataTable = <TData, TValue>(
  props: DataTableProps<TData, TValue>,
) => {
  const { columns, data } = props;
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
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
  );
};
