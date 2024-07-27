import {View, Text, DeviceEventEmitter} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './MainNavigator';
import PanicScreen from '../screens/PanicScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainNavigator} options={{headerShown: false}} />
        <Stack.Screen name="Panic" component={PanicScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
