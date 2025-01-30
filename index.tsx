import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationWrapper } from "@/navigation";
import { BillProvider } from "./context";

function App() {
  return (
    <SafeAreaProvider>
      <BillProvider>
        <NavigationWrapper />
      </BillProvider>
    </SafeAreaProvider>
  );
}
registerRootComponent(App);
