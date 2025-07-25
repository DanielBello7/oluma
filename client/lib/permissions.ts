import { User, UserRole } from '@/types';

export const permission = {
  isAdmin: (user: User) => user.role === UserRole.Admin,
  isManager: (user: User) => user.role === UserRole.Manager,
  isUser: (user: User) => user.role === UserRole.Regular,
};
