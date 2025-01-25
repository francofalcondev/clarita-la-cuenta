import { ScreenWrapper } from "@/components";
import { Colors } from "@/constants/Colors";
import { FlatList, Text, View } from "react-native";
import { SplitBillCard } from "./components";
import { useState } from "react";
import { styles } from "./styles";

export const Home = () => {
  const [items, setItems] = useState([
    { id: "1", name: "Cena en restaurante", total: 100, members: 4 },
    { id: "2", name: "Café y pastel", total: 20, members: 2 },
    { id: "3", name: "Renta de casa", total: 500, members: 5 },
  ]);
  return (
    <ScreenWrapper bg={Colors.white}>
      <View style={styles.container}>
        <Text>Historial de cuentas</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={() => <SplitBillCard />}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
    </ScreenWrapper>
  );
};
