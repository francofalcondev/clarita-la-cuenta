import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ProgressBar } from "@/components";
import { Colors } from "@/constants/Colors";
import EditIcon from "@/assets/icons/EditIcon";
import { FriendItemProps } from "./types";
import { formatNumber } from "@/utils/formatNumbers";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/rootStackParams";

export const FriendItem = ({ participant, totalAmount }: FriendItemProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigate = () => {
    navigation.navigate("ParticipantForm", {
      initialValues: {
        ...participant,
        payment: participant.payment.toString(), // Convertir payment a string
      },
      onSubmit: (name: string, payment: number) => {
        console.log("Nombre:", name);
        console.log("Pago:", payment);
      },
    });
  };

  const progress =
    totalAmount > 0 ? Math.round((participant.payment / totalAmount) * 100) : 0;
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={participant.avatar} />
        <Text style={styles.avatarText}>{participant.name}</Text>
      </View>

      <View style={styles.paymentContainer}>
        <Text
          style={styles.textPayment}
        >{`${formatNumber(participant.payment)} ARS`}</Text>
        <TouchableOpacity onPress={handleNavigate}>
          <EditIcon width={17} height={16} color={Colors.yellowGreen} />
        </TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar progress={progress} color={participant.color} />
      </View>
    </View>
  );
};
