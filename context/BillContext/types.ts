import { PropsWithChildren } from "react";

export type BillProviderProps = PropsWithChildren<object>;

export interface Bill {
  id: string;
  title: string;
  amount?: number;
  createdAt: Date;
  participant: Participant[];
}

export interface Participant {
  id: string;
  name: string;
  avatar: any;
  color: string;
  payment: number;
}

export interface BillContextType {
  bills: Bill[];
  addBill: (title: string, amount?: number) => void;
  addParticipant: (billId: string, name: string, payment: number) => void;
}

export interface BillContextInitialState {
  bills: Bill[];
}
