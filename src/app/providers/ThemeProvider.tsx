

import React, { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <>
      <StatusBar style="auto" />
      {children}
    </>
  );
};