import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {CustomTextInput} from '../../Component/CustomTextInput';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useRoute} from '@react-navigation/native';
import {UserProfile} from '../../Helper/API_Call/API_Call';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfile({navigation}) {
  const route = useRoute();

  const [email, setEmail] = useState(route?.params?.email);
  const [phone, setPhone] = useState(route?.params?.phone);
  const [name, setName] = useState(route?.params?.name);
  const [setImageKey, setImage] = useState(route?.params?.image);
  const [setIsValidKey, setIsValid] = useState(false);
  const [imageKey, imageData] = useState('');

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
        setIsValid(true);
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
  const EditProfileUser = async () => {
    const signupValidForm = validateName(name, phone, email);
    const jsonValue = await AsyncStorage.getItem('user');
    const jsonValue1 = JSON.parse(jsonValue);
    if (setIsValidKey) {
      UserProfile(name, phone, email, jsonValue1.user_id, imageKey)
        .then(async res => {
          console.log(jsonValue1.user_id, '---------sucesss');

          let response = res;
        })
        .catch(err => {});
    }
  };

  // const EditProfileUser = () => {
  //   //const signupValidForm = validateName(full_name, user_id, email);

  //   userProfile()
  //     .then(async res => {
  //       let response = res;
  //       // Toast.show({
  //       //   text1: 'Logged in Successfully!',
  //       //   duration: 100,
  //       // });
  //       //setValue(response.data.otp);
  //       // setModalVisible(true);
  //       let profile = response.data.data;
  //       // console.log(profile + '------------profile');
  //       // setValue(newOtp.toString());
  //       // return newOtp;
  //     })
  //     .catch(err => {
  //       // setLoading(false);
  //       let error = err;
  //       console.log(error);
  //     });
  // };
  const SelectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      imageData(image);
      // console.log(image.path, '.................path');
      // console.log(image.path,".................path");
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2fcff',
    },
    card: {
      marginTop: 10,
      backgroundColor: '#fff',
      elevation: 1,
      borderRadius: 10,
    },
    imgView: {
      alignSelf: 'center',
      height: 110,
      width: 110,
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 16,
      alignItems: 'center',
    },
    img: {
      height: 110,
      width: 110,
      flex: 1,
    },
    label: {
      color: '#cdd1d8',
      fontSize: 15,
      fontFamily: 'Poppins-Regular',
    },
    btnCamera: {
      backgroundColor: '#09dca4',
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      position: 'absolute',
      top: -25,
      left: 28,
    },
    input: {
      fontSize: 15,
      fontFamily: 'Poppins-semiBold',
      width: SCREEN_WIDTH * 0.8,
      marginLeft: 5,
    },
    input2: {
      fontSize: 15,
      fontFamily: 'Poppins-semiBold',
      width: SCREEN_WIDTH * 0.8,
      marginLeft: 5,
    },
    bottomView: {
      width: SCREEN_WIDTH * 0.9,
      height: 50,
      borderRadius: 5,
      marginHorizontal: 16,
      backgroundColor: '#09dca4',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imgView}>
          <Image
            source={{uri: setImageKey}}
            resizeMode="stretch"
            style={styles.img}
          />
          <TouchableOpacity onPressIn={SelectImage} activeOpacity={0.8}>
            <View style={styles.btnCamera}>
              <Icon name="camera" color={'#fff'} size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 16}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomTextInput
              Label={'Full Name'}
              autoCapitalize="none"
              keyboardType="default"
              IconName={'account-outline'}
              IconSize={22}
              IconColor={'#09dca4'}
              TextInputProps={{
                onChangeText: text => setName(text),
                value: name,
              }}
            />
          </View>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 16}}>
          {/* <Text style={styles.label}>Mobile Number</Text> */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomTextInput
              Label={'Mobile Number'}
              keyboardType="number-pad"
              maxLength={10}
              autoCapitalize="none"
              editable={false}
              IconName={'cellphone-android'}
              IconColor={'#09dca4'}
              IconSize={22}
              TextInputProps={{
                Label: 'Full Name',
                onChangeText: text => setPhone(text),
                value: phone,
              }}
            />
          </View>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 16}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomTextInput
              Label={'E-Mail'}
              autoCapitalize="none"
              keyboardType="email-address"
              IconName={'email-outline'}
              IconSize={22}
              IconColor={'#09dca4'}
              
              TextInputProps={{
                IconName: 'celphone',
                onChangeText: text => setEmail(text),
                value: email,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{bottom: 20, position: 'absolute'}}>
        <TouchableOpacity
          style={styles.bottomView}
          activeOpacity={0.8}
          onPressIn={() => navigation.navigate('Profile')}
          onPress={() => EditProfileUser()}>
          <Text style={styles.textStyle}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
