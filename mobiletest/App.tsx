import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainNavigator from './src/navigators/MainNavigator'
import { Alert, DeviceEventEmitter, PermissionsAndroid, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { checkToken } from './src/services/FcmToken';
import StackNavigator from './src/navigators/StackNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  )
}

export default App