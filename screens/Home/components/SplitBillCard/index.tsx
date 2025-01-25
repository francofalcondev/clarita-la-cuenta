import { View, Text, TouchableOpacity } from "react-native";
import { AvatarGroup } from "@/components";
import { styles } from "./styles";
export const SplitBillCard = () => {
  const avatarUrls = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  ];
  const user = {
    title: "Burger Queen",
    amount: 32.12,
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>{user.title}</Text>
        <Text style={styles.headerAmount}>{user.amount}</Text>
      </View>
      <View>
        <AvatarGroup avatarUrls={avatarUrls} />
      </View>
      <View>
        <TouchableOpacity>View detail</TouchableOpacity>
      </View>
    </View>
  );
};
