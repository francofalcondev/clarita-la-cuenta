import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Onboarding: undefined;
  CreateParticipant: undefined;
  OnboardingStepTwo: undefined;
  ParticipantForm: {
    initialValues?: {
      id: string;
      name: string;
      payment: string;
      avatar: ImageSourcePropType;
    };
  };
};
