import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './components/NavBar/NavBar';
import MapScreen from './components/Map/Map';

export default class TestNavBar extends React.Component {
  changePage = (screen) => {
    console.log(screen + ' has been pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <MapScreen />
        {/* <NavBar changePage={this.changePage} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
