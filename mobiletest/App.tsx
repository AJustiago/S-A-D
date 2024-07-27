import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MapScreen from './src/screens/MapScreen'
import MainNavigator from './src/navigators/MainNavigator'

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  )
}

export default App