# Pils App - Developer Setup Guide

## Prerequisites

### Required Software
- **Node.js**: Version 18.0.0 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **Yarn**: Package manager
  - Install: `npm install -g yarn`
  - Verify installation: `yarn --version`
- **Expo CLI**: For development server
  - Install: `npm install -g @expo/cli`
  - Verify installation: `expo --version`

### Mobile Development Environment

#### iOS Development (macOS only)
- **Xcode**: Latest version from App Store
- **iOS Simulator**: Included with Xcode
- **CocoaPods**: `sudo gem install cocoapods`

#### Android Development
- **Android Studio**: Download from [developer.android.com](https://developer.android.com/studio)
- **Android SDK**: Install via Android Studio
- **Android Virtual Device (AVD)**: Create via Android Studio AVD Manager
- **Java Development Kit (JDK)**: Version 11 or higher

### Environment Variables (Android)
Add to your shell profile (`.bashrc`, `.zshrc`, etc.):
```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## Installation Steps

### 1. Clone and Setup
```bash
# Navigate to project directory
cd pils-app

# Install dependencies
yarn install
```

## 2. Create a development build on EAS
```bash
# Install expo-dev-client
npx expo install expo-dev-client
```

## 3. Build the native app (Android)
```bash
# Sign up for an Expo account, if you haven't already.
# The EAS CLI installed and logged in.
npm install -g eas-cli && eas login
```

## 4. An Android Emulator (optional)
```bash
# An Android Emulator is optional if you want to test your app on an emulator.
eas build --platform android --profile development
```

## 5. macOS with iOS Simulator installed
# iOS Simulators are available only on macOS. Make sure you have the iOS Simulator installed.
# Edit development profile in eas.json and set the simulator option to true
```
{
  "build": {
    "development": {
      "ios": {
        "simulator": true
      }
    }
  }
}
```
```bash
# If you want to test on an ios simulator
eas build --platform ios --profile development
```

### 6. Start Development Server
```bash
# Start Expo development server
yarn start
# or
expo start
```

### 7 Run on Different Platforms

#### iOS Simulator (macOS only)
```bash
# Start iOS simulator
yarn ios
# or
expo start --ios
```

#### Android Emulator/Device
```bash
# Start Android emulator or connect device
yarn android
# or
expo start --android
```

#### Web Browser
```bash
# Start web version
yarn web
# or
expo start --web
```

#### Physical Device
1. Install **Expo Go** app on your device:
   - iOS: App Store
   - Android: Google Play Store
2. Start development server: `yarn start`
3. Scan QR code with Expo Go app

## Development Commands

| Command | Description |
|---------|-------------|
| `yarn start` | Start Expo development server |
| `yarn ios` | Run on iOS simulator |
| `yarn android` | Run on Android emulator/device |
| `yarn web` | Run in web browser |

## Troubleshooting

### Common Issues

#### Metro bundler cache issues
```bash
# Clear Expo cache
expo start --clear
```

#### iOS simulator not opening
```bash
# Open simulator manually
open -a Simulator
```

#### Android emulator issues
```bash
# List available AVDs
emulator -list-avds

# Start specific AVD
emulator -avd <AVD_NAME>
```

#### Permission issues (Android)
- Enable Developer Options on device
- Enable USB Debugging
- Accept RSA key fingerprint

### Port Conflicts
If default port (8081) is in use:
```bash
expo start --port 8082
```

## Next Steps

After successful setup:
1. Explore the project structure (see `project-structure.md`)
2. Review coding guidelines
3. Start development with hot reload enabled
4. Test on multiple platforms regularly
