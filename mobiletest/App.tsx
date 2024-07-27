import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainNavigator from './src/navigators/MainNavigator'
import { Alert, PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { checkToken } from './src/services/FcmToken';

const App = () => {
  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    checkToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  )
}

export default App