import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleLogin = () => {
    if (username === '' || password === '') {
      SweetAlert.showAlertWithOptions({
        title: 'Validation Error',
        subTitle: 'Please enter both username and password',
        style: 'error',
      });
      return;
    }

    SweetAlert.showAlertWithOptions({
      title: 'Login Successful',
      subTitle: `Username: ${username}`,
      style: 'success',
    });

    navigation.navigate('Home');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EDEN Login</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.label}>Password:</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <FontAwesome5Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={navigateToRegister}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7286D3',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF2F2',
  },
  label: {
    fontSize: 20,
    color: '#FFF2F2',
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    color: '#000',
  },
  button: {
    backgroundColor: '#E5E0FF',
    padding: 8,
    paddingLeft: 10,
    borderRadius: 10,
    width: '20%',
    height: 40,
  },
  buttonText: {
    color: '#FFF2F2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    paddingBottom: 10
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#FFF2F2',
    fontSize: 16,
  },
  registerLink: {
    color: '#FFF2F2',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
