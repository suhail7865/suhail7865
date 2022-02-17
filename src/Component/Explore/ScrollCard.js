import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import MateraialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native-gesture-handler';
import { Colors } from '../../Helper/Colors';
export function ScrollCard({navigation, onPress, imageUri, name, occupation, charges, ViewName}) {
  return (
    <View
      // data={data}
      style={{
        height: 230,
        width: SCREEN_WIDTH / 2.2,
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        borderColor: '#dddddd',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
      }}>
      <Image
        source={{uri : imageUri}}
   
        style={{
          flex: 1,
          width: '100%',
          resizeMode: 'stretch',
        }}
      />
      <View
        style={{
          margin: 7,
          position: 'absolute',
          top: 7,
          right: 4,
          width: 25,
          height: 25,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity activeOpacity={0.9}>
          <MateraialCommunityIcons name="bookmark-outline" size={16} />
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color : Colors.Mostly_Black}}>{name}</Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: '#97a0ad',
            fontSize: 12,
          }}>
          {occupation}
        </Text>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: '#1b1b1b'}}>
          <Icons name="rupee" /> {charges}
        </Text>
      </View>

      <View
        style={{
          borderTopColor: '#eeeeee',
          borderTopWidth: 1,
          top: 5,
        }}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={{flexDirection: 'row'}}>
          <Text
            style={{
              paddingHorizontal: 5,
              fontFamily: 'Poppins-Regular',
              color: '#1fdfac',
              paddingVertical: 7,
            }}>
           {ViewName}
          </Text>
          <AntDesign
            name="arrowright"
            size={20}
            color={'#1fdfac'}
            style={{top: 8}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
