'use client';

import { User, UserRole } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { Options } from './options';

export const columns: ColumnDef<User>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: () => <div className="font-extrabold">ID</div>,
    cell: ({ row }) => {
      const value = row.getValue('id') as number;
      return <div className="font-medium">{value}</div>;
    },
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: () => <div className="font-extrabold">NAME</div>,
    cell: ({ row }) => {
      const value = row.getValue('name') as string;
      return <div className="font-medium">{value}</div>;
    },
  },
  {
    id: 'email',
    accessorKey: 'email',
    header: () => <div className="font-extrabold">EMAIL</div>,
    cell: ({ row }) => {
      const value = row.getValue('email') as string;
      return <div className="font-medium">{value}</div>;
    },
  },
  {
    id: 'role',
    accessorKey: 'role',
    header: () => <div className="font-extrabold">ROLE</div>,
    cell: ({ row }) => {
      const value = row.getValue('role') as number;
      const role = UserRole[value];
      return <div className="font-medium">{role}</div>;
    },
  },
  {
    id: 'options',
    accessorKey: '',
    header: () => <div></div>,
    cell: ({ row }) => {
      const user = row.original;
      return <Options data={user} />;
    },
  },
];
