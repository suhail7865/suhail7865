import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  StatusBar,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountDown from 'react-native-countdown-component';
import {ScrollView} from 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import Svg, {G, Path, Image} from 'react-native-svg';
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
import {CustomTextInput} from '../../Component/CustomTextInput';
import {SignUp, MatchOtp} from '../../Helper/API_Call/API_Call';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useValidation} from 'react-native-form-validator';

export function SignupOtpScreen({navigation}) {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);
  const [counter, SetCounter] = useState(80);
  const [random, SetRandom] = useState(Math.random());
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef('codeInputRef2');
  const [modalVisible, setModalVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setNumber] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;

  const handleResend = () => {
    SetRandom(Math.random());
  };

  const [isValid, setIsValid] = useState(false);
 

  const validateEmail = (name, phone, email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!email) {
      alert('Email Required');
    } else if (reg.test(email) === false) {
      alert('Invalid email address');
    } else {
      validatePhone(name, phone, email);
    }
  };
  const validatePhone = (name, phone, email) => {
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
  const validateName = (name, phone, email) => {
    if (!name) {
      alert('Name Required');
    } else {
      validateEmail(name, phone, email);
    }
  };
  const SubmitRegister = () => {
    const signupValidForm = validateName(name, phone, email);
    // console.log('setIsValid');
    // console.log(isValid);

    SignUp(name, email, phone)
      .then(async res => {
        let response = res;
       
        if (response.data.status == 200) {
          Toast.show({
            text1: 'Logged in Successfully!',
            duration: 100,
          });
          //setValue(response.data.otp);
          setModalVisible(true);
          let newOtp = response.data.otp;
          // console.log(typeof newOtp + '------------otp');
          setValue(newOtp.toString());
          return newOtp;

        }else {
          alert(response.data.msg)
        }
      })
      .catch(err => {
        setLoading(false);
        let error = err;
        console.log(error);
      });
  };

  const CheckOtp = () => {
    MatchOtp(phone, value)
      .then(async res => {
        let response = res.data;
        console.log(response);
        if (response.status == 200) {
          let value = {
            user_id: response.user_id,
          };
          Toast.show({
            text1: 'Logged in Successfully!',
            duration: 100,
          });
          _storeData(value);
        } else {
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: 'OTP not Match',
          });
          console.log('not match');
        }
        return response;
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
      return item;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
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
                        keyboardType="numeric"
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

                <View>
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
                    //  onPress={() => navigation.navigate('Schedule Appointment')}
                    onPress={() => CheckOtp()}
                    button={{top: SCREEN_HEIGHT * 0.08}}
                    verifyOtp={'0012'}
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
          flex: 1,
          backgroundColor: Colors.FloralWhite,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 0.8}}>
            <View style={styles.crossBack}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginOtpScreen')}>
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
              <Text style={styles.textCreateAccount}>CREATE ACCOUNT</Text>
            </View>
            <Text style={styles.contantTextSmall}>
              Enter the following fields and Verify OTP{'\n'}to create a new
              account.
            </Text>
            <View style={{top: 75}}>
              <View style={{marginTop: SCREEN_HEIGHT * 0.03}}>
                <CustomTextInput
                  Label={'Full Name'}
                  autoCapitalize="none"
                  IconName={'account-outline'}
                  IconSize={22}
                  IconColor={Colors.LimeGreen}
                  TextInputProps={{
                    onChangeText: text => setName(text),
                    value: name,
                  }}
                />
              </View>
              <View style={{marginTop: SCREEN_HEIGHT * 0.03}}>
                <CustomTextInput
                  Label={'Email ID'}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  IconName={'email-outline'}
                  IconSize={22}
                  IconColor={Colors.LimeGreen}
                  TextInputProps={{
                    onChangeText: text => setEmail(text),
                    value: email,
                  }}
                />
              </View>
              <View style={{marginTop: SCREEN_HEIGHT * 0.03}}>
                <CustomTextInput
                  Label={'Mobile Number'}
                  autoCapitalize="none"
                  keyboardType="numeric"
                  IconName={'cellphone-android'}
                  IconSize={22}
                  IconColor={Colors.LimeGreen}
                  TextInputProps={{
                    onChangeText: text => setNumber(text),
                    value: phone,
                  }}
                />
              </View>
            </View>
            <View style={{top: SCREEN_HEIGHT * 0.1}}>
              <TouchableOpacity
                // disabled={}
                activeOpacity={0.8}
                onPressIn={() => SubmitRegister()}>
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
                onPress={() => navigation.navigate('LoginOtpScreen')}>
                <Text style={styles.contentTextSecond}> Login Now </Text>
              </TouchableOpacity>
            </View>

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
    // Signup Screen End
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
    height: 410,
    backgroundColor: Colors.White,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    shadowColor: Colors.Black,
    shadowColor: Colors.White,
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 20,
  },
  wrapper: {
    flex: 0.4,
    backgroundColor: Colors.White,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  closeButton: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 50,
    padding: 10,
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
  cellRoot: {
    width: 60,
    margin: 8,
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: Colors.Mostly_White,
  },
  cellText: {
    color: Colors.Mostly_Black_Gray_Dark,
    fontSize: 23,
    textAlign: 'center',
    fontFamily: FontFamily.Giloy_Medium,
  },
  focusCell: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.LimeGreen,
    backgroundColor: Colors.White,
  },

  roundedTextInput: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: Colors.Mostly_White,
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
    marginTop: SCREEN_WIDTH * 0.045,
    color: Colors.White,
    fontFamily: FontFamily.medium,
    fontSize: 13,
  },
  modalBoxs: {
    overflow: 'hidden',
    alignItems: 'center',
    height: 500,
    width: 500,
    backgroundColor: 'red',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    backgroundColor: 'red',
    height: 400,
    width: 500,
  },
  textStyle: {
    fontSize: 22,
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
  textCreateAccount: {
    top: -3,
    height: 33,
    paddingLeft: 6,
    fontSize: 24,
    fontFamily: FontFamily.semibold,
    color: Colors.Mostly_Black,
  },
  contantTextSmall: {
    top: 77,
    fontSize: 12,
    lineHeight: 21.0,
    fontFamily: FontFamily.regular,
    color: Colors.Mostly_Black,
  },
  personIcon: {
    bottom: 26,
  },
  cellPhoneIcon: {
    bottom: 26,
  },
  contentButton: {
    width: 330,
    height: 50,
    backgroundColor: Colors.LimeGreen,
    top: 57,
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
    marginTop: SCREEN_HEIGHT * 0.28,
    flexDirection: 'row',
  },
  contentTextFirst: {
    color: Colors.Mostly_Black_DARK,
  },
  contentTextSecond: {
    color: Colors.LimeGreen,
  },

  BottomSolvekarLogo: {
    height: SCREEN_HEIGHT * 0.18,
    width: SCREEN_WIDTH * 0.35,
    marginTop: SCREEN_HEIGHT * 0.08,
    alignSelf: 'center',
    bottom: 20,
  },
});
