import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageOnboarding: {
    width: width,
    height: height,
    resizeMode: "cover",
  },
});
