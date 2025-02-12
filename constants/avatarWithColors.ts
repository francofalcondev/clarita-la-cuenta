import { ImageSourcePropType } from "react-native";

import AvatarOne from "@/assets/images/avatars/avatar-one.png";
import AvatarTwo from "@/assets/images/avatars/avatar-two.png";
import AvatarThree from "@/assets/images/avatars/avatar-three.png";
import AvatarFour from "@/assets/images/avatars/avatar-four.png";
import AvatarFive from "@/assets/images/avatars/avatar-five.png";
import AvatarSix from "@/assets/images/avatars/avatar-six.png";
import AvatarSeven from "@/assets/images/avatars/avatar-seven.png";
import AvatarEight from "@/assets/images/avatars/avatar-eight.png";
import AvatarNine from "@/assets/images/avatars/avatar-nine.png";
import AvatarTen from "@/assets/images/avatars/avatar-ten.png";

export interface AvatarConfig {
  color: string;
  avatar: ImageSourcePropType;
}

export const avatarWithColors: AvatarConfig[] = [
  {
    color: "#FFC73F",
    avatar: AvatarOne,
  },
  {
    color: "#6EC9FF",
    avatar: AvatarThree,
  },
  {
    color: "#58E97B",
    avatar: AvatarTwo,
  },
  {
    color: "#AE7EFE",
    avatar: AvatarFour,
  },
  {
    color: "#ff9800",
    avatar: AvatarFive,
  },
  {
    color: "#ff5757",
    avatar: AvatarSix,
  },
  {
    color: "#d2691e",
    avatar: AvatarSeven,
  },
  {
    color: "#5271ff",
    avatar: AvatarEight,
  },
  {
    color: "#00bf63",
    avatar: AvatarNine,
  },
  {
    color: "#ff3131",
    avatar: AvatarTen,
  },
];
