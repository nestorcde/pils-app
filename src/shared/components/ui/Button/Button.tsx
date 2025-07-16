import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
  title,
  disabled = false,
  variant = 'primary',
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.buttonDisabled,
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};