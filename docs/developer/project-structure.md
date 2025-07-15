# Project Structure

## Overview
This document provides an overview of the Pils App project structure and key files.

## Root Directory Structure
```
pils-app/
├── assets/                 # Static assets (images, icons)
├── docs/                   # Documentation
│   └── developer/         # Developer documentation
├── node_modules/          # Dependencies (auto-generated)
├── App.tsx               # Main application component
├── app.json              # Expo configuration
├── index.ts              # Application entry point
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── yarn.lock             # Dependency lock file
```

## Key Files

### `App.tsx`
- **Purpose**: Main application component
- **Current Implementation**: Simple "Hello World" with Pils branding
- **Key Features**:
  - Uses React Native Paper for UI components
  - Implements SafeAreaView for proper screen rendering
  - Custom styling with beige color scheme (#dabfa4ff)
  - Appbar with centered title

### `index.ts`
- **Purpose**: Application entry point
- **Function**: Registers the main App component with Expo
- **Key Import**: `registerRootComponent` from Expo

### `app.json`
- **Purpose**: Expo configuration file
- **Key Settings**:
  - App name and slug: "pils-app"
  - Version: 1.0.0
  - Orientation: Portrait only
  - New Architecture enabled
  - Platform-specific configurations for iOS, Android, and Web

### `package.json`
- **Purpose**: Project dependencies and scripts
- **Key Dependencies**:
  - React Native 0.79.5
  - React 19.0.0
  - Expo SDK ~53.0.17
  - React Navigation for navigation
  - React Native Paper for UI components
  - React Native Vector Icons for icons
- **Available Scripts**:
  - `start`: Launch Expo development server
  - `android`: Run on Android
  - `ios`: Run on iOS
  - `web`: Run in web browser

### `tsconfig.json`
- **Purpose**: TypeScript configuration
- **Configuration**: Extends Expo's base TypeScript config with strict mode enabled

## Assets Directory
```
assets/
├── adaptive-icon.png    # Android adaptive icon
├── favicon.png         # Web favicon
├── icon.png           # App icon
└── splash-icon.png    # Splash screen icon
```

## Dependencies Overview

### Core Dependencies
- **expo**: Expo SDK for React Native development
- **react**: React library
- **react-native**: React Native framework

### UI Libraries
- **react-native-paper**: Material Design components
- **react-native-elements**: Additional UI components
- **react-native-vector-icons**: Icon library

### Navigation
- **@react-navigation/native**: Core navigation library
- **@react-navigation/stack**: Stack navigation
- **@react-navigation/bottom-tabs**: Bottom tab navigation

### Development
- **typescript**: TypeScript support
- **@babel/core**: Babel transpiler
- **@types/react**: TypeScript definitions for React

## Development Notes

### Current State
- Basic app structure with single screen
- Material Design theming via React Native Paper
- TypeScript enabled with strict mode
- Ready for expansion with navigation and additional features

### Architecture Considerations
- Component-based architecture using React Native
- Material Design principles via React Native Paper
- TypeScript for type safety
- Expo managed workflow for easy development and deployment

### Future Expansion Areas
- Add screens and navigation flow
- Implement state management (Redux/Context)
- Add API integration
- Implement authentication
- Add testing framework
- Configure CI/CD pipeline