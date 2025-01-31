import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },

  padContainer: {
    backgroundColor: Colors.paleSilver,
    padding: 8,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    padding: 5,
  },
  button: {
    width: 100, // 🔹 Botones más anchos
    height: 73,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // 🔹 Fondo blanco
    margin: 5,
    borderRadius: 5,
    shadowColor: "#000", // 🔹 Sombra ligera para profundidad
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2, // 🔹 Sombra en Android
  },
  buttonText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000", // 🔹 Números en negro
  },
});
