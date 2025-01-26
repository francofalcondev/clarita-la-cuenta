import { ScreenWrapper } from "@/components";
import { Colors } from "@/constants/Colors";
import { TotalBill, FriendsList } from "./components";

export const Home = () => {
  return (
    <ScreenWrapper bg={Colors.white}>
      <TotalBill />
      <FriendsList />
    </ScreenWrapper>
  );
};
