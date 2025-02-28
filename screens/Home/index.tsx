import { ScreenWrapper } from "@/components";
import { Colors } from "@/constants/Colors";
import { TotalBill, FriendsList, BillSummary, HeaderTab } from "./components";
import { CustomButton } from "@/components/ui";
import { View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export const Home = () => {
  const [showModalBillSummary, setShowModalBillSummary] =
    useState<boolean>(false);
  return (
    <ScreenWrapper bg={Colors.white}>
      <View style={styles.container}>
        <View style={styles.content}>
          <HeaderTab />
          <TotalBill />
          <FriendsList />
          <BillSummary
            showModalBillSummary={showModalBillSummary}
            setShowModalBillSummary={setShowModalBillSummary}
          />
        </View>

        <View style={styles.footerContainer}>
          <CustomButton
            theme="dark"
            title="CALCULAR CUENTA"
            onPress={() => setShowModalBillSummary(true)}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
