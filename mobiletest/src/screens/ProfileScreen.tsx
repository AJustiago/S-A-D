import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const ProfileScreen = () => {
  const userData = {
    firstName: 'Daniel',
    lastName: 'Santiago',
    username: 'DanielS',
    email: 'DanSan321@gmail.com',
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainerWrapper}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/profile.png')} style={styles.profileImage} />
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
    backgroundColor: '#F8F8F8',
  },
  imageContainerWrapper: {
    height: height / 2.7,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  imageContainer: {
    backgroundColor: '#FFF',
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
    backgroundColor: '#F8F8F8',
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
    color: '#000'
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#000',
    color: '#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
  },
});

export default ProfileScreen;
