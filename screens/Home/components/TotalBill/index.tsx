import { AvatarGroup } from "@/components";
import { View, Text, ImageURISource } from "react-native";
import { styles } from "./styles";
import { useBillContext } from "@/context";
import { getAvatarUrl } from "@/utils/avatarUrl";

export const TotalBill = () => {
  const { bills } = useBillContext();
  const bill = bills[0];

  const avatarUrls: any[] = bill.participants.map((participant) =>
    getAvatarUrl(participant.avatar),
  );
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
