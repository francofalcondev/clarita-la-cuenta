import { View, Image, Text, TouchableOpacity } from "react-native";

export const FriendItem = () => {
  return (
    <View>
      <View>
        <View>
          <Image source={require("@/assets/images/avatars/avatarOne.png")} />
          <Text>{`Andica (You)`}</Text>
        </View>
        <View>
          <Text>60.00 USD</Text>
          <TouchableOpacity>E</TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
