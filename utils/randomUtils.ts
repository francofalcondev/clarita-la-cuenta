import { avatarWithColors } from "@/constants/avatarWithColors";

export const getAvatarWithColor = (index: number) => {
  const avatarIndex = index % avatarWithColors.length;
  return avatarWithColors[avatarIndex];
};
