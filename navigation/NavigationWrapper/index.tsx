import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "@/screens";
const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
