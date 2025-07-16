import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './ModuleCard.styles';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: string;
  onPress: () => void;
  disabled?: boolean;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, disabled && styles.cardDisabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );
};