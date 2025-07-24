export enum UserRole {
  Regular = 0,
  Manager = 1,
  Admin = 2,
}

export type User = {
  id: number;
  walletAddress: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
};
