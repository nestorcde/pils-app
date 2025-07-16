import React, { JSX } from 'react';
import { AppProvider } from './providers/AppProvider';
import { AppNavigator } from './navigation/AppNavigator';

export default function App(): JSX.Element {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}