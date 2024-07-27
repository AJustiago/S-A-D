import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from '../NavBar/NavBar';
import { MiMapView } from '@mappedin/react-native-sdk';

const options = {
  clientId: '5eab30aa91b055001a68e996',
  clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
  venue: 'mappedin-demo-mall',
  perspective: 'Website',
};

const MapScreen = ({ changePage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Map</Text>
      <MiMapView
        style={{ flex: 1 }}
        key="mappedin"
        options={options}
      />
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

export default MapScreen;