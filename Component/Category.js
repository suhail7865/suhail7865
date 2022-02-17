import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helpers/DeviceDimensions';

export default function Category(imageUri,name,deiscription) {
  return (
    <View
      style={{
        height: SCREEN_HEIGHT / 4.5,
        width: SCREEN_WIDTH / 1.2,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 10,
      }}>
      <View style={{flex: 1, elevation: 8, borderRadius: 10}}>
        <Image
          source={imageUri}
          style={{
            flex: 1,
            width: '100%',
            resizeMode: 'stretch',
          }}
        />
      </View>
    </View>
  );
}
