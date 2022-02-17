import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  Pressable,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Svg, {G, Path, Image} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import {LogBox} from 'react-native';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {Colors} from '../../Helper/Colors';
import {GetOtpButton} from '../../Component/GetOtpButton';
import {FontFamily} from '../../Helper/FontFamily';

export function rateReviewConsultantPopupScreen({navigation}) {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);
  const [modalVisible, setModalVisible] = useState(false);
  const [random, SetRandom] = useState(Math.random());
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        {/* Modal Popup Start */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert = 'Modal has been close';
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.container}>
            <Pressable
              style={{top: -15}}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icon
                color={Colors.White}
                name="close"
                size={22}
                style={styles.closeButton}
              />
            </Pressable>
            <View style={styles.modalView}>
              <View style={styles.wrapper}>
                <View style={{marginTop: SCREEN_HEIGHT * 0.03}}>
                  <Text
                    style={{
                      color: Colors.Black,
                      fontSize: 14,
                      fontFamily: FontFamily.semibold,
                    }}>
                    Rate & Review Consultant
                  </Text>
                  <Text
                    style={{
                      bottom: SCREEN_HEIGHT * 0.015,
                      borderBottomWidth: 0.5,
                      borderColor: Colors.Very_Dark,
                      width: SCREEN_WIDTH * 0.92,
                    }}></Text>
                </View>
                <Stars
                  count={5}
                  starSize={10}
                  fullStar={
                    <MaterialIcons name={'star'} style={[styles.myStarStyle]} />
                  }
                  emptyStar={
                    <MaterialIcons
                      name={'star'}
                      style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                    />
                  }
                />
                <View style={{alignItems: 'center'}}>
                  <View style={styles.cualityView}>
                    <Text style={styles.cualityText}>Very Good</Text>
                  </View>
                </View>
                <View style={styles.inputBorder}>
                  <TextInput
                    placeholder="Enter you Comment..."
                    placeholderTextColor={Colors.Very_Week_Dark}
                    style={styles.inputPopup}
                  />
                </View>
                <View style={{}}>
                  <GetOtpButton
                  
                    button={{top: SCREEN_HEIGHT * 0.01}}
                    verifyOtp={'Submit'}
                    verifyButtonText={styles.verifyButton}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      {/* Modal Popup End */}

      {/* Login Screen Start */}
      <View
        style={{
          width: SCREEN_WIDTH * 1.0,
          paddingHorizontal: 14,
          flex: 1.6,
          backgroundColor: Colors.FloralWhite,
        }}>
        <ScrollView>
          <View style={{marginVertical: 600}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPressOut={() => setModalVisible(true)}>
              <View style={styles.contentButton}>
                <View style={{flexDirection: 'row', marginLeft: 130}}>
                  <Text style={styles.otpText}>GET OTP</Text>
                  <Svg>
                    <Path
                      id="Path_39"
                      data-name="Path 39"
                      d="M0,0H18V18H0Z"
                      fill="none"
                    />
                    <Path
                      id="Path_40"
                      data-name="Path 40"
                      d="M10,4,8.943,5.057,13.128,9.25H4v1.5h9.128L8.943,14.943,10,16l6-6Z"
                      transform="translate(-1 -1)"
                      fill="#fff"
                    />
                  </Svg>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>

    // Login Screen End
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  modalView: {
    width: '100%',
    height: 374,
    backgroundColor: Colors.White,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 20,
  },
  closeButton: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 50,
    padding: 10,
  },
  wrapper: {
    flex: 0.4,
    backgroundColor: Colors.White,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  ratingView: {
    backgroundColor: Colors.White,
    paddingHorizontal: 13,
    height: SCREEN_HEIGHT * 0.245,
  },
  myStarStyle: {
    color: Colors.Yellow,
    backgroundColor: 'transparent',
    fontSize: 27,
    padding: 5,
    marginVertical: SCREEN_HEIGHT * 0.025,
  },
  myEmptyStarStyle: {
    color: Colors.Light_Grayish_Blue,
  },
  cualityText: {
    color: Colors.Yellow,
    fontSize: 13,
    fontFamily: FontFamily.medium,
  },
  inputBorder: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.Light_Grayish_Blue_White,
    height: 100,
    backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
    marginVertical: 20,
  },
  inputPopup: {
    fontSize: 12,
    fontFamily: FontFamily.regular,
    marginHorizontal: SCREEN_HEIGHT * 0.01,
  },
  verifyButton : {
    textAlign : 'center',
    marginTop : SCREEN_HEIGHT * 0.02,
    fontSize : 12, 
    fontFamily : FontFamily.medium,
    color : Colors.White
  },

  cualityView: {
    backgroundColor: Colors.Week_Yellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.Yellow,
    borderRadius: 100,
    width: SCREEN_WIDTH * 0.31,
    height: SCREEN_HEIGHT * 0.041,
  },

  contentButton: {
    width: 332,
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.LimeGreen,
    // top: 65,
    // position: 'absolute',
    justifyContent: 'center',
    borderRadius: 7,
    shadowColor: 'black',
    shadowOpacity: 3,
    elevation: 6,
  },
  otpText: {
    height: 20,
    alignSelf: 'center',
    marginRight: 3,
    color: Colors.White,
    fontFamily: FontFamily.medium,
  },

  BottomSolvekarLogo: {
    width: SCREEN_WIDTH * 0.35,
    alignSelf: 'center',
  },
});
