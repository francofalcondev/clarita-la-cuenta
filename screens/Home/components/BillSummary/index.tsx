import { Modal, View, Text, TouchableOpacity, Share } from "react-native";
import { BillSummaryProps } from "./types";
import { styles } from "./styles";
import { useBillContext } from "@/context";
import ConfettiCannon from "react-native-confetti-cannon";

export const BillSummary = ({
  showModalBillSummary,
  setShowModalBillSummary,
}: BillSummaryProps) => {
  const { bill, generateBillText } = useBillContext();
  const billText = generateBillText(bill);

  const handleShare = async () => {
    try {
      await Share.share({
        message: billText,
      });
    } catch (error) {
      console.error("Error al compartir: ", error);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModalBillSummary}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>✨ Resumen de la cuenta ✨</Text>
          <Text>{billText}</Text>
          <View style={styles.containerButtons}>
            <TouchableOpacity
              style={styles.closeButtonContainer}
              onPress={() => setShowModalBillSummary(false)}
            >
              <Text style={styles.closeButtonText}>Volver atrás</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButtonContainer}
              onPress={handleShare}
            >
              <Text style={styles.closeButtonText}>Compartir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ConfettiCannon
        count={200}
        explosionSpeed={100}
        fallSpeed={2400}
        origin={{ x: 200, y: 0 }}
        fadeOut
      />
    </Modal>
  );
};
