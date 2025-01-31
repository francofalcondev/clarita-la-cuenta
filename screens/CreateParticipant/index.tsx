import { NumericPad, ScreenWrapper } from "@/components";
import { Colors } from "@/constants/Colors";
import { HeaderCreateParticipant } from "./components";
import { CustomButton } from "@/components/ui";
import { View } from "react-native";
import { styles } from "./styles";
export const CreateParticipant = () => {
  return (
    <ScreenWrapper bg={Colors.white}>
      <HeaderCreateParticipant />
      <NumericPad />
      <View style={styles.buttonContainer}>
        <CustomButton theme="dark" title="GUARDAR CAMBIOS" />
      </View>
    </ScreenWrapper>
  );
};
