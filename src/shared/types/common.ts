
export interface BaseProps {
  style?: any;
  testID?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  onPress: () => void;
  disabled?: boolean;
}