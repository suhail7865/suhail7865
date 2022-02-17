import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../../Helper/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {CustomTextInput} from '../../Component/CustomTextInput';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {TouchableOpacity} from 'react-native';
import {CustomPasswordInput} from '../../Component/CustomPasswordInput';
import {LoginVender} from '../../Helper/API_Call/API_Call';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginVendor({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errortext, setErrortext] = useState('');

  const Login = () => {
    setErrortext('');
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    LoginVender(email, password)
    .then(async res => {
        let response = res.data;
        // console.log(response, '......................response');
        Toast.show({
          text1: 'Logged in Successfully!',
          duration: 100,
        });
        if (!email) {
          alert('Please fill Email');
          return;
        }
        if (!password) {
          alert('Please fill Password');
          return;
        }
        
        if (response.status === 200) {
          let value = {
            vender_id: response.vendor_id,
          };
          Toast.show({
            text1: 'Registration Success',
            duration: 100,
          });
          _storeData(value);
          navigation.replace('VandorTab');
        } else {
          // setErrortext(response.msg);
          console.log('please check your Email ID or Password');
          // Toast.show({
          //   type: 'error',
          //   text1: 'Already Registered Your Phone And Email Try to Another No',
          // });
          alert(response.msg);
        }
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  const _storeData = async value => {
    try {
      //we have to wait until AsyncStorage.setItem() returns a promise
      var item = await AsyncStorage.setItem('vendor', JSON.stringify(value));
      return item;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 10}}>
        <View style={{top: 10, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <Icon
              name="arrowleft"
              style={{marginHorizontal: 5}}
              size={25}
              color={Colors.LimeGreen}
            />
          </TouchableOpacity>
          <Image
            style={styles.topImg}
            source={require('../../Assets/Images/Select_user/consultation_active.png')}
          />
          <Text style={styles.txtHead}>CONSULTANT</Text>
        </View>
        <View style={styles.logo}>
          <Image
            style={{resizeMode: 'stretch'}}
            source={require('../../Assets/Images/Welcome_pgs/logo.png')}
          />
          <View style={{marginTop: 25, paddingHorizontal: 5}}>
            <View style={styles.txtWel}>
              <View style={styles.leftLine} />
              <Text style={styles.txtBlack}>Welcome Back!</Text>
            </View>
            <Text style={styles.txtSmall}>
              Enter Your email id and password to Login your account
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: SCREEN_HEIGHT * 0.12, marginHorizontal: 20}}>
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
      <View style={{marginHorizontal: 20, top: 10, flexDirection: 'row'}}>
        <CustomPasswordInput
          Label={'Password'}
          autoCapitalize="none"
          IconName={'lock-outline'}
          IconSize={22}
          IconColor={Colors.LimeGreen}
          TextInputProps={{
            onChangeText: text => setPassword(text),
            value: password,
          }}
        />
      </View>
        {errortext != '' ? (
          <Text style={styles.errorTextStyle}>{errortext}</Text>
        ) : null}
      <View style={{flexDirection: 'row-reverse'}}>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.txtForgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnBottom}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          activeOpacity={0.8}
          onPress={() => Login()}>
          <Text style={styles.textStyle}>Login Now</Text>
          <Icon
            name="arrowright"
            size={19}
            color="#fff"
            style={{top: 3, left: 3}}
          />
        </TouchableOpacity>
      </View>
      <View style={{top: 70, marginHorizontal: 10, alignSelf: 'center'}}>
        <Text style={styles.txt}>
          Don't have an account?{' '}
          <Pressable onPress={() => navigation.navigate('Signup Vendor')}>
            <Text style={[styles.txtGreen]}>Create new account</Text>
          </Pressable>{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fffe',
  },
  topImg: {
    marginHorizontal: 5,
    height: 30,
    width: 30,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    top : 20
  },
  txtHead: {
    marginHorizontal: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.LimeGreen,
  },
  logo: {
    flexDirection: 'row-reverse',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  txtWel: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  leftLine: {
    height: 25,
    borderRightWidth: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderRightColor: Colors.LimeGreen,
    marginRight: 5,
  },
  txtBlack: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: Colors.Mostly_Black,
  },
  txtSmall: {
    left: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    lineHeight: 18,
    color: Colors.Mostly_Black,
    maxWidth: 200,
  },
  forgotPassword: {
    width: 130,
    top: 30,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Week_Black,
  },
  txtForgot: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Week_Black,
  },
  btnBottom: {
    top: 50,
    elevation: 2,
    width: SCREEN_WIDTH * 0.9,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    backgroundColor: Colors.LimeGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  txtGreen: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.LimeGreen,
    fontSize: 12,
    top: 8,
  },
  txt: {
    fontFamily: 'Poppins-Regular',
    color: '#212121',
    fontSize: 12,
  },
});
