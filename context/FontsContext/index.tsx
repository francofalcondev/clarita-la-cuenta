import { createContext, useContext, useEffect, useState } from "react";
import * as Font from "expo-font";
import { FontsContextProps } from "./types";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const FontsContext = createContext({});

export const FontsProvider = ({ children }: FontsContextProps) => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "open-sans-regular": require("@/assets/fonts/open-sans-regular.ttf"),
        "open-sans-bold": require("@/assets/fonts/open-sans-bold.ttf"),
        "poppins-bold": require("@/assets/fonts/Poppins-Bold.ttf"),
        "poppins-regular": require("@/assets/fonts/Poppins-Medium.ttf"),
      });
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FontsContext.Provider value={fontsLoaded}>
      {children}
    </FontsContext.Provider>
  );
};

export const useFontsContext = () => {
  const context = useContext(FontsContext);
  return context;
};
