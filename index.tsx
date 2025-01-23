import { Text } from "react-native";
import { registerRootComponent } from "expo";
import { ScreenWrapper } from "@/components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";

const Stack = createStaticNavigation();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer></NavigationContainer>
    </SafeAreaProvider>
  );
}
registerRootComponent(App);
