import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationWrapper } from "@/navigation";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationWrapper />
    </SafeAreaProvider>
  );
}
registerRootComponent(App);
