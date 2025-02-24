import { EVENT_OPTIONS } from "@/constants";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { EventPickerProps, EventOption } from "./types";
export const EventPicker = ({ onSelect }: EventPickerProps) => {
  const [selectedEvent, setSelectedEvent] = useState<EventOption | null>(null);

  const handleSelect = (event: EventOption) => {
    setSelectedEvent(event);
    onSelect(event);
  };
  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        {EVENT_OPTIONS.map((event) => (
          <TouchableOpacity
            key={event.label}
            style={[
              styles.chip,
              selectedEvent?.label === event.label && styles.selectedChip,
            ]}
            onPress={() => handleSelect(event)}
          >
            <Text
              style={[
                styles.chipText,
                selectedEvent?.label === event.label && styles.selectedText,
              ]}
            >
              {event.emoji} {event.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
