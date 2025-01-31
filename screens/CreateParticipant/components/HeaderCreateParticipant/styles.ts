import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "40%",
    paddingHorizontal: 14,
  },

  headerInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  avatarInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,

    marginTop: 16,
    borderBottomWidth: 2,
    borderColor: Colors.yellowGreen,
  },

  textAvatar: {
    fontSize: 21,
    marginBottom: 10,
    fontWeight: "bold",
  },

  inputAmount: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0,
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 5,
    marginBottom: 15,
  },
  spamAmount: {
    color: Colors.grayText,
  },
});
