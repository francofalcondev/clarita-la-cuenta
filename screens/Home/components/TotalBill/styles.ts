import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  totalBillCardContainer: {
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingBottom: 20,

    elevation: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: Colors.softSlate,
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 800,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
  },

  amount: {
    marginTop: 7,
    fontSize: 23,
    fontWeight: 800,
  },

  amountTitle: {
    color: Colors.grayText,
    fontSize: 13,
  },
});
