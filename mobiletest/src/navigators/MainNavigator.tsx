import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ForumScreen from '../screens/ForumScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={{
        tabBarStyle: {
          height: 80,
          backgroundColor: 'white',
        },
        tabBarActiveTintColor: '#7286D3',
        tabBarLabelStyle: {
          paddingBottom: 14,
        },
      }}>
      <Tab.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesomeIcon
              name={focused ? 'comments' : 'comments-o'}
              color={color}
              size={size}
            />
          ),
          // headerShown: false,
          header: () => (
            <View
              style={{
                paddingTop: 30,
                paddingBottom: 30,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 1,
                height: 30,
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/logo-light.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesomeIcon
              name={focused ? 'map' : 'map-o'}
              color={color}
              size={size}
            />
          ),
          // headerShown: false,
          header: () => (
            <View
              style={{
                paddingTop: 30,
                paddingBottom: 30,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 1,
                height: 30,
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/logo-light.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesome5Icon
              name={focused ? 'user-alt' : 'user'}
              color={color}
              size={size}
            />
          ),
          // headerShown: false,
          header: () => (
            <View
              style={{
                paddingTop: 30,
                paddingBottom: 30,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 1,
                height: 30,
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/logo-light.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
