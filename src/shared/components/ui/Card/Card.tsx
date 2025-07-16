import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './Card.styles';

interface CardProps extends ViewProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};