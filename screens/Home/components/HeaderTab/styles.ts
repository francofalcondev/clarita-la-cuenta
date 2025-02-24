import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 9999,
    borderColor: Colors.softSlate,
    borderWidth: 2,
    padding: 9,
  },
  container: {
    paddingHorizontal: 14,

    flexDirection: "row",
    alignItems: "center",
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontWeight: "700",
  },
});
