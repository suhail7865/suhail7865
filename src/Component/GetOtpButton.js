import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Colors} from '../Helper/Colors';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../Helper/DeviceDimensions';

export const GetOtpButton = ({verifyOtp,SvgStyles, verifyButtonText, button, onPress, Svg}) => {
  return (
    <View style={styles.container}>
      <View style={button}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.otpButton}>
          <Text style={verifyButtonText}>{verifyOtp}</Text>
          <View style={SvgStyles}>{Svg}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  otpButton: {
    width: SCREEN_WIDTH - 29.10,
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.LimeGreen,
    shadowColor: Colors.Black,
    shadowOffset : {
      width : 4,
      height : 4,
    },
    shadowOpacity : 3,
    elevation: 4,
  },
});