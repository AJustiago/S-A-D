import React, {useRef} from 'react';
import {
  MappedinLocation,
  MapViewStore,
  MiMapView,
  TGetVenueOptions,
} from '@mappedin/react-native-sdk';

const venueOptions: TGetVenueOptions = {
  venue: 'mappedin-demo-mall',
  clientId: '5eab30aa91b055001a68e996',
  clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
};

const location = {
  timestamp: 1583957906820,
  coords: {
    accuracy: 5,
    latitude: 43.52012478635707,
    longitude: -80.53951744629536,
    floorLevel: 0,
  },
  type: 0,
};

const DummyMap = () => {
  const mapView = useRef<MapViewStore>(null);
  return (
    <MiMapView
      key="mappedin"
      options={venueOptions}
      ref={mapView}
      onFirstMapLoaded={() => {
        mapView.current?.BlueDot.enable({
          smoothing: false,
          showBearing: true,
        });
        mapView.current?.overrideLocation(location);
        const departure = mapView.current?.venueData?.locations.find(
          (l: MappedinLocation) => l.name === 'Uniqlo',
        );
        const destination = mapView.current?.venueData?.locations.find(
          (l: MappedinLocation) => l.name === 'Microsoft',
        );
        if (!departure || !destination) {
          return;
        }
        const directions = departure?.directionsTo(destination);
        if (directions) {
          mapView.current?.Journey.draw(directions);
        }
      }}
      onClick={({position}) => {
        console.log(position);
        mapView.current?.overrideLocation({
          ...location,
          coords: {
            accuracy: 3,
            latitude: position.latitude,
            longitude: position.longitude,
            floorLevel: mapView.current?.currentMap?.elevation,
          },
        });
      }}
    />
  );
};

export default DummyMap;
