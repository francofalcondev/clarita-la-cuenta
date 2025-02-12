import { ImageSourcePropType } from "react-native";

export interface HeaderCreateParticipantProps {
  display: string;
  name: string;
  onChangeName: (text: string) => void;
  avatar: ImageSourcePropType;
}
