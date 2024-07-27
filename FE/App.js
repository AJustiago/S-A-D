import React from 'react';
import { StyleSheet, View } from 'react-native';
import Forum from './components/Forum/Forum';
import Map from './components/Map/Map';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

export default class App extends React.Component {
  state = {
    currentPage: 'Map', // Default page
  };

  changePage = (screen) => {
    this.setState({ currentPage: screen });
  };

  renderPage() {
    switch (this.state.currentPage) {
      case 'Profile':
        return <Profile />;
      case 'Map':
        return <Map />;
      case 'Forum':
        return <Forum />;
      default:
        return <Map />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar changePage={this.changePage} />
        {this.renderPage()}
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
