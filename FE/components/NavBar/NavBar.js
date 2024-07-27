import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const iconHeight = 26;

const NavBar = ({ changePage }) => {
  return (
    <View style={styles.NavContainer}>
      <View style={styles.NavBar}>
        <Pressable
          onPress={() => changePage('Forum')}
          android_ripple={{ borderless: true, radius: 50 }}
          style={styles.IconBehave}
        >
          <MaterialIcons name="forum" size={iconHeight} color="blue" />
        </Pressable>
        <Pressable
          onPress={() => changePage('Map')}
          android_ripple={{ borderless: true, radius: 50 }}
          style={styles.IconBehave}
        >
          <MaterialIcons name="map" size={iconHeight} color="blue" />
        </Pressable>
        <Pressable
          onPress={() => changePage('Profile')}
          android_ripple={{ borderless: true, radius: 50 }}
          style={styles.IconBehave}
        >
          <MaterialIcons name="person" size={iconHeight} color="blue" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  NavContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },

  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 40,
    padding: 10,
  },
  
  IconBehave: {
    padding: 14
  }
});

export default NavBar;
