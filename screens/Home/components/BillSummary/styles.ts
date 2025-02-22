import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(0, 0, 0, 0.54)",
  },
  modalContainer: {
    width: "80%",

    backgroundColor: Colors.white,
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    borderBottomWidth: 1,
    height: 30,
    borderColor: Colors.softSlate,
  },

  closeButtonContainer: {
    marginTop: 45,
    borderColor: Colors.royalBlue,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1.5,
  },

  closeButtonText: {
    fontSize: 14,
    color: Colors.royalBlue,
    fontWeight: "bold",
  },
  containerButtons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    gap: 20,
  },
});
