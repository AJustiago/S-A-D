import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PanicScreen = ({navigation}) => {
  const [titleShown, setTitleShown] = useState(false);
  useEffect(() => {
    let s = 0;
    let inter = setInterval(() => {
      if (s > 2){
        setTitleShown(false)
        s = 0
      } else {
        setTitleShown(true)
        s++
      }
    }, 500);
    return () => clearInterval(inter);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', opacity: titleShown ? 1 : 0}}>
        EARTHQUAKE ALERT !!
      </Text>
      <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
        Please remain calm
      </Text>
      <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
        Immediately Evacuate
      </Text>
      <View style={{height: 20}} />
      <TouchableOpacity
        style={{
          backgroundColor: '#00000044',
          padding: 10,
          borderRadius: 8,
        }}
        onPress={() => {
          navigation.pop();
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Find Exit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PanicScreen;
