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

  containerListFooter: {
    height: 20,
  },

  containerStyle: {
    paddingBottom: 10,
  },

  separator: {
    height: 1,
    marginVertical: 13,
  },

  AddButtonContainer: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 12,
  },
  AddButtonText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
