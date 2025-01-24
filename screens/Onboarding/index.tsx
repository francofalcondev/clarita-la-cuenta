import { Image, Text, View } from "react-native";
import { ScreenWrapper } from "@/components";
import { styles } from "./styles";
export const Onboarding = () => {
  return (
    <View style={styles.containerImage}>
      <Image
        style={styles.imageOnboarding}
        source={require("@/assets/images/onboardingImage.jpg")}
      />
      <View>
        <Text>adsasdadsdasdadsadsasddasdsadsadadsads</Text>
      </View>
    </View>
  );
};
