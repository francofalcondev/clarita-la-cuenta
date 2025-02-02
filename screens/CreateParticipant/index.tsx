import { NumericPad, ScreenWrapper } from "@/components";
import { Colors } from "@/constants/Colors";
import { HeaderCreateParticipant } from "./components";
import { CustomButton } from "@/components/ui";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { getRandomAvatarAndColor } from "@/utils/randomUtils";
import { useNavigation } from "@react-navigation/native";
import { useBillContext } from "@/context";
export const CreateParticipant = () => {
  const { addParticipant, bills } = useBillContext();
  const navigation = useNavigation();
  const billId = "124-s";
  const [display, setDisplay] = useState<string>("");
  const [avatar, setAvatar] = useState(getRandomAvatarAndColor());
  const [name, setName] = useState("");
  const currentBill = bills.find((bill) => bill.id === billId);
  const usedAvatars = currentBill?.participants.map(
    (participant) => participant.avatar,
  );

  useEffect(() => {
    let randomAvatar = getRandomAvatarAndColor();
    while (usedAvatars?.includes(randomAvatar.avatar)) {
      randomAvatar = getRandomAvatarAndColor();
    }
    setAvatar(randomAvatar);
  }, [usedAvatars]);

  const handleSave = () => {
    const payment = parseFloat(display) || 0;

    addParticipant("124-s", name, payment, avatar.avatar, avatar.color);
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
