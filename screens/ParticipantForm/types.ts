import { ImageSourcePropType } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/types/rootStackParams";

export type Participant = {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
  color: string;
  payment: string;
};

export interface ParticipantFormProps {
  initialValues?: Participant;
  onSubmit: (name: string, payment: number) => void;
}

export type ParticipantFormRouteProp = RouteProp<
  RootStackParamList,
  "ParticipantForm"
>;
