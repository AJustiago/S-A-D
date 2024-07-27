import { View, Text } from 'react-native'
import React from 'react'
import { MiMapView, TGetVenueOptions } from '@mappedin/react-native-sdk';

const venueOptions: TGetVenueOptions = {
  venue: 'mappedin-demo-mall',
  clientId: '5eab30aa91b055001a68e996',
  clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
};

const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MiMapView style={{flex: 1}} key="mappedin" options={venueOptions} />
    </View>
  )
}

export default MapScreen