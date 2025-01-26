import { View, Image } from "react-native";
import { AvatarGroupProps } from "./types";
import { styles } from "./styles";

export const AvatarGroup = ({ avatarUrls }: AvatarGroupProps) => {
  const avatarSize = 43;

  return (
    <View style={styles.avatarWrapper}>
      {avatarUrls.slice(0, 4).map((url, index) => (
        <Image
          key={index}
          source={{ uri: url }}
          style={[
            styles.avatar,
            {
              width: avatarSize,
              height: avatarSize,
              marginLeft: index === 0 ? 0 : -(avatarSize / 4),
            },
          ]}
        />
      ))}
    </View>
  );
};
