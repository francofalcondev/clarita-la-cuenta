import { View, Text } from "react-native";
import { styles } from "./styles";
import { FriendItem } from "./components";

export const FriendsList = () => {
  return (
    <View style={styles.friendsContainer}>
      <FriendItem />
    </View>
  );
};
