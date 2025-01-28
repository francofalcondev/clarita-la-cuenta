import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10,
    borderRadius: 6,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    backgroundColor: Colors.white,
    width: "100%",
    borderColor: Colors.softSlate,
    borderWidth: 0,
    borderTopWidth: 1,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  progressText: {
    color: "black",
    fontWeight: "bold",
    paddingRight: 8,
    fontSize: 12,
  },
});
