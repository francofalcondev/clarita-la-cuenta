export interface EventPickerProps {
  onSelect: (event: EventOption) => void;
}

export interface EventOption {
  label: string;
  emoji: string;
}
