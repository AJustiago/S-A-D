import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from '../NavBar/NavBar';

const Forum = ({ changePage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Forum</Text>
      <NavBar changePage={changePage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -15 }],
  },
});

export default Forum;
