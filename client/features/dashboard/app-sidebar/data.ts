import { CheckCircle, CreditCard, Home, User } from 'lucide-react';

export const sidebaritems = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Users',
    url: '/dashboard/users',
    icon: User,
  },
  {
    title: 'Transactions',
    url: '/dashboard/transactions',
    icon: CreditCard,
  },
  {
    title: 'Approvals',
    url: '/dashboard/approvals',
    icon: CheckCircle,
  },
];
