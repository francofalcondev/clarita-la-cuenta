import { PropsWithChildren } from "react";
import { ImageSourcePropType } from "react-native";

export type BillProviderProps = PropsWithChildren<object>;

export interface Bill {
  id: string;
  title: string;
  amount: number;
  createdAt: Date;
  participants: Participant[];
}

export interface Participant {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
  color: string;
  payment: number;
}

export interface BillContextType {
  bill: Bill;
  addBill: (title: string, amount?: number) => void;
  addParticipant: (name: string, payment: number) => void;
  generateBillText: (bill: Bill) => string;
}

export interface BillContextInitialState {
  bill: Bill;
}
