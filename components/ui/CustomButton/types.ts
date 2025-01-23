import { TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  textStyle: TextStyle;
  containerStyle: ViewStyle;
}
