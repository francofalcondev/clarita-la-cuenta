import { AvatarGroup } from "@/components";
import { View, Text, ImageURISource } from "react-native";
import { styles } from "./styles";
import { useBillContext } from "@/context";
import { getAvatarUrl } from "@/utils/avatarUrl";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { formatNumber } from "@/utils/formatNumbers";

export const TotalBill = () => {
  const { bill } = useBillContext();

  const avatarUrls: (string | ImageURISource | ImageURISource[])[] =
    bill.participants.map((participant) => getAvatarUrl(participant.avatar));

  return (
    <View style={styles.totalBillCardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>🍔{bill?.title}</Text>
        <Text>
          {format(bill.createdAt, "dd 'de' MMMM yyyy, HH:mm", { locale: es })}
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <View>
          <Text style={styles.amountTitle}>Monto Total</Text>
          <Text
            style={styles.amount}
          >{`${formatNumber(bill.amount)} ARS`}</Text>
        </View>
        <AvatarGroup avatarUrls={avatarUrls} />
      </View>
    </View>
  );
};
