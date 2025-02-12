import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ProgressBar } from "@/components";
import { Colors } from "@/constants/Colors";
import EditIcon from "@/assets/icons/EditIcon";
import { FriendItemProps } from "./types";
import { formatNumber } from "@/utils/formatNumbers";

export const FriendItem = ({ participant }: FriendItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={participant.avatar} />
        <Text style={styles.avatarText}>{participant.name}</Text>
      </View>

      <View style={styles.paymentContainer}>
        <Text
          style={styles.textPayment}
        >{`${formatNumber(participant.payment)} ARS`}</Text>
        <TouchableOpacity>
          <EditIcon width={17} height={16} color={Colors.yellowGreen} />
        </TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar progress={60} color={participant.color} />
      </View>
    </View>
  );
};
