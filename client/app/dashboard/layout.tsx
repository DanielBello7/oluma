'use client';
import { Dashboard } from '@/features';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function DashboardLayout(props: Props) {
  return <Dashboard>{props.children}</Dashboard>;
}
