import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  Pressable,
  StatusBar,
  BackHandler,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, {G, Path, Image} from 'react-native-svg';
import CountDown from 'react-native-countdown-component';
import {ScrollView} from 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {Colors} from '../../Helper/Colors';
import {GetOtpButton} from '../../Component/GetOtpButton';
import {FontFamily} from '../../Helper/FontFamily';
import {InputText} from '../../Component/InputText';
import {LoginUser} from '../../Helper/API_Call/API_Call';
import {CustomTextInput} from '../../Component/CustomTextInput';
import {ValidateEmail} from '../../Helper/Validation';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export function LoginOtpScreen({navigation, onSubmitPress, disabledIn}) {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);
  const [modalVisible, setModalVisible] = useState(false);
  const [counter, SetCounter] = useState(80);
  const [random, SetRandom] = useState(Math.random());
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef('codeInputRef2');
  const [value, setValue] = useState('1234');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    UserOtp,
    setValue,
  });
  const CELL_COUNT = 4;
  const handleResend = () => {
    SetRandom(Math.random);
  };

  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(true);

  const [isValid, setIsValid] = useState(true);
  const [phoneKey, setPhoneValue] = useState();
  const [userGoogleInfo, setUserGoogleInfo] = useState();
  const [loded, setLoded] = useState(false);

  GoogleSignin.configure({
    webClientId:
      '736728713240-m9jnittu3ahf3hcqk847ajbvrvg4kaoq.apps.googleusercontent.com',
    offlineAccess: true,
  });

  const validatePhone = phone => {
    let reg = /^[0-9\b]+$/;
    if (!phone) {
      alert('phone Required');
    } else if (reg.test(phone) === false) {
      alert('Invalid phone number');
    } else {
      {
        isValid;
      }
    }
  };
  const loginUser = () => {
    const signupValidForm = validatePhone(phone);

    LoginUser(phone)
      .then(async res => {
        let response = res;
        // console.log(response.data.phone, '---------setphone phone' )

        Toast.show({
          text1: 'Logged in Successfully!',
          duration: 100,
        });
        //setValue(response.data.otp);
        let newOtp = response.data.otp;
        console.log(typeof newOtp + '------------otp');
        setValue(newOtp.toString());
        setModalVisible(true);

        return newOtp;
      })
      .catch(err => {
        setLoading(false);
        let error = err;
        console.log(error);
      });
  };

  const UserOtp = () => {
    UserMatchOtp(phone, otp)
      .then(async res => {
        let response = res.data;
        setPhoneValue(response.phone);
        console.log(phoneKey, '------------phonekey');
        let value = {
          user_id: response.user_id,
        };
        _storeData(value);
        return console.log(response);
      })
      .catch(err => {
        setLoading(false);
        let error = err;
        console.log(error);
      });
  };
  const _storeData = async value => {
    try {
      //we have to wait until AsyncStorage.setItem() returns a promise
      var item = await AsyncStorage.setItem('user', JSON.stringify(value));
      console.log(item, '.............................item');
      return item;
    } catch (error) {
      console.log(error);
    }
  };

  const fbLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
      console.log(data)
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
        
      // Sign-in the user with the credential
      await auth().signInWithCredential(facebookCredential);
      
    } catch (error) {
      console.log({error});
    }
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userINfo = await GoogleSignin.signIn();
      setUserGoogleInfo(userINfo);
      setLoded(true);
      console.log(JSON.stringify(userINfo))
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />

      <View>
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
                <Text style={styles.otpTextModal}>OTP Verification</Text>

                <View style={{marginTop: 12}}>
                  <Text style={styles.topSmallText}>
                    An 4 digit authentication code has been {'\n'} send to{' '}
                    <Text style={styles.numberText}>8989666001</Text>
                  </Text>
                </View>

                <View style={{marginTop: SCREEN_WIDTH * 0.05}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <View>
                      <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                          <View
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[
                              styles.cellRoot,
                              isFocused && styles.focusCell,
                            ]}>
                            <Text style={styles.cellText}>
                              {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                          </View>
                        )}
                      />
                    </View>
                  </View>
                </View>

                <View style={{marginTop: SCREEN_WIDTH * 0.12}}>
                  <Text style={styles.contentText}>
                    I didn't recieve the code{' '}
                    <Text style={styles.contentTextPipe}>|</Text>{' '}
                    <Text
                      disabled={disabled}
                      onPress={handleResend}
                      style={styles.resendText}>
                      Resend OTP
                    </Text>
                  </Text>
                </View>

                <View style={{}}>
                  <CountDown
                    key={random}
                    timeToShow={['M', 'S']}
                    until={counter}
                    onFinish={() => setDisabled(() => false)}
                    size={15}
                    style={{marginRight: SCREEN_WIDTH * 0.2}}
                    digitStyle={null}
                    timeLabelStyle={styles.otpTime}
                    separatorStyle={{color: '#1CC625'}}
                    timeLabels={{m: 'Sec', s: ' Left'}}
                    showSeparator
                    separatorStyle={{
                      color: Colors.Mostly_Black_Gray_Dark,
                      marginTop: 5,
                    }}
                  />
                </View>
                <View>
                  <GetOtpButton
                    onPress={() => navigation.navigate('Schedule Appointment')}
                    button={{top: SCREEN_HEIGHT * 0.08}}
                    verifyOtp={'Verify OTP'}
                    verifyButtonText={styles.verifyButton}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View
        style={{
          width: SCREEN_WIDTH * 1.0,
          paddingHorizontal: 14,
          flex: 1.6,
          backgroundColor: Colors.FloralWhite,
        }}>
        <ScrollView>
          <View style={{}}>
            <View style={styles.crossBack}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignupOtpScreen')}>
                <Svg viewBox="0 0 24 24" width="24" height="24">
                  <G transform="translate(-5 -5)">
                    <Path
                      id="Path_123"
                      data-name="Path 123"
                      d="M29,7.417,26.583,5,17,14.583,7.417,5,5,7.417,14.583,17,5,26.583,7.417,29,17,19.417,26.583,29,29,26.583,19.417,17Z"
                      transform="translate(0 0)"
                      fill="#191919"
                    />
                  </G>
                </Svg>
              </TouchableOpacity>
            </View>

            <View style={styles.topViewContent}>
              <Text style={styles.topTextBorder}></Text>
              <Text style={styles.textLogin}>LOGIN NOW</Text>
            </View>
            <Text style={styles.contantTextSmall}>
              Enter your Mobile Number and verify {'\n'}OTP to login your
              account.
            </Text>
            <View style={{top: SCREEN_HEIGHT * 0.11}}>
              <CustomTextInput
                maxLength={10}
                Label={'Mobile Number'}
                autoCapitalize="none"
                keyboardType="phone-pad"
                IconName={'cellphone'}
                IconSize={22}
                IconColor={Colors.Cell_Phone_Heavy_Dark}
                TextInputProps={{
                  onChangeText: text => setPhone(text),
                  value: phone,
                }}
              />
            </View>

            <View style={{top: 25}}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPressIn={() => loginUser()}
                // onPressOut={() => setModalVisible(true)}
              >
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
            <View style={styles.contentTextSection}>
              <Text style={styles.contentTextFirst}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignupOtpScreen')}>
                <Text style={styles.contentTextSecond}>
                  {' '}
                  Create New Account
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: SCREEN_HEIGHT * 0.025}}>
              <View style={{marginTop: 5}}>
                <View style={styles.contentBorderLeft}></View>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: Colors.Dark_Grayish_Blue,
                  }}>
                  or continue with
                </Text>
                <View style={styles.contentBorderRight}></View>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', marginTop: SCREEN_HEIGHT * 0.048}}>
              <View>
                <TouchableOpacity
                  onPress={() => fbLogin()}

                  activeOpacity={0.8}
                  style={styles.facebookShadow}>
                  <View style={styles.BottomButtonFacebookFirst}>
                    <Svg
                      style={{marginLeft: 22}}
                      id="facebook-logo-2019"
                      width="17.415"
                      height="17.415"
                      viewBox="0 0 17.415 17.415">
                      <G>
                        <Path
                          id="Path_12"
                          data-name="Path 12"
                          d="M17.415,8.706a8.708,8.708,0,1,0-10.068,8.6V11.223H5.136V8.706H7.347V6.788A3.073,3.073,0,0,1,10.636,3.4a13.392,13.392,0,0,1,1.949.17V5.713h-1.1a1.258,1.258,0,0,0-1.419,1.36V8.706h2.415L12.1,11.223H10.068v6.084A8.709,8.709,0,0,0,17.415,8.706Z"
                          fill="#1877f2"
                        />
                      </G>
                    </Svg>
                    <Text style={styles.BottomTextFacebookFirst}>FACEBOOK</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => googleLogin()}
                  style={styles.googleShadow}>
                  <View style={styles.BottomButtonGoogleSecond}>
                    <Svg
                      id="google"
                      width="17.211"
                      height="17.563"
                      viewBox="0 0 17.211 17.563"
                      style={{marginLeft: 25}}>
                      <G>
                        <Path
                          id="Path_14"
                          data-name="Path 14"
                          d="M138.98,108.556a7.526,7.526,0,0,0-.185-1.8H130.55v3.259h4.839a4.291,4.291,0,0,1-1.8,2.849l-.016.109L136.185,115l.181.018a8.586,8.586,0,0,0,2.615-6.459"
                          transform="translate(-121.769 -99.58)"
                          fill="#4285f4"
                        />
                        <Path
                          id="Path_15"
                          data-name="Path 15"
                          d="M21.77,163.415a8.37,8.37,0,0,0,5.815-2.127l-2.771-2.147a5.2,5.2,0,0,1-3.044.878,5.286,5.286,0,0,1-5-3.649l-.1.009-2.711,2.1-.035.1a8.775,8.775,0,0,0,7.845,4.84"
                          transform="translate(-12.988 -145.852)"
                          fill="#34a853"
                        />
                        <Path
                          id="Path_16"
                          data-name="Path 16"
                          d="M3.786,77.033A5.406,5.406,0,0,1,3.493,75.3a5.681,5.681,0,0,1,.283-1.737l0-.116L1.026,71.312l-.09.043a8.763,8.763,0,0,0,0,7.884l2.849-2.205"
                          transform="translate(0 -66.515)"
                          fill="#fbbc05"
                        />
                        <Path
                          id="Path_17"
                          data-name="Path 17"
                          d="M21.77,3.4a4.867,4.867,0,0,1,3.4,1.307l2.478-2.42A8.437,8.437,0,0,0,21.77,0a8.775,8.775,0,0,0-7.845,4.839l2.839,2.205A5.308,5.308,0,0,1,21.77,3.4"
                          transform="translate(-12.988)"
                          fill="#eb4335"
                        />
                      </G>
                    </Svg>

                    <Text style={styles.BottomTextGoogleSecond}>GOOGLE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {loded == true ? navigation.navigate('LocationScreen') : null}
            <View style={styles.BottomSolvekarLogo}>
              <Svg viewBox="0 0 117.61 88.429">
                <Image
                  width="117.61"
                  height="88.429"
                  xlinkHref={require('../../Assets/Images/HeadPhonesLogo/logo_primary_png-image.png')}
                />
              </Svg>
            </View>
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
  cellRoot: {
    width: 60,
    margin: 8,
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: Colors.Mostly_White,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.LimeGreen,
    backgroundColor: Colors.White,
  },

  modalView: {
    width: '100%',
    height: 410,
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
  otpTextModal: {
    marginTop: 12,
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: FontFamily.semibold,
    color: Colors.Black,
  },
  topSmallText: {
    color: Colors.Dark_Gray,
    textAlign: 'center',
    fontFamily: FontFamily.regular,
  },
  numberText: {
    color: Colors.LimeGreen,
    fontFamily: FontFamily.medium,
  },
  contentText: {
    alignSelf: 'center',
    fontFamily: FontFamily.regular,
    color: Colors.Dark_Gray,
  },
  contentTextPipe: {
    fontSize: 13,
    fontFamily: FontFamily.regular,
  },
  resendText: {
    color: Colors.Strong_Blue,
    fontFamily: FontFamily.medium,
  },
  otpTime: {
    color: Colors.Mostly_Black_Gray_Dark,
    fontWeight: 'bold',
    left: 70,
    marginTop: -30,
    fontSize: 15,
  },
  verifyButton: {
    alignSelf: 'center',
    marginTop: SCREEN_WIDTH * 0.04,
    color: Colors.White,
    fontFamily: FontFamily.medium,
    fontSize: 13,
  },

  crossBack: {
    top: 28,
  },
  topViewContent: {
    top: 60,
    height: 22,
    flexDirection: 'row',
  },
  topTextBorder: {
    height: 27,
    width: 3,
    borderLeftWidth: 4,
    borderColor: Colors.LimeGreen,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textLogin: {
    top: -3,
    height: 30,
    paddingLeft: 6,
    fontSize: 24,
    fontFamily: FontFamily.semibold,
    color: Colors.Mostly_Black,
  },
  contantTextSmall: {
    top: 73,
    fontSize: 12,
    lineHeight: 22.9,
    fontFamily: FontFamily.regular,
    color: Colors.Mostly_Black,
  },
  TextInputNumber: {
    color: Colors.LimeGreen,
    fontFamily: FontFamily.medium,
    fontSize: 12,
  },
  cellPhoneIcon: {
    right: 4,
    bottom: 26,
  },

  contentButton: {
    width: 332,
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.LimeGreen,
    top: 65,
    justifyContent: 'center',
    position: 'absolute',
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
  contentTextSection: {
    alignSelf: 'center',
    marginTop: 175,
    flexDirection: 'row',
  },
  contentTextFirst: {
    color: Colors.Mostly_Black_DARK,
  },
  contentTextSecond: {
    color: Colors.LimeGreen,
  },
  contentBorderLeft: {
    top: 11,
    width: 110,
    borderTopWidth: 0.9,
    borderColor: Colors.Light_Grayish_Blue,
  },
  contentBorderRight: {
    bottom: 8,
    alignSelf: 'flex-end',
    width: 110,
    borderTopWidth: 1.2,
    borderColor: Colors.Light_Grayish_Blue,
  },
  facebookShadow: {
    shadowColor: Colors.Bright_Blue,
    elevation: 2,
    borderRadius: 5,
    shadowOpacity: 2,
  },
  BottomButtonFacebookFirst: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 160,
    borderRadius: 5,
    padding: 10,
    margin: 1,
    paddingTop: 10,
    borderWidth: 0.3,
    borderColor: Colors.Light_Grayish,
    backgroundColor: Colors.White,
  },
  googleShadow: {
    shadowColor: Colors.Bright_Blue,
    elevation: 2,
    borderRadius: 5,
    shadowOpacity: 2,
    marginLeft: 9,
  },
  BottomButtonGoogleSecond: {
    alignItems: 'center',
    flexDirection: 'row',

    width: 159,
    borderRadius: 5,
    padding: 10,
    margin: 1,
    paddingTop: 10,
    borderWidth: 0.3,
    borderColor: Colors.Light_Grayish,
    backgroundColor: Colors.White,
  },
  BottomTextGoogleSecond: {
    marginTop: 4,
    marginLeft: 7,
    color: Colors.Cinnabar,
    fontFamily: FontFamily.semibold,
  },
  BottomTextFacebookFirst: {
    marginLeft: 7,
    marginTop: 4,
    color: Colors.Dodger_Blue,
    fontFamily: FontFamily.semibold,
  },
  BottomSolvekarLogo: {
    height: SCREEN_HEIGHT * 0.18,
    width: SCREEN_WIDTH * 0.35,
    marginTop: SCREEN_HEIGHT * 0.12,
    alignSelf: 'center',
    bottom: 10,
  },
});
