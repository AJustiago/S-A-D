import {View, Text, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import OnlineMap from '../components/maps/OnlineMap';
import DummyMap from '../components/maps/DummyMap';

const data = [
  {label: '1st floor', value: '1'},
  {label: '2nd floor', value: '2'},
];

const MapScreen = () => {
  const [value, setValue] = useState<string>();
  const renderMap = () => {
    return (
      <View style={{height: '100%'}}>
        <View style={{height: '100%', display: (value == '1' ? 'flex' : 'none')}}>
          <OnlineMap />
        </View>
        <View style={{height: '100%', display: (value == '2' ? 'flex' : 'none')}}>
          <DummyMap />
        </View>
      </View>
    );
  };

  return (
    <View>
      {renderMap()}
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        autoScroll
        maxHeight={300}
        minHeight={100}
        labelField="label"
        valueField="value"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 50, // Adjust as needed
    left: 16, // Adjust as needed
    right: 16, // Adjust as needed
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginHorizontal: 72,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default MapScreen;
