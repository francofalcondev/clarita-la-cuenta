import { StyleSheet } from "react-native";
import { hp, wp } from "@/utils/common";
import { Colors } from "@/constants/Colors";
Colors;

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
    fontFamily: "poppins-bold",
    fontSize: 23,
    textAlign: "center",
  },

  textInfo: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.grayText,
  },
});
