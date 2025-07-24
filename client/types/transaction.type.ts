export enum TransactionStatus {
  Pending = 0,
  Active = 1,
  Completed = 2,
  Rejected = 3,
}

export type Transaction = {
  id: number;
  from: string;
  to: string;
  amount: number;
  description: string;
  status: TransactionStatus;
  timestamp: Date;
  approvalId: number;
};
