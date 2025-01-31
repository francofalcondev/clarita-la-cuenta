import { ScreenWrapper } from "@/components";
import { Colors } from "@/constants/Colors";
import { TotalBill, FriendsList } from "./components";
import { CustomButton } from "@/components/ui";
import { View } from "react-native";
import { styles } from "./styles";

export const Home = () => {
  return (
    <ScreenWrapper bg={Colors.white}>
      <TotalBill />
      <FriendsList />
      <View style={styles.footerContainer}>
        <CustomButton theme="dark" title="CALCULAR CUENTA" />
      </View>
    </ScreenWrapper>
  );
};
