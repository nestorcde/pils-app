

import React, { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './ThemeProvider';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SafeAreaProvider>
  );
};