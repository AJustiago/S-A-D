import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import StackNavigator from './src/navigators/StackNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  )
}

export default App