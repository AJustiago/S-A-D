import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const getRandomProfileImage = () => {
  const images = [
    require('../assets/profile-1.jpeg'),
    require('../assets/profile-2.jpeg'),
    require('../assets/profile-3.jpeg'),
  ];
  const randomNumber = Math.floor(Math.random() * images.length);
  return images[randomNumber];
};
const ProfileScreen = () => {
  const profileImageSource = getRandomProfileImage();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image source={profileImageSource} style={styles.profileImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.email}>email@example.com</Text>
          <Text style={styles.bio}>This is a bio text.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerText: {
    marginTop: 10,
    color: '#000',
    alignItems: 'center',
    padding: 5,
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  profileImage: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 20,
    marginTop: 5,
  },
  infoContainer: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: 'darkgray',
  },
});

export default ProfileScreen;