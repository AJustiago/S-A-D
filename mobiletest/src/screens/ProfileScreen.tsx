import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const getRandomProfileImage = () => {
  const images = [
    require('../assets/profile-1.png'),
    require('../assets/profile-2.png'),
    require('../assets/profile-3.png'),
  ];
  const randomNumber = Math.floor(Math.random() * images.length);
  return images[randomNumber];
};

const ProfileScreen = () => {
  const profileImageSource = getRandomProfileImage();

  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe123',
    email: 'john.doe@example.com',
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainerWrapper}>
        <View style={styles.imageContainer}>
          <Image source={profileImageSource} style={styles.profileImage} />
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.field}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            value={userData.firstName}
            editable={false}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            value={userData.lastName}
            editable={false}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={userData.username}
            editable={false}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={userData.email}
            editable={false}
          />
        </View>
      </View>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    color: '#7286D3'
  },
  imageContainerWrapper: {
    height: height / 2,
    backgroundColor: '#E5E0FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  imageContainer: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 64,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  dataContainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    width: 120,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#7286D3'
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#7286D3',
    color: '#7286D3',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    backgroundColor: '#FFF2F2',
  },
});

export default ProfileScreen;
