import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  friendsContainer: {
    backgroundColor: Colors.paleSilver,
    width: "100%",
    height: "72%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  separator: {
    height: 1,
    marginVertical: 13,
  },

  AddButtonContainer: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  AddButtonText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
