import { Colors } from "@/constants/Colors";
import { hp, wp } from "@/utils/common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  imageOnboarding: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  content: {
    position: "absolute",
    flex: 1,
    bottom: 0,
    top: "60%",
    width: "100%",
    backgroundColor: Colors.white,
    paddingHorizontal: 14,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    color: Colors.royalBlue,
    fontSize: hp(2.6),
    textAlign: "center",
  },

  textInfo: {
    fontSize: hp(1.7),
    textAlign: "center",
    color: Colors.grayText,
  },
});
