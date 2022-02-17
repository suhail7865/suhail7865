import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Switch from 'react-native-full-switch';
import {Colors} from '../../Helper/Colors';
import {SCREEN_WIDTH} from '../../Helper/DeviceDimensions';

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <Text style={styles.textHeading}>Notification Settings</Text>
      </View>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginVertical: 10,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={styles.imgView}>
            <Image
              source={require('../../Assets/Images/Notofications/notification.png')}
            />
          </View>
          <View style={{marginLeft: 16}}>
            <Text style={styles.txtTitle}>All Notification</Text>
            <Text style={styles.txtTime}>
              jitendra is very good person and he is hardworking as well.
            </Text>
          </View>
          <Switch
            isOn={isEnabled}
            onChange={isOn => setIsEnabled(!isEnabled)}
            trackWidth={30}
            trackHeight={15}
            curserWidth={8}
            curserHeight={8}
            trackOnColor={Colors.LimeGreen}
            trackOffColor={Colors.Light_Grayish_Blue_White}
            curserOffColor={Colors.Light_Grayish_Blue}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Mostly_Cyan,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 13,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  textHeading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#191919',
  },
  txtRed: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#E80000',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  imgView: {
    height: 45,
    width: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2fdfa',
    marginHorizontal: 13,
  },
  txtTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#1b1b1b',
    fontSize: 13,
  },
  txtTime: {
    marginRight: SCREEN_WIDTH * 0.17,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#6f7c8e',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#191919',
  },
});
