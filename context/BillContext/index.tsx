import { createContext, useContext, useState } from "react";
import { Bill, BillContextType, BillProviderProps, Participant } from "./types";
import { parsedDate } from "@/utils/dateHelpers";
import uuid from "react-native-uuid";
import { ImageSourcePropType } from "react-native";

const initialState = {
  bills: [],
  addBill: () => {},
  addParticipant: () => {},
};
const BillContext = createContext<BillContextType>(initialState);

const billMock: Bill[] = [
  {
    id: "124-s",
    title: "Burguer Queen",
    createdAt: parsedDate,
    amount: 150.0,
    participants: [],
  },
];

export const BillProvider = ({ children }: BillProviderProps) => {
  const [bills, setBills] = useState<Bill[]>(billMock);

  const addBill = (title: string, amount?: number) => {
    const newBill: Bill = {
      id: uuid.v4(),
      title: title,
      amount: amount ? amount : 0,
      createdAt: parsedDate,
      participants: [],
    };

    setBills([...bills, newBill]);
  };

  const addParticipant = (
    billId: string,
    name: string,
    payment: number,
    avatar: ImageSourcePropType,
    color: string,
  ) => {
    const newParticipant: Participant = {
      id: uuid.v4(),
      name: name,
      avatar: avatar,
      color: color,
      payment: payment,
    };

    setBills((prevBills) =>
      prevBills.map((bill) =>
        bill.id === billId
          ? { ...bill, participants: [...bill.participants, newParticipant] }
          : bill,
      ),
    );
  };

  return (
    <BillContext.Provider value={{ bills, addBill, addParticipant }}>
      {children}
    </BillContext.Provider>
  );
};

export const useBillContext = () => {
  const context = useContext(BillContext);
  return context;
};
