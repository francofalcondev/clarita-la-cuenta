import { Bill } from "@/context/BillContext/types";
import { formatNumber } from "./formatNumbers";

export const generateBillText = (bill: Bill) => {
  const totalAmount = bill.amount;
  const participants = bill.participants;
  const average = totalAmount / participants.length;

  let text = `💵 Cuenta total: ${formatNumber(totalAmount)} ARS\n`;
  text += `👥 **Total de participantes**: ${participants.length}\n`;
  text += `💰 **Monto por persona**: ${formatNumber(average)} ARS\n\n`;

  text += "👤 PARTICIPANTES:\n";
  participants.forEach((participant) => {
    text += `- ${participant.name.toUpperCase()} aportó ${formatNumber(participant.payment)} ARS\n`;
  });

  text += "\n🎯 RESULTADOS:\n";
  const differences = participants.map((participant) => ({
    name: participant.name,
    difference: participant.payment - average,
  }));

  const debtors = differences.filter((p) => p.difference < 0);
  const creditors = differences.filter((p) => p.difference > 0);
  debtors.forEach((debtor) => {
    creditors.forEach((creditor) => {
      if (creditor.difference > 0) {
        const amount = Math.min(-debtor.difference, creditor.difference);
        text += `- ${debtor.name.toUpperCase()} paga ${formatNumber(amount)} ARS a ${creditor.name.toUpperCase()}\n`;

        debtor.difference += amount;
        creditor.difference -= amount;
      }
    });
  });

  return text;
};
