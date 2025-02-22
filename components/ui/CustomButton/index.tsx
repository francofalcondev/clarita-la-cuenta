import { Text, TouchableOpacity } from "react-native";
import { CustomButtonProps } from "./types";
import { Colors } from "@/constants/Colors";

export const CustomButton = ({
  title,
  theme,
  style,
  disabled,
  ...rest
}: CustomButtonProps) => {
  const themeColors = {
    light: {
      backgroundColor: Colors.yellowAvatar,
      textColor: Colors.royalBlue,
      shadowColor: "rgba(255, 204, 0, 0.6)",
      shadowOpacity: 0.4,
    },
    dark: {
      backgroundColor: Colors.royalBlue,
      textColor: Colors.white,
      shadowColor: "rgba(0, 0, 0, 0.3)",
      shadowOpacity: 0.2,
    },
  };

  const currentTheme = themeColors[theme];

  return (
    <TouchableOpacity
      disabled={disabled}
      {...rest}
      style={[
        {
          width: "100%",
          paddingVertical: 15,
          paddingHorizontal: 16,
          borderRadius: 5,
          backgroundColor: currentTheme.backgroundColor,
          alignItems: "center",
          shadowColor: currentTheme.shadowColor,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: currentTheme.shadowOpacity,
          shadowRadius: theme === "light" ? 6 : 3.84,
          elevation: 5,
          borderColor: theme === "light" ? "rgba(255, 204, 0, 0.3)" : "#444444",
          borderWidth: 1,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      <Text
        style={[
          {
            color: currentTheme.textColor,
            fontSize: 16,
            fontWeight: "900",
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
