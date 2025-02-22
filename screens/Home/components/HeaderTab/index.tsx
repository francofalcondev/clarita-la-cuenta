import { TouchableOpacity, View } from "react-native";
import ReloadIcon from "@/assets/icons/ReloadIcon";
export const HeaderTab = () => {
  return (
    <View>
      <TouchableOpacity>
        <ReloadIcon />
      </TouchableOpacity>
    </View>
  );
};
