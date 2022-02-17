import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  StatusBar,
} from 'react-native';
import Svg, {Image, Defs, Pattern, Rect, G, Path} from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import CalendarStrip from 'react-native-calendar-strip';

import {FontFamily} from '../../Helper/FontFamily';
import {Colors} from '../../Helper/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import RadioButtonCard from '../../Component/RadioButtonCard';
import {GetOtpButton} from '../../Component/GetOtpButton';

export function PlaceAppointment({navigation}) {
  const [active, isActive] = useState(1);
  const [selectedItem] = useState(0);
  const [selectedSchedule, inSelectedSchedule] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.topWrapperDocterDetail}>
          <View style={styles.docterView}>
            <Svg width="45" height="45">
              <Defs>
                <Pattern
                  id="pattern"
                  preserveAspectRatio="xMidYMid slice"
                  width="100%"
                  height="100%"
                  viewBox="0 0 732 549">
                  <Image
                    width="732"
                    height="549"
                    xlinkHref={require('../../Assets/Images/DoctorMale/Male_Doctor_732x549-thumbnail-image.jpg')}
                  />
                </Pattern>
              </Defs>
              <Rect
                id="Male_Doctor_732x549-thumbnail"
                width="45"
                height="45"
                rx="6"
                fill="url(#pattern)"
              />
            </Svg>
            <View>
              <Text style={styles.frontText}>Vijay sharma</Text>
              <Text style={styles.frontDocterText}>Docter</Text>
              <Pressable>
                <View style={styles.getDirecView}>
                  <Text style={styles.getDirecText}>Get Direction</Text>
                  <Svg width="14.018" height="14" viewBox="0 0 14.018 14">
                    <G
                      id="directions_black_24dp"
                      transform="translate(-1.005 -1.014)">
                      <Path
                        id="Path_121"
                        data-name="Path 121"
                        d="M14.66,7.117,8.918,1.375a1.307,1.307,0,0,0-1.8,0L1.378,7.111a1.269,1.269,0,0,0,0,1.8l5.736,5.736a1.277,1.277,0,0,0,1.8,0l5.73-5.73A1.269,1.269,0,0,0,14.66,7.117ZM8.019,13.745,2.283,8.009,8.019,2.273l5.736,5.736ZM5.463,7.378V9.928H6.738V8.016H9.287V9.609l2.231-2.231L9.287,5.148V6.741H6.1A.639.639,0,0,0,5.463,7.378Z"
                        transform="translate(0 0)"
                        fill="#11abe6"
                      />
                    </G>
                  </Svg>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.mapAddressView}>
            <FontAwesome5
              name="map-marker-alt"
              size={15}
              color={Colors.Cell_Phone_Heavy_Dark}
            />
            <Text style={styles.mapAddressText}>
              45, D-S-4, Vijay Nager, Indore (452010)
            </Text>
          </View>
        </View>
        <Text style={styles.contentTypeText}>Appointment Detailes</Text>
        <View style={styles.detailesView}>
          <Text
            style={{
              borderBottomWidth: 0.5,
              borderColor: Colors.Light_Grayish_Blue_White,
              width: SCREEN_WIDTH * 0.909,
              position: 'absolute',
              marginHorizontal: SCREEN_HEIGHT * 0.02,
              marginVertical: SCREEN_HEIGHT * 0.018,
            }}></Text>
          <View style={styles.detailesTypeView}>
            <Text style={styles.detailesTextType}>Type</Text>
            <View
              style={{
                backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
                padding: 17,
                height: 49,
                alignItems: 'center',
                flexDirection: 'row',
                width: SCREEN_WIDTH * 0.43,
                borderRadius: 5,
                marginTop: SCREEN_HEIGHT * 0.02,
              }}>
              <Svg width="29" height="29" viewBox="0 0 29 29">
                <G
                  id="voice_chat_black_24dp"
                  transform="translate(-2.846 -2.846)">
                  <Path
                    id="Path_107"
                    data-name="Path 107"
                    d="M28.1,2H4.9A2.9,2.9,0,0,0,2.014,4.9L2,31l5.8-5.8H28.1A2.909,2.909,0,0,0,31,22.3V4.9A2.909,2.909,0,0,0,28.1,2Zm0,20.3H6.6L4.9,24V4.9H28.1Zm-8.7-7.83,4.35,3.48V9.25L19.4,12.73V9.25H9.25v8.7H19.4Z"
                    transform="translate(0.846 0.846)"
                    fill="#191919"
                  />
                </G>
              </Svg>
              <View style={{marginHorizontal: SCREEN_HEIGHT * 0.01}}>
                <Text style={styles.virtualText}>VIRTUAL</Text>
                <Text style={styles.virtualRupee}>{'\u20B9'} 2250.0</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.detailesTextSlot}>Date & Time Slot</Text>
            <View
              style={{
                backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
                padding: 17,
                height: SCREEN_HEIGHT * 0.07,
                flexDirection: 'row',
                width: SCREEN_WIDTH * 0.43,
                borderRadius: 5,
                alignItems: 'center',
                marginTop: SCREEN_HEIGHT * 0.02,
                marginHorizontal: SCREEN_HEIGHT * 0.013,
              }}>
              <View>
                <Material
                  name="calendar-outline"
                  color={Colors.Black}
                  size={14}
                />
                <Material
                  name="clock-time-five-outline"
                  color={Colors.Black}
                  size={14}
                  style={{marginTop: 2}}
                />
              </View>
              <View style={{marginHorizontal: SCREEN_HEIGHT * 0.01}}>
                <Text style={styles.dateText}>16/12/2021</Text>
                <Text style={styles.timeText}>12:00pm - 01:00pm</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.billingText}>Billing Detailes</Text>
        <View style={styles.billingView}>
          <View
            style={{
              marginVertical: SCREEN_HEIGHT * 0.02,
              flexDirection: 'row',
              justifyContent : 'space-between'
            }}>
            <Text style={styles.billingTextContent}>Subtotal</Text>
            <Text style={styles.priceText}>{'\u20B9'} 2250.0</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent : 'space-between'}}>
            <Text style={styles.billingTextContent}>Service Charge</Text>
            <Text style={styles.serviceText}>{'\u20B9'} 100.0</Text>
          </View>
          <View
            style={{
              marginVertical: SCREEN_HEIGHT * 0.03,
              flexDirection: 'row',
              justifyContent : 'space-between'
            }}>
            <Text style={styles.billingTotalText}>Total</Text>
            <Text style={styles.totaltext}>{'\u20B9'} 2350.0</Text>
          </View>
        </View>
        <View style={{marginTop : SCREEN_HEIGHT * 0.15}}>
          <GetOtpButton
        onPress={() => navigation.navigate('Payment')}
            verifyOtp={'Confirm Schedule'}
            verifyButtonText={styles.bottomTextButton}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Mostly_White_Cyan,
  },
  topWrapperDocterDetail: {
    backgroundColor: Colors.White,
    marginVertical: 20,
    height: SCREEN_HEIGHT * 0.144,
    padding: 12,
  },
  docterView: {
    flexDirection: 'row',
  },
  frontText: {
    marginVertical: 3,
    left: SCREEN_HEIGHT * 0.02,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.medium,
  },
  frontDocterText: {
    bottom: SCREEN_HEIGHT * 0.002,
    left: SCREEN_HEIGHT * 0.02,
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.regular,
    position: 'absolute',
  },
  getDirecText: {
    color: Colors.Vivid_Blue,
    paddingRight: 5,
    fontFamily: FontFamily.medium,
  },
  getDirecView: {
    marginLeft: SCREEN_HEIGHT * 0.265,
    bottom: SCREEN_HEIGHT * 0.022,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.Vivid_Blue,
  },
  mapAddressView: {
    marginVertical: 10,
    marginHorizontal: 4,
    flexDirection: 'row',
  },
  mapAddressText: {
    color: Colors.Cell_Phone_Heavy_Dark,
    marginLeft: SCREEN_HEIGHT * 0.01,
    fontFamily: FontFamily.regular,
    fontSize: 11,
  },
  contentTypeText: {
    paddingHorizontal: 13,
    bottom: SCREEN_HEIGHT * 0.01,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
  },
  bottomTextButton: {
    color: Colors.White,
    fontFamily: FontFamily.medium,
    fontSize: 12,
    alignSelf: 'center',
    paddingVertical: SCREEN_HEIGHT * 0.027,
  },
  detailesView: {
    backgroundColor: Colors.White,
    height: SCREEN_HEIGHT * 0.144,
    flexDirection: 'row',
    paddingVertical: SCREEN_HEIGHT * 0.01,
  },
  detailesTypeView: {
    paddingHorizontal: 13,
  },
  detailesTextType: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.medium,
  },
  detailesTextSlot: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.medium,
    // paddingHorizontal: 13,
    // marginHorizontal: 115,
  },
  virtualText: {
    color: Colors.Week_Black,
    fontSize: 11,
    fontFamily: FontFamily.regular,
  },
  virtualRupee: {
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
    bottom: SCREEN_HEIGHT * 0.006,
  },
  dateText: {
    color: Colors.Week_Black,
    fontSize: 11,
    fontFamily: FontFamily.medium,
  },
  timeText: {
    color: Colors.Week_Black,
    fontSize: 11,
    fontFamily: FontFamily.medium,
  },
  billingText: {
    color: Colors.Week_Black,
    paddingHorizontal: 13,
    marginVertical: SCREEN_HEIGHT * 0.02,
  },
  billingView: {
    paddingHorizontal: 13,
    backgroundColor: Colors.White,
  },
  billingTextContent: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.medium,
  },

  priceText: {
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.medium,
    // left: SCREEN_HEIGHT * 0.326,
  },
  serviceText: {

    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.medium,
    // left: SCREEN_HEIGHT * 0.29,
  },
  billingTotalText: {
    color: Colors.Mostly_Black_Gray_Dark,
    fontSize: 12,
    fontFamily: FontFamily.semibold,
  },
  totaltext: {
    color: Colors.Mostly_Black_Gray_Dark,
    fontSize: 16,
    fontFamily: FontFamily.semibold,
    // left: SCREEN_HEIGHT * 0.341,
  },
});
