import { avatarWithColors } from "@/constants/avatarWithColors";

export const getRandomAvatarAndColor = () => {
  const randomIndex = Math.floor(Math.random() * avatarWithColors.length);
  return avatarWithColors[randomIndex];
};
