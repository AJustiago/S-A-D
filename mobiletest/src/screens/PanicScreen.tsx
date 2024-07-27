import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PanicScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
        WARNING !!
      </Text>
      <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
        IMMINENT DANGER
      </Text>
      <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
        DON'T PANIC
      </Text>
      <View style={{height: 20}} />
      <TouchableOpacity style={{
        backgroundColor: "#00000044",
        padding: 10,
        borderRadius: 8,
      }}
        onPress={() => {
            navigation.navigate('Main');
        }}
      >
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Redirect To App
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PanicScreen;
