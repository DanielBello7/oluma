'use client';

import { Checkbox } from '@/components/ui';
import { Transaction, TransactionStatus } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { Options } from './options';

export const columns: ColumnDef<Transaction>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'id',
    accessorKey: 'id',
    header: () => <div className="font-extrabold uppercase">id</div>,
    cell: ({ row }) => {
      const value = row.getValue('id') as number;
      return <div className="font-medium">{value}</div>;
    },
  },
  {
    id: 'from',
    accessorKey: 'from',
    header: () => <div className="font-extrabold uppercase">from</div>,
    cell: ({ row }) => {
      const value = row.getValue('from') as string;
      return <div className="font-medium truncate w-[100px]">{value}</div>;
    },
  },
  {
    id: 'to',
    accessorKey: 'to',
    header: () => <div className="font-extrabold uppercase">to</div>,
    cell: ({ row }) => {
      const value = row.getValue('to') as string;
      return <div className="font-medium truncate w-[100px]">{value}</div>;
    },
  },
  {
    id: 'amount',
    accessorKey: 'amount',
    header: () => <div className="font-extrabold uppercase">amount</div>,
    cell: ({ row }) => {
      const value = row.getValue('amount') as number;
      const amount = Number(value);
      return <div className="font-medium">{amount}</div>;
    },
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: () => <div className="font-extrabold uppercase">status</div>,
    cell: ({ row }) => {
      const value = row.getValue('status') as number;
      const status = TransactionStatus[value];
      return <div className="font-medium">{status}</div>;
    },
  },
  {
    id: 'timestamp',
    accessorKey: 'timestamp',
    header: () => <div className="font-extrabold uppercase">created at</div>,
    cell: ({ row }) => {
      const value = row.getValue('timestamp') as number;
      return (
        <div className="font-medium">
          {new Date(value).toLocaleDateString('en-us', {
            dateStyle: 'medium',
          })}
        </div>
      );
    },
  },
  {
    id: 'options',
    accessorKey: '',
    header: () => <div className="font-extrabold uppercase"></div>,
    cell: ({ row }) => {
      const value = row.original;
      return <Options data={value} />;
    },
  },
];
