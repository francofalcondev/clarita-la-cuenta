import { NumericPad, ScreenWrapper } from "@/components";
import { Colors } from "@/constants/Colors";
import { ParticipantFormRouteProp } from "./types";
import { useState } from "react";
import { getAvatarWithColor } from "@/utils/randomUtils";
import { useBillContext } from "@/context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { parseFormattedNumber } from "@/utils/formatNumbers";
import { View, ScrollView } from "react-native";
import { CustomButton } from "@/components/ui";
import { styles } from "./styles";
import { HeaderCreateParticipant } from "./components";

export const ParticipantForm = () => {
  const route = useRoute<ParticipantFormRouteProp>();
  const { initialValues } = route.params;
  const { bill, addParticipant, updateParticipant } = useBillContext();
  const isEditing = !!initialValues;
  const navigation = useNavigation();
  const [display, setDisplay] = useState<string>(initialValues?.payment ?? "");
  const [name, setName] = useState(initialValues?.name ?? "");
  const index = isEditing
    ? bill.participants.findIndex((p) => p.id === initialValues?.id)
    : bill.participants.length;

  const avatar = isEditing
    ? initialValues.avatar
    : getAvatarWithColor(index).avatar;

  const handleSave = () => {
    const payment = parseFormattedNumber(display);
    if (initialValues?.id) {
      updateParticipant(initialValues.id, name, payment);
    } else {
      addParticipant(name, payment);
    }
    navigation.goBack();
  };

  return (
    <ScreenWrapper bg={Colors.white}>
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-around",
          }}
        >
          <HeaderCreateParticipant
            display={display}
            name={name}
            isEditing={isEditing}
            onChangeName={setName}
            avatar={avatar}
          />
          <NumericPad onChange={setDisplay} value={display} />
          <View style={styles.buttonContainer}>
            <CustomButton
              theme="dark"
              title="GUARDAR CAMBIOS"
              disabled={!display || !name.trim()}
              onPress={handleSave}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};
