import { ImageSourcePropType } from "react-native";

export interface HeaderCreateParticipantProps {
  display: string;
  name: string;
  isEditing: boolean;
  onChangeName: (text: string) => void;
  avatar: ImageSourcePropType;
}
