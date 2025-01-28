import { View, Text } from "react-native";
import { ProgressBarProps } from "./types";
import { styles } from "./styles";

export const ProgressBar = ({ color, progress }: ProgressBarProps) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.progressBar,
          {
            backgroundColor: color,
            width: `${clampedProgress}%`,
          },
        ]}
      >
        <Text style={styles.progressText}>
          {`${Math.round(clampedProgress)}%`}
        </Text>
      </View>
    </View>
  );
};
