import { Text, TouchableOpacity, View } from "react-native";
import ReloadIcon from "@/assets/icons/ReloadIcon";
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";

export const HeaderTab = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <ReloadIcon width={25} height={25} color={Colors.royalBlue} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Detalles de la cuenta</Text>
      </View>
    </View>
  );
};
