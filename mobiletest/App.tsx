import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MapScreen from './src/screens/MapScreen'

const App = () => {
  return (
    <SafeAreaProvider>
      <MapScreen />
    </SafeAreaProvider>
  )
}

export default App