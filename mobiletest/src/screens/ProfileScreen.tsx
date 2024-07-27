import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { getUserDetails, loginUser, registerUser } from '../services/ProfileServices';

const ProfileScreen = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = await AsyncStorage.getItem('jwt');
        if (!token) {
          navigation.navigate('Login');
          return;
        }
        const userData = await getUserDetails('1');
        setUser(userData);
      } catch (error) {
        setError('Failed to fetch user details');
        navigation.navigate('Login');
      }
    };

    fetchUserDetails();
  }, [navigation]);

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email: 'user@example.com', password: 'password123' });
      console.log('Login response:', response);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await registerUser({ email: 'newuser@example.com', password: 'password123', name: 'New User' });
      console.log('Registration response:', response);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <View>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
      {user ? <Text>{JSON.stringify(user)}</Text> : error ? <Text>{error}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default ProfileScreen;
