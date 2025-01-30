import { createContext, useContext, useState } from "react";
import { Bill, BillContextType, BillProviderProps, Participant } from "./types";
import { parsedDate } from "@/utils/dateHelpers";
import { getRandomAvatarAndColor } from "@/utils/randomUtils";
import uuid from "react-native-uuid";

const initialState = {
  bills: [],
  addBill: () => {},
  addParticipant: () => {},
};
const BillContext = createContext<BillContextType>(initialState);

const generateParticipants = (count: number): Participant[] => {
  return Array.from({ length: count }, (_, index) => {
    const { avatar, color } = getRandomAvatarAndColor();
    return {
      id: uuid.v4(),
      name: `Participante ${index + 1}`,
      avatar,
      color,
      payment: Math.floor(Math.random() * 5000) + 1000,
    };
  });
};
const participants2 = generateParticipants(5);
const billMock: Bill[] = [
  {
    id: "124-s",
    title: "Burguer Queen",
    createdAt: new Date(),
    amount: 150.0,
    participant: participants2,
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
      participant: [],
    };

    setBills([...bills, newBill]);
  };

  const addParticipant = (billId: string, name: string, payment: number) => {
    const { avatar, color } = getRandomAvatarAndColor();

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
          ? { ...bill, participants: [...bill.participant, newParticipant] }
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
