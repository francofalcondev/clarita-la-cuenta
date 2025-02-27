import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import EquisBoxIcon from "@/assets/icons/EquisBoxIcon";
import { Colors } from "@/constants/Colors";
import { styles } from "./styles";
import { HeaderCreateParticipantProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import React from "react";
export const HeaderCreateParticipant = React.memo(
  ({ display, name, avatar, onChangeName }: HeaderCreateParticipantProps) => {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <View style={styles.headerInfo}>
          <Text style={styles.smallText}>Agregar Participante</Text>
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
          <Image style={styles.avatar} source={avatar} />
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
  },
);

HeaderCreateParticipant.displayName = "HeaderCreateParticipant";
export default HeaderCreateParticipant;
