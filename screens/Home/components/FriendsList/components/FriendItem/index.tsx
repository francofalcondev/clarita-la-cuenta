import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ProgressBar } from "@/components";
import { Colors } from "@/constants/Colors";
import EditIcon from "@/assets/icons/EditIcon";
export const FriendItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require("@/assets/images/avatars/avatar-one.png")}
        />
        <Text style={styles.avatarText}>{`Andica (You)`}</Text>
      </View>

      <View style={styles.paymentContainer}>
        <Text style={styles.textPayment}>60.00 USD</Text>
        <TouchableOpacity>
          <EditIcon width={17} height={16} color={Colors.yellowGreen} />
        </TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar progress={60} color="#FFC73F" />
      </View>
    </View>
  );
};
