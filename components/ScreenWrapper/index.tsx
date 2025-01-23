import { View } from "react-native";
import { ScreenWrapperProps } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ScreenWrapper = ({ children, bg }: ScreenWrapperProps) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;
  return (
    <View style={{ flex: 1, paddingTop, backgroundColor: bg }}>{children}</View>
  );
};
