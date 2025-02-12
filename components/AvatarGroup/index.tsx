import { View, Image } from "react-native";
import { AvatarGroupProps } from "./types";
import { styles } from "./styles";

export const AvatarGroup = ({ avatarUrls }: AvatarGroupProps) => {
  const avatarSize = 43;
  const defaultAvatar = require("@/assets/images/avatars/avatar-default.png");

  const avatarsToShow = [
    ...avatarUrls.slice(0, 4),
    ...Array(Math.max(0, 4 - avatarUrls.length)).fill(null),
  ];

  return (
    <View style={styles.avatarWrapper}>
      {avatarsToShow.map((url, index) => (
        <Image
          key={index}
          source={url ? { uri: url } : defaultAvatar}
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
