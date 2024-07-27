import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MapScreen from '../screens/MapScreen'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Forum" component={MapScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Profile" component={MapScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator