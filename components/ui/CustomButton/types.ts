import { TouchableOpacityProps } from "react-native";

export interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  theme: "dark" | "light";
}
