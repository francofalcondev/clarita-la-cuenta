import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { FriendItem } from "./components";
import { useBillContext } from "@/context/BillContext";

export const FriendsList = () => {
  const { bills } = useBillContext();
  const participants = bills.length > 0 ? bills[0].participant : [];
  return (
    <View style={styles.friendsContainer}>
      <FlatList
        data={participants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FriendItem participant={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};
