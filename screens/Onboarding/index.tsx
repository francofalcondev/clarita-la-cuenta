import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { CustomButton } from "@/components/ui";
import { hp } from "@/utils/common";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "./types";

export const Onboarding = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleStart = () => {
    navigation.navigate("OnboardingStepTwo");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageOnboarding}
        source={require("@/assets/images/handshake.png")}
      />

      <View style={styles.content}>
        <Text style={styles.title}>¡Bienvenido a ✨ Clarita la cuenta! ✨</Text>
        <Text style={styles.textInfo}>
          Divide los gastos de tus reuniones con amigos de manera simple y
          clara. Sin complicaciones, solo diversión. 🎉{" "}
        </Text>
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
