import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationWrapper } from "@/navigation";
import { BillProvider } from "./context";
import ErrorBoundary from "react-native-error-boundary";
function App() {
  return (
    <ErrorBoundary
      onError={(error, stackTrace) => {
        console.error("🚨 Error capturado por ErrorBoundary:", error);
        console.error("📜 Stack trace:", stackTrace);
      }}
    >
      <SafeAreaProvider>
        <BillProvider>
          <NavigationWrapper />
        </BillProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
registerRootComponent(App);
