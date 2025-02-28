import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { FriendItem } from "./components";
import { useBillContext } from "@/context/BillContext";
import AddIcon from "@/assets/icons/AddIcon";
import { Colors } from "@/constants/Colors";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/types/rootStackParams";

export const FriendsList = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigate = () => {
    navigation.navigate("ParticipantForm", {
      initialValues: undefined,
    });
  };

  const { bill } = useBillContext();
  const participants = bill.participants;
  return (
    <View style={styles.friendsContainer}>
      <FlatList
        data={participants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FriendItem participant={item} totalAmount={bill.amount} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.containerStyle}
        ListFooterComponent={<View style={styles.containerListFooter} />}
      />
      <TouchableOpacity
        style={styles.AddButtonContainer}
        onPress={handleNavigate}
      >
        <AddIcon color={Colors.royalBlue} />
        <Text style={styles.AddButtonText}>Agregar Participante</Text>
      </TouchableOpacity>
    </View>
  );
};
