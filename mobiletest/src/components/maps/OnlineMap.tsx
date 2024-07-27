import {View, Text} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const OnlineMap = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{
        html: `<iframe href="https://www.mappedin.com/" title="Mappedin Map" name="Mappedin Map" allow="clipboard-write; web-share" scrolling="no" width="100%" height="100%" frameborder="0" style="border:0" src="https://app.mappedin.com/map/66a4af3d3f38a8000b72d781?embedded=true"></iframe>`
      }}
    />
  );
};

export default OnlineMap;
