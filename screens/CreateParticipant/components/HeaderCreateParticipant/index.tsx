import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import EquisBoxIcon from "@/assets/icons/EquisBoxIcon";
import { Colors } from "@/constants/Colors";
import { styles } from "./styles";

export const HeaderCreateParticipant = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <Text>Agregar Participante</Text>
        <TouchableOpacity>
          <EquisBoxIcon color={Colors.grayText} />
        </TouchableOpacity>
      </View>
      <View style={styles.avatarInputContainer}>
        <Text style={styles.textAvatar}>{`Andika (You)`}</Text>
        <Image
          style={styles.avatar}
          source={require("@/assets/images/avatars/avatar-one.png")}
        />
        <Text style={styles.spamAmount}>Insetar el monto</Text>
        <TextInput
          style={styles.inputAmount}
          keyboardType="numeric"
          caretHidden
          placeholder="0"
        />
      </View>
    </View>
  );
};
