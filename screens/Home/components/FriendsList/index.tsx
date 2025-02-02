import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { FriendItem } from "./components";
import { useBillContext } from "@/context/BillContext";
import AddIcon from "@/assets/icons/AddIcon";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "./types";
export const FriendsList = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleStart = () => {
    navigation.navigate("CreateParticipant");
  };

  const { bills } = useBillContext();
  const participants = bills.length > 0 ? bills[0].participants : [];
  return (
    <View style={styles.friendsContainer}>
      <FlatList
        data={participants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FriendItem participant={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <TouchableOpacity style={styles.AddButtonContainer} onPress={handleStart}>
        <AddIcon color={Colors.royalBlue} />
        <Text style={styles.AddButtonText}>Agregar Participante</Text>
      </TouchableOpacity>
    </View>
  );
};
