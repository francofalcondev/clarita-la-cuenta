import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 14,
    position: "relative",
    backgroundColor: Colors.white,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  avatarContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },

  avatarText: {
    paddingTop: 8,
    fontSize: 13,
  },

  avatar: {
    width: 55,
    height: 50,
    borderRadius: 3,
  },

  paymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  textPayment: {
    fontSize: 14,
    fontWeight: 700,
  },
  progressContainer: {
    position: "absolute",
    bottom: -8,
    left: 0,
    right: 0,
    height: 16,
    zIndex: 9999,
  },
});
