import { AvatarGroup } from "@/components";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useBillContext } from "@/context";

export const TotalBill = () => {
  const { bills } = useBillContext();
  const participants =
    bills.length > 0 && bills[0].participant ? bills[0].participant : [];
  const avatarUrls =
    participants.length > 0
      ? participants.map((participant) => {
          return participant.avatar
            ? participant.avatar
            : require("@/assets/images/default-avatar.png");
        })
      : [];
  return (
    <View style={styles.totalBillCardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>🍔 Burger Queen</Text>
        <Text>Oct 13, 2023 - 20:38</Text>
      </View>
      <View style={styles.footerContainer}>
        <View>
          <Text style={styles.amountTitle}>Monto Total</Text>
          <Text style={styles.amount}>43.000 USD</Text>
        </View>
        <AvatarGroup avatarUrls={avatarUrls} />
      </View>
    </View>
  );
};
