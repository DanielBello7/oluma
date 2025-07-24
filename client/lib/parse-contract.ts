/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Approval,
  ApprovalStatus,
  ApprovalType,
  Transaction,
  TransactionStatus,
  User,
  UserRole,
} from '@/types';

export const parse_contract_struct = {
  user: (data: any): User => {
    return {
      id: Number(data[0]),
      walletAddress: data[1],
      name: data[2],
      email: data[3],
      role: Number(data[4]) as UserRole,
      isActive: data[5],
      createdAt: new Date(Number(data[6])),
    } satisfies User;
  },
  transaction: (data: any): Transaction => {
    return {
      id: Number(data[0]),
      from: data[1],
      to: data[2],
      amount: Number(data[3]),
      description: data[4],
      status: Number(data[5]) as TransactionStatus,
      timestamp: new Date(Number(data[6])),
      approvalId: Number(data[7]),
    } satisfies Transaction;
  },
  approval: (data: any): Approval => {
    return {
      id: Number(data[0]),
      transactionId: Number(data[1]),
      requester: data[2],
      approver: data[3],
      approvalType: Number(data[4]) as ApprovalType,
      status: Number(data[5]) as ApprovalStatus,
      reason: data[6],
      timestamp: new Date(Number(data[7])),
    } satisfies Approval;
  },
};
