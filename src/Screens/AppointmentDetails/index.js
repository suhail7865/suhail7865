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
import Stars from 'react-native-stars';

import {FontFamily} from '../../Helper/FontFamily';
import {Colors} from '../../Helper/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import RadioButtonCard from '../../Component/RadioButtonCard';
import {GetOtpButton} from '../../Component/GetOtpButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export function AppointmentDetails() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <View style={styles.topWrapperDocterDetail}>
          <View style={styles.docterView}>
            <Svg width="50" height="50" viewBox="0 0 50 50">
              <Defs>
                <Pattern
                  id="pattern"
                  width="1"
                  height="1"
                  viewBox="0 1.492 50 50">
                  <Image
                    preserveAspectRatio="xMidYMid slice"
                    width="50"
                    height="62.439"
                    xlinkHref={require('../../Assets/Images/UserPics/Outdoors-man-portrait_(cropped)-image.jpg')}
                  />
                </Pattern>
              </Defs>
              <Rect
                id="Outdoors-man-portrait__cropped_"
                data-name="Outdoors-man-portrait_(cropped)"
                width="50"
                height="50"
                rx="8"
                fill="url(#pattern)"
              />
            </Svg>
            <View>
              <Text style={styles.frontText}>Arun Mehta</Text>
              <Text style={styles.frontDocterText}>Slot - 1</Text>
              <Pressable>
                <View style={styles.getCompView}>
                  <Text style={styles.getCompText}>SUCCESSFULL</Text>
                </View>
              </Pressable>
            </View>
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
        <Text style={styles.ratingText}>Rating & Review</Text>
        <View style={styles.ratingView}>
          <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
            <Stars
              count={5}
              half={true}
              starSize={100}
              fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
              emptyStar={
                <Icon
                  name={'star'}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
            />
            <View style={styles.ratingStarText}>
              <Text style={styles.ratingViews}>Excellent</Text>
            </View>
          </View>
          <Text
            style={{
              borderBottomWidth: 0.5,
              borderColor: Colors.Light_Grayish_Blue_White,
              width: SCREEN_WIDTH * 0.909,
              position: 'absolute',
              marginHorizontal: SCREEN_HEIGHT * 0.02,
              marginVertical: SCREEN_HEIGHT * 0.055,
            }}></Text>
          <Text style={styles.commentText}>Your Comment</Text>
          <View
            style={{
              backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
              padding: 10,
              height: SCREEN_HEIGHT * 0.099,
              borderRadius: 5,
              width: SCREEN_WIDTH * 0.924,
            }}>
            <Text style={styles.CommentPatientText}>
              Vijay Sharma is responsible for all sides of care of a patient. He
              diagnose, educate, and tread patients to ensure that he have the
              best possible care
            </Text>
          </View>
        </View>
        <Text style={styles.billingText}>Billing Detailes</Text>
        <View style={styles.billingView}>
          <View
            style={{
              marginVertical: SCREEN_HEIGHT * 0.02,
              flexDirection: 'row',
            }}>
            <Text style={styles.billingTextContent}>Subtotal</Text>
            <Text style={styles.priceText}>{'\u20B9'} 2250.0</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.billingTextContent}>Service Charge</Text>
            <Text
              style={{
                borderBottomWidth: 0.5,
                borderColor: Colors.Light_Grayish_Blue_White,
                width: SCREEN_WIDTH * 0.929,
                position: 'absolute',
                marginVertical: SCREEN_HEIGHT * 0.02,
              }}></Text>
            <Text style={styles.serviceText}>{'\u20B9'} 100.0</Text>
          </View>
          <View
            style={{
              marginVertical: SCREEN_HEIGHT * 0.03,
              flexDirection: 'row',
            }}>
            <Text style={styles.billingTotalText}>Total</Text>
            <Text style={styles.totaltext}>{'\u20B9'} 2350.0</Text>
          </View>
        </View>
        <View style={styles.bottomPayMainView}>
          <View style={styles.bottomPayMethod}>
            <Pressable style={{marginHorizontal: 40}}>
              <Text style={styles.payText}>PPAYMENT METHOD</Text>
            </Pressable>
            <Text
              style={{
                borderLeftWidth: 0.5,
                borderColor: Colors.Light_Grayish_Blue_White,
              }}></Text>
            <Pressable style={{marginHorizontal: 40}}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="79"
                height="16.686"
                viewBox="0 0 79 16.686">
                <G id="Page-1" transform="translate(-0.808 -0.482)">
                  <G id="Group" transform="translate(0.808 0.482)">
                    <Path
                      id="Fill-1"
                      d="M266,80.354a1.632,1.632,0,0,1-.727,1.023,2.936,2.936,0,0,1-1.515.327h-2.068l.726-2.7h2.068a2.047,2.047,0,0,1,1.34.326A.953.953,0,0,1,266,80.354m2.142-.058a2.275,2.275,0,0,0-.327-2.249,3.337,3.337,0,0,0-2.527-.784h-4.616L257.9,87.595h2.243l1.12-4.165h1.471a1.6,1.6,0,0,1,.779.16.7.7,0,0,1,.336.566l.4,3.439h2.4l-.39-3.207a1.268,1.268,0,0,0-.986-1.262,4.243,4.243,0,0,0,1.851-1.06,3.863,3.863,0,0,0,1.022-1.77"
                      transform="translate(-247.154 -74.054)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <Path
                      id="Fill-3"
                      d="M500.842,148.033a3.341,3.341,0,0,1-.866,1.6,1.967,1.967,0,0,1-1.4.553,1.166,1.166,0,0,1-1.128-.546,2.17,2.17,0,0,1-.021-1.58,3.4,3.4,0,0,1,.884-1.617,1.991,1.991,0,0,1,1.423-.582,1.12,1.12,0,0,1,1.1.561,2.3,2.3,0,0,1,.006,1.609Zm.983-3.67-.281,1.049a1.647,1.647,0,0,0-.7-.9,2.351,2.351,0,0,0-1.294-.335,3.682,3.682,0,0,0-1.82.488,4.8,4.8,0,0,0-1.526,1.376,6.007,6.007,0,0,0-.958,2.024,4.315,4.315,0,0,0-.122,2,2.169,2.169,0,0,0,.794,1.333,2.516,2.516,0,0,0,1.572.466,3.48,3.48,0,0,0,1.469-.32,3.421,3.421,0,0,0,1.185-.888l-.293,1.092h2.17l1.978-7.383Z"
                      transform="translate(-474.45 -138.194)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <Path
                      id="Fill-5"
                      d="M704.475,148.706h-6.306l-.441,1.646h3.67l-4.852,4.194-.414,1.544h6.51l.441-1.645h-3.932l4.925-4.253Z"
                      transform="translate(-667.149 -142.537)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <Path
                      id="Fill-7"
                      d="M897.021,148.019a3.391,3.391,0,0,1-.867,1.631,1.956,1.956,0,0,1-1.389.539q-1.7,0-1.123-2.17a3.366,3.366,0,0,1,.872-1.624,1.992,1.992,0,0,1,1.413-.546,1.121,1.121,0,0,1,1.1.546,2.323,2.323,0,0,1-.005,1.624m1.269-3.379a3.572,3.572,0,0,0-1.914-.466,5.139,5.139,0,0,0-2.186.466,4.745,4.745,0,0,0-1.713,1.34,5.429,5.429,0,0,0-1.02,2.039,3.89,3.89,0,0,0-.073,2.039,2.2,2.2,0,0,0,1,1.34,3.636,3.636,0,0,0,1.936.466,5.052,5.052,0,0,0,2.164-.466,4.771,4.771,0,0,0,1.706-1.34,5.437,5.437,0,0,0,1.019-2.039,3.889,3.889,0,0,0,.073-2.039,2.208,2.208,0,0,0-.988-1.34"
                      transform="translate(-854.164 -138.194)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <Path
                      id="Fill-9"
                      d="M1469.361,148.033a3.344,3.344,0,0,1-.866,1.6,1.967,1.967,0,0,1-1.4.553,1.166,1.166,0,0,1-1.127-.546,2.168,2.168,0,0,1-.021-1.58,3.4,3.4,0,0,1,.884-1.617,1.991,1.991,0,0,1,1.423-.582,1.12,1.12,0,0,1,1.1.561,2.3,2.3,0,0,1,.006,1.609Zm.983-3.67-.281,1.049a1.646,1.646,0,0,0-.7-.9,2.35,2.35,0,0,0-1.294-.335,3.683,3.683,0,0,0-1.82.488,4.806,4.806,0,0,0-1.526,1.376,6,6,0,0,0-.957,2.024,4.32,4.32,0,0,0-.121,2,2.166,2.166,0,0,0,.793,1.333,2.517,2.517,0,0,0,1.572.466,3.482,3.482,0,0,0,1.469-.32,3.419,3.419,0,0,0,1.185-.888l-.293,1.092h2.17l1.979-7.383Z"
                      transform="translate(-1402.622 -138.194)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <Path
                      id="Fill-11"
                      d="M1094.746,146.678l.553-2.01a1.633,1.633,0,0,0-.747-.146,2.981,2.981,0,0,0-1.432.371,3.146,3.146,0,0,0-1.015.885l.288-1.082h-2.169l-1.994,7.383h2.2l1.034-3.859a2.447,2.447,0,0,1,.812-1.318,2.246,2.246,0,0,1,1.459-.473,2.151,2.151,0,0,1,1.012.247"
                      transform="translate(-1042.901 -138.528)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <Path
                      id="Fill-13"
                      d="M1220.818,148.066a3.269,3.269,0,0,1-.86,1.58,1.975,1.975,0,0,1-1.4.546,1.144,1.144,0,0,1-1.111-.553,2.227,2.227,0,0,1-.015-1.6,3.345,3.345,0,0,1,.875-1.609,1.987,1.987,0,0,1,1.411-.561,1.1,1.1,0,0,1,1.089.583,2.333,2.333,0,0,1,.011,1.616m1.537-3.4a2.424,2.424,0,0,0-1.559-.488,3.454,3.454,0,0,0-1.579.378A3.279,3.279,0,0,0,1218,145.59l.007-.048.37-1.176h-2.147l-.547,2.042c-.007.024-.012.046-.018.07l-2.255,8.417h2.2l1.136-4.237a1.515,1.515,0,0,0,.694.888,2.452,2.452,0,0,0,1.3.32,3.809,3.809,0,0,0,1.829-.466,4.537,4.537,0,0,0,1.507-1.333,5.91,5.91,0,0,0,.944-2,4.472,4.472,0,0,0,.127-2.024,2.254,2.254,0,0,0-.789-1.376"
                      transform="translate(-1162.868 -138.21)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <Path
                      id="Fill-15"
                      d="M1672.582,148.708v0h-1.332l-.119,0h-.691l-.354.493c-.028.037-.057.074-.087.118l-.038.057-2.81,3.913-.583-4.583h-2.3l1.166,6.963-2.574,3.565h2.293l.624-.884.054-.076.728-1.032.021-.03,3.257-4.617,2.745-3.886,0,0Z"
                      transform="translate(-1593.584 -142.549)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <Path
                      id="Fill-17"
                      d="M107.536,4.878,106.878,7.3l3.767-2.436-2.464,9.192,2.5,0L114.323.482Z"
                      transform="translate(-102.446 -0.482)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <Path
                      id="Fill-19"
                      d="M1.843,141.263.808,145.127H5.936l2.1-7.861-6.191,4"
                      transform="translate(-0.808 -131.574)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </G>
                </G>
              </Svg>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            marginTop: SCREEN_HEIGHT * 0.08,
            bottom: SCREEN_HEIGHT * 0.026,
          }}>
          <GetOtpButton
            SvgStyles={styles.svg}
            Svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17">
                <G
                  id="question_answer_black_24dp"
                  transform="translate(-5.668 -5.668)">
                  <Path
                    id="Path_115"
                    data-name="Path 115"
                    d="M13.05,3.7V9.65H4.694l-.5.5-.493.493V3.7h9.35M13.9,2H2.85A.852.852,0,0,0,2,2.85v11.9l3.4-3.4h8.5a.852.852,0,0,0,.85-.85V2.85A.852.852,0,0,0,13.9,2Zm4.25,3.4h-1.7v7.65H5.4v1.7a.852.852,0,0,0,.85.85H15.6L19,19V6.25A.852.852,0,0,0,18.15,5.4Z"
                    transform="translate(3.668 3.668)"
                    fill="#fff"
                  />
                </G>
              </Svg>
            }
            verifyOtp={'View Chat'}
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
    height: SCREEN_HEIGHT * 0.149,
    padding: 12,
  },

  docterView: {
    marginVertical : 10,
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
    bottom: SCREEN_HEIGHT * 0.012,
    left: SCREEN_HEIGHT * 0.02,
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.regular,
    position: 'absolute',
  },
  getCompText: {
    color: Colors.Heavey_Green,
    fontSize: 10,
    fontFamily: FontFamily.regular,
    marginVertical: SCREEN_HEIGHT * 0.007,
    alignSelf: 'center',
  },
  getCompView: {
    marginLeft: SCREEN_HEIGHT * 0.265,
    bottom: SCREEN_HEIGHT * 0.036,
    right: -30,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: Colors.Heavey_Green,
    backgroundColor: Colors.Week_Green,
    width: 81,
    height: 25,
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
    top : SCREEN_HEIGHT * 0.01,
    marginVertical : SCREEN_HEIGHT * 0.01,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
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
  ratingText: {
    color: Colors.Week_Black,
    paddingHorizontal: 13,
    fontSize: 14,
    marginTop: SCREEN_HEIGHT * 0.03,
    fontFamily: FontFamily.semibold,
  },

  totaltext: {
    color: Colors.Mostly_Black_Gray_Dark,
    fontSize: 16,
    fontFamily: FontFamily.semibold,
    left: SCREEN_HEIGHT * 0.353,
  },
  ratingView: {
    backgroundColor: Colors.White,
    paddingHorizontal: 13,
    height: SCREEN_HEIGHT * 0.245,
  },
  myStarStyle: {
    color: Colors.Yellow,
    backgroundColor: 'transparent',
    fontSize: 20,
    padding: 5,
    marginVertical: SCREEN_HEIGHT * 0.025,
  },
  myEmptyStarStyle: {
    color: Colors.White,
  },
  ratingStarText: {
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: Colors.Yellow,
    width: SCREEN_WIDTH * 0.21,
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.037,
    marginHorizontal: SCREEN_HEIGHT * 0.17,
    marginVertical: 5,
    justifyContent: 'center',
    backgroundColor: Colors.Week_Yellow,
    marginVertical: SCREEN_HEIGHT * 0.03,
  },
  ratingViews: {
    color: Colors.Yellow,
    fontSize: 11,
    fontFamily: FontFamily.medium,
  },
  commentText: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.medium,
  },
  CommentPatientText: {
    color: Colors.Week_Black,
    fontSize: 11,
    fontFamily: FontFamily.regular,
    width: 340,
    lineHeight: 18,
  },
  billingText: {
    color: Colors.Week_Black,
    paddingHorizontal: 13,
    marginTop: SCREEN_HEIGHT * 0.03,
    marginVertical: SCREEN_HEIGHT * 0.0055,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
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
    left: SCREEN_HEIGHT * 0.338,
  },
  serviceText: {
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.medium,
    left: SCREEN_HEIGHT * 0.291,
  },
  billingTotalText: {
    color: Colors.Mostly_Black_Gray_Dark,
    fontSize: 12,
    fontFamily: FontFamily.semibold,
  },
  bottomPayMainView: {
    paddingHorizontal: 13,
  },
  bottomPayMethod: {
    backgroundColor: Colors.Heavey_Blue,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    // height: 29,
    height: SCREEN_HEIGHT * 0.043,
    width: SCREEN_WIDTH * 0.924,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  payText: {
    color: Colors.White,
    fontSize: 10,
    fontFamily: FontFamily.medium,
  },
  RajoPayText: {
    color: Colors.White,
    fontSize: 10,
    fontFamily: FontFamily.medium,
  },
  bottomTextButton: {
    color: Colors.White,
    fontFamily: FontFamily.medium,
    fontSize: 12,
    alignSelf: 'center',
    paddingVertical: SCREEN_HEIGHT * 0.027,
    marginRight: SCREEN_HEIGHT * 0.05,
  },
  svg: {
    marginLeft: SCREEN_HEIGHT * 0.275,
    marginTop: SCREEN_HEIGHT * 0.03,
    position: 'absolute',
  },
});
