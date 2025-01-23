import { Text, TouchableOpacity } from "react-native";
import { CustomButtonProps } from "./types";
export const CustomButton = ({
  title,
  textStyle,
  containerStyle,
  style,
  ...rest
}: CustomButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
