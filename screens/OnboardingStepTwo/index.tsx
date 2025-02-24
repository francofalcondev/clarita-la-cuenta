import { CustomButton } from "@/components/ui";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { hp } from "@/utils/common";
import { NavigationProps } from "./types";
import { EventPicker } from "./components";
import { useBillContext } from "@/context";
import { EventOption } from "./components/EventPicker/types";

export const OnboardingStepTwo = () => {
  const navigation = useNavigation<NavigationProps>();
  const { addBill } = useBillContext();
  const handleStart = () => {
    navigation.navigate("Home");
  };
  const handleEventSelect = (event: EventOption) => {
    console.log(event);
    addBill(event);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageOnboarding}
        source={require("@/assets/images/party.png")}
      />

      <View style={styles.content}>
        <Text style={styles.title}>¿Cómo llamamos este gasto?</Text>
        <Text style={styles.textInfo}>
          Elige un nombre para identificar esta cuenta compartida.{" "}
        </Text>
        <EventPicker onSelect={handleEventSelect} />
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={handleStart}
            title="¡COMENCEMOS!"
            theme="dark"
            style={{ marginVertical: hp(3) }}
          />
        </View>
      </View>
    </View>
  );
};
