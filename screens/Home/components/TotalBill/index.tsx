import { AvatarGroup } from "@/components";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const TotalBill = () => {
  const avatarUrls = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  ];

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
