import { Image, ImageSourcePropType } from "react-native";

export const getAvatarUrl = (avatar: ImageSourcePropType) => {
  if (typeof avatar === "number") {
    return Image.resolveAssetSource(avatar).uri;
  }
  return avatar;
};
