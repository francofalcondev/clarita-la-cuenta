import { avatarWithColors } from "@/constants/avatarWithColors";

export const getAvatarWithColor = (index: number) => {
  return avatarWithColors[index % avatarWithColors.length];
};
