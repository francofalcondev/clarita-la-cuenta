import { Colors } from "@/constants/Colors";
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
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 5,
  },

  content: {
    flexGrow: 1,
    top: "60%",
    width: "100%",
    backgroundColor: Colors.white,
    paddingHorizontal: 14,
  },

  buttonContainer: {
    justifyContent: "flex-end",
    paddingHorizontal: 14,
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.royalBlue,
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "poppins-bold",
  },

  spanTitle: {
    color: Colors.yellowAvatar,
    fontWeight: "bold",
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.yellowLight,
    justifyContent: "center",
    alignItems: "center",
  },
  textInfo: {
    fontSize: 15,
    textAlign: "center",
    color: Colors.grayText,
  },
  benefitsContainer: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: "100%",
    paddingHorizontal: 10,
  },
  benefitText: {
    fontFamily: "poppins-regular",
    marginLeft: 10,
    fontSize: 13,
    color: Colors.grayText,
    flexShrink: 1,
    textAlign: "left",
    fontWeight: "500",
  },
});
