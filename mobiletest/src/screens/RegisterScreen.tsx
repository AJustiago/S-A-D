import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleRegister = () => {
    if (username === '' || firstname === '' || lastname === '' || email === '' || password === '') {
      SweetAlert.showAlertWithOptions({
        title: 'Validation Error',
        subTitle: 'Please fill in all fields',
        style: 'error',
      });
      return;
    }

    if (password.length < 8 || !/\d/.test(password)) {
      SweetAlert.showAlertWithOptions({
        title: 'Validation Error',
        subTitle: 'Password must be at least 8 characters long and include at least 1 number',
        style: 'error',
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      SweetAlert.showAlertWithOptions({
        title: 'Validation Error',
        subTitle: 'Please enter a valid email address',
        style: 'error',
      });
      return;
    }

    SweetAlert.showAlertWithOptions({
      title: 'Registration Successful',
      subTitle: `Welcome, ${firstname} ${lastname}!`,
      style: 'success',
    });

    navigation.navigate('Home');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EDEN Registration</Text>
      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        value={firstname}
        onChangeText={(text) => setFirstName(text)}
      />
      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        value={lastname}
        onChangeText={(text) => setLastName(text)}
      />
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.loginLink}>Login</Text>
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
    width: '25%',
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#FFF2F2',
    fontSize: 16,
  },
  loginLink: {
    color: '#FFF2F2',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
