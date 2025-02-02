import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import { NumericPadProps } from "./types";
import DeleteIcon from "@/assets/icons/DeleteIcon";
export const NumericPad = ({ onChange, value }: NumericPadProps) => {
  const handlePress = (key: string) => {
    let newValue = value;

    if (key === "DEL") {
      newValue = value.slice(0, -1);
    } else if (key === "." && value.includes(".")) {
      return;
    } else {
      newValue = value + key;
    }

    onChange?.(newValue);
  };

  const keys: string[][] = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [".", "0", "DEL"],
  ];
  return (
    <View style={styles.container}>
      <View style={styles.padContainer}>
        {keys.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                style={[styles.button]}
                onPress={() => handlePress(key)}
              >
                {key === "DEL" ? (
                  <DeleteIcon color="black" />
                ) : (
                  <Text style={styles.buttonText}>{key}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
