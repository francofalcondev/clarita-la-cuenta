import { Image, Text, View } from "react-native";
import { ScreenWrapper } from "@/components";
import { styles } from "./styles";
import { Colors } from "@/constants/Colors";
import { CustomButton } from "@/components/ui";
import { hp } from "@/utils/common";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "./types";

export const Onboarding = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleStart = () => {
    navigation.navigate("Home");
  };

  return (
    <ScreenWrapper bg={Colors.royalBlue}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageOnboarding}
            source={require("@/assets/images/onboarding.png")}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>¡Bienvenido a Clarita la cuenta!</Text>
          <Text style={styles.textInfo}>
            Divide los gastos de tus reuniones con amigos de manera simple y
            clara. Sin complicaciones, solo diversión. 🎉{" "}
          </Text>
          <CustomButton
            onPress={handleStart}
            title="¡COMENCEMOS!"
            theme="light"
            style={{ marginVertical: hp(3) }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
