import { NumericPad, ScreenWrapper } from "@/components";
import { Colors } from "@/constants/Colors";
import { HeaderCreateParticipant } from "./components";
import { CustomButton } from "@/components/ui";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useBillContext } from "@/context";
import { parseFormattedNumber } from "@/utils/formatNumbers";
import { getAvatarWithColor } from "@/utils/randomUtils";

export const CreateParticipant = () => {
  const { addParticipant, bills } = useBillContext();
  const navigation = useNavigation();
  const billId = "124ss";
  const [display, setDisplay] = useState<string>("");
  const [name, setName] = useState("");
  const currentBill = bills.find((bill) => bill.id === billId);
  const participantCount = currentBill?.participants?.length ?? 0;
  const { avatar, color } = getAvatarWithColor(participantCount);
  const handleSave = () => {
    const payment = parseFormattedNumber(display);
    addParticipant("124ss", name, payment, avatar, color);
    navigation.goBack();
  };
  return (
    <ScreenWrapper bg={Colors.white}>
      <ScrollView keyboardShouldPersistTaps="handled">
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
            disabled={!display}
            onPress={handleSave}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
