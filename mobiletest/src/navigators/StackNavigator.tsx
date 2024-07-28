import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailForum from '../screens/DetailForumScreen';
import LoginScreen from '../screens/LoginScreen';
import PanicScreen from '../screens/PanicScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Main" component={MainNavigator} options={{headerShown: false}} />
        <Stack.Screen name="Panic" component={PanicScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={DetailForum} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
