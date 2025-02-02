import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import EquisBoxIcon from "@/assets/icons/EquisBoxIcon";
import { Colors } from "@/constants/Colors";
import { styles } from "./styles";
import { HeaderCreateParticipantProps } from "./types";
import { useNavigation } from "@react-navigation/native";
export const HeaderCreateParticipant = ({
  display,
  name,
  avatar,
  onChangeName,
}: HeaderCreateParticipantProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <Text>Agregar Participante</Text>
        <TouchableOpacity>
          <EquisBoxIcon
            color={Colors.grayText}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.avatarInputContainer}>
        <TextInput
          value={name}
          style={styles.textAvatar}
          onChangeText={onChangeName}
          placeholder="Nombre del Participante"
        />
        <Image style={styles.avatar} source={avatar.avatar} />
        <Text style={styles.spamAmount}>Insetar el monto</Text>
        <TextInput
          value={display}
          style={styles.inputAmount}
          keyboardType="numeric"
          caretHidden
          placeholder="0"
        />
      </View>
    </View>
  );
};
