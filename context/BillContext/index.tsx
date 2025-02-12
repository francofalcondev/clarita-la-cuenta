import { createContext, useContext, useState } from "react";
import { Bill, BillContextType, BillProviderProps, Participant } from "./types";
import { parsedDate } from "@/utils/dateHelpers";
import uuid from "react-native-uuid";

import { avatarWithColors } from "@/constants/avatarWithColors";

const initialState = {
  bills: [],
  addBill: () => {},
  addParticipant: () => {},
};
const BillContext = createContext<BillContextType>(initialState);

const billMock: Bill[] = [
  {
    id: "124ss",
    title: "Burguer Queen",
    createdAt: parsedDate,
    amount: 15000,
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

  const addParticipant = (billId: string, name: string, payment: number) => {
    setBills((prevBills) =>
      prevBills.map((bill) => {
        if (bill.id === billId) {
          // Obtener el índice del próximo avatar
          const index = bill.participants.length;

          // Verificar que el índice esté dentro del rango del array
          const avatarConfig =
            avatarWithColors[index % avatarWithColors.length];

          // Crear el nuevo participante
          const newParticipant = {
            id: uuid.v4(),
            name,
            avatar: avatarConfig.avatar,
            color: avatarConfig.color,
            payment,
          };

          // Retornar la factura actualizada con el nuevo participante
          return {
            ...bill,
            participants: [...bill.participants, newParticipant],
          };
        }
        return bill;
      }),
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
