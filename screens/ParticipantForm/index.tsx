import { NumericPad, ScreenWrapper } from "@/components";
import { Colors } from "@/constants/Colors";
import { ParticipantFormProps, ParticipantFormRouteProp } from "./types";
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
  const { initialValues, onSubmit } = route.params;
  const isEditing = !!initialValues;
  const { bill } = useBillContext();
  const [display, setDisplay] = useState<string>(initialValues?.payment ?? "");
  const [name, setName] = useState(initialValues?.name ?? "");
  const index = isEditing
    ? bill.participants.findIndex((p) => p.id === initialValues?.id)
    : bill.participants.length;

  const avatar = isEditing
    ? initialValues.avatar
    : getAvatarWithColor(index).avatar;

  const navigation = useNavigation();

  const handleSave = () => {
    const payment = parseFormattedNumber(display);
    onSubmit(name, payment);
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
