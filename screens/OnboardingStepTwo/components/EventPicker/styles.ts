import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { alignItems: "center", marginVertical: 10 },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.softSlate,
  },
  selectedChip: { backgroundColor: Colors.royalBlue },
  chipText: { fontSize: 14, color: "#333", marginLeft: 5 },
  selectedText: { color: "#fff" },
});
