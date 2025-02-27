import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { CustomButton } from "@/components/ui";
import { hp } from "@/utils/common";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "./types";
import ClockIcon from "@/assets/icons/ClockIcon";
import ShieldCheckIcon from "@/assets/icons/ShieldCheckIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
import { Colors } from "@/constants/Colors";

export const Onboarding = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleStart = () => {
    navigation.navigate("OnboardingStepTwo");
  };

  const benefitsData = [
    {
      icon: <ClockIcon width={25} height={25} color={Colors.yellowAvatar} />,
      description:
        "Ahorra tiempo organizando los gastos fácilmente, para que disfrutes más con tus amigos.",
    },
    {
      icon: (
        <ShieldCheckIcon width={25} height={25} color={Colors.yellowAvatar} />
      ),
      description:
        "Transparencia y seguridad para evitar peleas y conservar la amistad.",
    },
    {
      icon: <ShareIcon width={25} height={25} color={Colors.yellowAvatar} />,
      description:
        "Envía los resultados por WhatsApp o cualquier app de mensajería.",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          style={styles.imageOnboarding}
          source={require("@/assets/images/handshake.png")}
        />

        <View style={styles.content}>
          <Text style={styles.title}>¡Bienvenido!✨</Text>
          <Text style={styles.textInfo}>
            <Text style={styles.spanTitle}>Clarita la Cuenta </Text>
            te ayuda a dividir los gastos de tus reuniones con amigos de manera
            simple y clara.
          </Text>

          <View style={styles.benefitsContainer}>
            {benefitsData.map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <View style={styles.iconContainer}>{benefit.icon}</View>
                <Text style={styles.benefitText}>{benefit.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={handleStart}
          title="¡COMENCEMOS!"
          theme="dark"
          style={{ marginVertical: hp(3) }}
        />
      </View>
    </View>
  );
};
