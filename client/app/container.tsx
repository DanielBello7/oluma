'use client';

import { AuthGate } from '@/features';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'motion/react';
import { ReactNode } from 'react';

const client = new QueryClient();

type Props = {
  children?: ReactNode;
};
export const Container = (props: Props) => {
  return (
    <QueryClientProvider client={client}>
      <AnimatePresence mode="wait">
        <AuthGate>{props.children}</AuthGate>
      </AnimatePresence>
    </QueryClientProvider>
  );
};
