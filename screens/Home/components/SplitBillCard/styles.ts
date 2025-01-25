import { Colors } from "@/constants/Colors";
import { wp } from "@/utils/common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    width: wp(70),
    borderRadius: 10,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.paleSilver,
    borderBottomWidth: 2,
  },

  headerAmount: {
    color: Colors.blackText,
    fontWeight: "bold",
    fontSize: 18,
  },
});
