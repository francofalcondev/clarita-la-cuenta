import { Colors } from "@/constants/Colors";
import { hp, wp } from "@/utils/common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp(10),
  },
  imageOnboarding: {
    resizeMode: "contain",
    alignSelf: "center",
    height: hp(45),
    width: wp(100),
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp(10),
    width: wp(90),
  },

  textContainer: {
    width: wp(90),
    alignItems: "center",
  },

  title: {
    color: Colors.white,
    fontSize: hp(2.6),
    textAlign: "center",
  },

  textInfo: {
    fontSize: hp(1.7),
    textAlign: "center",
    color: Colors.grayText,
  },
});
