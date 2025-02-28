import { createContext, useContext, useState } from "react";
import {
  Bill,
  BillContextType,
  BillProviderProps,
  EventOption,
  Participant,
} from "./types";
import { parsedDate } from "@/utils/dateHelpers";
import { avatarWithColors } from "@/constants/avatarWithColors";
import uuid from "react-native-uuid";
import { formatNumber } from "@/utils/formatNumbers";

const defaultBill: Bill = {
  id: uuid.v4(),
  title: { label: "sdds", emoji: "🌵" },
  createdAt: parsedDate,
  amount: 0,
  participants: [],
};

const initialState = {
  bill: defaultBill,
  addBill: () => {},
  generateBillText: () => "",
  addParticipant: () => {},
  updateParticipant: () => {},
};
const BillContext = createContext<BillContextType>(initialState);

export const BillProvider = ({ children }: BillProviderProps) => {
  const [bill, setBill] = useState<Bill>(defaultBill);

  //Create BIll
  const addBill = (title: EventOption, amount?: number) => {
    const newBill: Bill = {
      id: uuid.v4(),
      title: title,
      amount: amount || 0,
      createdAt: parsedDate,
      participants: [],
    };

    setBill(newBill);
  };

  //Create Participant

  const addParticipant = (name: string, payment: number) => {
    if (!bill) {
      console.error("No active bill");
      return;
    }

    const index = bill.participants.length;
    const avatarConfig = avatarWithColors[index % avatarWithColors.length];

    const newParticipant: Participant = {
      id: uuid.v4(),
      name,
      avatar: avatarConfig.avatar,
      color: avatarConfig.color,
      payment,
    };

    const updateBill: Bill = {
      ...bill,
      participants: [...bill.participants, newParticipant],
      amount: bill.amount + payment,
    };

    setBill(updateBill);
  };

  const generateBillText = (bill: Bill) => {
    const totalAmount = bill.amount;
    const participants = bill.participants;
    const average = totalAmount / participants.length;

    let text = `💵 Cuenta total: ${formatNumber(totalAmount)} ARS\n`;
    text += `👥 Total de participantes: ${participants.length}\n`;
    text += `💰 Monto por persona: ${formatNumber(average)} ARS\n\n`;

    text += "👤 PARTICIPANTES:\n";
    participants.forEach((participant) => {
      text += `- ${participant.name.toUpperCase()} aportó ${formatNumber(participant.payment)} ARS\n`;
    });

    text += "\n🎯 RESULTADOS:\n";
    let differences = participants.map((participant) => ({
      name: participant.name,
      difference: Math.round(participant.payment - average),
    }));

    let debtors = differences.filter((p) => p.difference < 0);
    let creditors = differences.filter((p) => p.difference > 0);

    debtors.forEach((debtor) => {
      creditors.forEach((creditor) => {
        let amount = Math.min(-debtor.difference, creditor.difference);
        amount = Math.round(amount);

        if (amount > 0) {
          text += `- ${debtor.name.toUpperCase()} paga ${formatNumber(amount)} ARS a ${creditor.name.toUpperCase()}\n`;

          debtor.difference += amount;
          creditor.difference -= amount;
        }
      });
    });

    return text;
  };

  //Edit Participant
  const updateParticipant = (id: string, name: string, payment: number) => {
    if (!bill) {
      console.error("No active Bill");
      return;
    }

    const updatedParticipants = bill.participants.map((participant) =>
      participant.id === id ? { ...participant, name, payment } : participant,
    );

    const newTotalAmount = updatedParticipants.reduce(
      (sum, p) => sum + p.payment,
      0,
    );

    const updatedBill: Bill = {
      ...bill,
      participants: updatedParticipants,
      amount: newTotalAmount,
    };

    setBill(updatedBill);
  };

  return (
    <BillContext.Provider
      value={{
        bill,
        addBill,
        addParticipant,
        generateBillText,
        updateParticipant,
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export const useBillContext = () => {
  const context = useContext(BillContext);
  return context;
};
