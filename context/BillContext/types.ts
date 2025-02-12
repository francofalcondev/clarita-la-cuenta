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
  bills: Bill[];
  addBill: (title: string, amount?: number) => void;
  addParticipant: (
    billId: string,
    name: string,
    payment: number,
    avatar: ImageSourcePropType,
    color: string,
  ) => void;
}

export interface BillContextInitialState {
  bills: Bill[];
}
