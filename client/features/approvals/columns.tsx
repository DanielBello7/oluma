'use client';

import { Checkbox } from '@/components/ui';
import { Approval, ApprovalStatus, ApprovalType } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Approval>[] = [
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
    id: 'transactionId',
    accessorKey: 'transactionId',
    header: () => <div className="font-extrabold uppercase">transaction id</div>,
    cell: ({ row }) => {
      const value = row.getValue('transactionId') as number;
      return <div className="font-medium">{value}</div>;
    },
  },
  {
    id: 'requester',
    accessorKey: 'requester',
    header: () => <div className="font-extrabold uppercase">requester</div>,
    cell: ({ row }) => {
      const value = row.getValue('requester') as string;
      return <div className="font-medium truncate w-[100px]">{value}</div>;
    },
  },
  {
    id: 'approver',
    accessorKey: 'approver',
    header: () => <div className="font-extrabold uppercase">approver</div>,
    cell: ({ row }) => {
      const value = row.getValue('approver') as string;
      return <div className="font-medium truncate w-[100px]">{value}</div>;
    },
  },
  {
    id: 'approvalType',
    accessorKey: 'approvalType',
    header: () => <div className="font-extrabold uppercase">approval type</div>,
    cell: ({ row }) => {
      const value = row.getValue('approvalType') as number;
      const status = ApprovalType[value];
      return <div className="font-medium">{status}</div>;
    },
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: () => <div className="font-extrabold uppercase">status</div>,
    cell: ({ row }) => {
      const value = row.getValue('status') as number;
      const status = ApprovalStatus[value];
      return <div className="font-medium">{status}</div>;
    },
  },
];
