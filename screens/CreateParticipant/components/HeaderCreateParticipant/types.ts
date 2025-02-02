import { ImageSourcePropType } from "react-native";

export interface HeaderCreateParticipantProps {
  display: string;
  name: string;
  onChangeName: (text: string) => void;
  avatar: AvatarWithColor;
}
export interface AvatarWithColor {
  color: string;
  avatar: ImageSourcePropType;
}
