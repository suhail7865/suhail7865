import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {CustomTextInput} from '../../Component/CustomTextInput';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from '../../Helper/Colors';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';

import {useRoute} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getVenderProfileData} from '../../Helper/API_Call/API_Call';

export default function EditVendorProfile({navigation}) {
  const [address, setAddress] = useState();
  const [officeName, setOfficeName] = useState();
  const [pin, setPin] = useState();
  const [area, setArea] = useState();
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusAdd, setIsFocusAdd] = useState(false);
  const [isFocusPin, setIsFocusPin] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState();

  const route = useRoute();
  const [imageUri, setImageUri] = useState('');
  const [email, setEmail] = useState(route?.params?.email);
  const [mobile, setMobile] = useState(route?.params?.phone);
  const [name, setName] = useState(route?.params?.name);
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('')
  const [skill, setSkills] = useState('');

  const [setImageKey, setImage] = useState(route?.params?.image);
  const [setIsValidKey, setIsValid] = useState(false);
  const [setVendorDataKey, setVendorDataValue] = useState('');


  useEffect(() => {
    EditProfileUser();
  }, []);

  const EditProfileUser = async () => {
    const jsonValue = await AsyncStorage.getItem('vendor');
    const vendorData = JSON.parse(jsonValue);
   
    if(vendorData.vender_id){
      getVenderProfileData(vendorData.vender_id)
        .then(async res => {
          let response = res.data.data;
          setVendorDataValue(response[0]);
          setName(response[0]['name']);
          setMobile(response[0]['mobile']);
          setEmail(response[0]['email']);
          setEducation(response[0]['education']);
          setExperience(response[0]['experience']);
          setAddress(response[0]['address']);
          setSkills(response[0]['course']);
         
          console.log(response[0], 'edu')
          // setImageUri(response[0]['image']);
          
        })
        .catch(err => {});
    }
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
      bottom: 10,
      position: 'absolute',
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
    txtBlue: {
      fontFamily: 'Poppins-Regular',
      color: '#11abe6',
      fontSize: 12,
      marginHorizontal: 10,
    },
    txtBlack: {
      fontFamily: 'Poppins-Regular',
      color: '#1b1b1b',
      fontSize: 12,
    },
    cardSkill: {
      marginHorizontal: 10,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      elevation: 2,
      borderRadius: 10,
    },
    inp: {
      width: SCREEN_WIDTH * 0.7,
      marginHorizontal: 5,
      fontFamily: 'Poppins-Regular',
      color : Colors.Mostly_Black
    },
    plus: {
      borderRadius: 5,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'dotted',
      borderWidth: 1,
      borderColor: '#09dca4',
    },
    closeButton: {
      marginTop: SCREEN_HEIGHT * 0.1,
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderRadius: 50,
      padding: 10,
    },
    modalContainer: {
      flex: 3,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modelView: {
      width: '100%',
      height: SCREEN_HEIGHT * 0.88,
      backgroundColor: '#fff',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      shadowColor: 'black',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 20,
    },
    topHead: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginVertical: 10,
    },
    modelTxt: {
      fontFamily: 'Poppins-ExtraBold',
      color: '#1b1b1b',
      marginLeft: 7,
      fontSize: 15,
    },
    modelInputView: {
      marginHorizontal: 16,
      marginVertical: 5,
      borderColor: isFocus ? '#09dca4' : '#dde1e9',
      borderBottomWidth: 1,
    },
    location: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#09dca4',
      borderRadius: 10,
      elevation: 2,
      width: 150,
      height: 50,
      top: 12,
      marginRight: 10,
      paddingHorizontal: 5,
    },
    modelInputAddView: {
      marginHorizontal: 16,
      marginVertical: 5,
      borderColor: isFocusAdd ? '#09dca4' : '#dde1e9',
      borderBottomWidth: 1,
    },
    modalTxtInput: {
      fontFamily: 'Poppins-Regular',
      color: isFocus ? '#09dca4' : '#1b1b1b',
    },
    modalTxtAddInput: {
      fontFamily: 'Poppins-Regular',
      color: isFocusAdd ? '#09dca4' : '#1b1b1b',
    },
    txtLocation: {
      fontFamily: 'Poppins-Regular',
      fontSize: 11,
      left: 5,
      color: '#fff',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingBottom: SCREEN_HEIGHT * 0.1,
        }}>
        <View style={styles.card}>
          <View style={styles.imgView}>
            <Image source={{imageUri}} style={styles.img} />
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.btnCamera}>
                <Icon name="camera" color={'#fff'} size={20} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 10, marginHorizontal: 16}}>
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
          <View style={{marginVertical: 10, marginHorizontal: 16}}>
            <CustomTextInput
              Label={'Mobile Number'}
              keyboardType="number-pad"
              maxLength={10}
              autoCapitalize="none"
              IconName={'cellphone-android'}
              IconColor={'#09dca4'}
              IconSize={22}
              TextInputProps={{
                Label: 'Full Name',
                onChangeText: text => setMobile(text),
                value: mobile,
              }}
            />
          </View>
          <View style={{marginVertical: 10, marginHorizontal: 16}}>
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
          <View style={{marginVertical: 10, marginHorizontal: 16}}>
            <Text style={styles.txtBlack}>Education</Text>
            <Picker
              style={{borderBottomWidth: 1, borderBottomColor: '#dde1e9'}}
              selectedValue={setEducation}
              onValueChange={(itemValue, itemIndex) =>
                education(itemValue)
              }>
              <Picker.Item label="MCA" value="MCA" />
              <Picker.Item label="BCA" value="BCA" />
            </Picker>
          </View>
          <View style={{marginVertical: 10, marginHorizontal: 16}}>
            <Text style={styles.txtBlack}>Work Experience</Text>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#cbd2de',
                borderBottomWidth: 1,
                alignItems: 'center',
              }}>
              <FontawesomeIcon name="book-reader" size={20} />
              <TextInput
                placeholder="years"
                style={styles.inp}
                onChangeText={text => setText(text)}
                defaultValue={text}
              />
            </View>
          </View>
          <View style={{marginVertical: 10, marginHorizontal: 16}}>
            <CustomTextInput
              Label={'Address'}
              autoCapitalize="none"
              IconName={'map-marker'}
              IconSize={22}
              IconColor={'#09dca4'}
              TextInputProps={{
                IconName: 'celphone',
                onChangeText: text => setAddress(text),
                value: address,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Text style={styles.txtBlue}>Update Location</Text>
            <Icon name="arrow-right" size={16} color={'#11abe6'} />
          </TouchableOpacity>
          <View style={{left: 10, marginVertical: 5}}>
            <Text style={styles.txtBlack}>Skills</Text>
          </View>
          <View style={styles.cardSkill}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#09dca4',
                borderBottomWidth: 1,
                alignItems: 'center',
              }}>
              <AntIcon name="edit" size={20} />
              <TextInput
                placeholder="Add Your Skills"
                style={styles.inp}
                onChangeText={text => setText(text)}
                defaultValue={text}
                TextInputProps={{
                  IconName: 'celphone',
                  onChangeText: text => setSkills(text),
                  value: skill,
                }}
              />
            </View>
            <TouchableOpacity style={styles.plus}>
              <AntIcon name="plus" color={'#09dca4'} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert = 'Modal has been close';
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
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
          <View style={styles.modelView}>
            <View style={styles.topHead}>
              <Text style={styles.modelTxt}>Update Location</Text>
            </View>
            <View style={styles.modelInputView}>
              <Text style={[styles.modalTxtInput]}>Office Building Name</Text>
              <TextInput
                autoCapitalize="none"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                TextInputProps={{
                  Label: 'Full Name',
                  onChangeText: text => setOfficeName(text),
                  value: officeName,
                }}
              />
            </View>
            <View style={[styles.modelInputAddView]}>
              <Text style={[styles.modalTxtAddInput]}>
                Road Name,Area,Colony
              </Text>
              <TextInput
                autoCapitalize="none"
                onFocus={() => setIsFocusAdd(true)}
                onBlur={() => setIsFocusAdd(false)}
                TextInputProps={{
                  Label: 'Full Name',
                  onChangeText: text => setArea(text),
                  value: area,
                }}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  marginHorizontal: 16,
                  width: 160,
                  top: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: '#dde1e9',
                }}>
                <Text style={{fontFamily: 'Poppins-Regular', color: '#1b1b1b'}}>
                  City
                </Text>
                {/* <Picker
                  style={{borderBottomWidth: 1, borderBottomColor: '#dde1e9'}}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item label="Indore" value="indore" />
                  <Picker.Item label="Balaghat" value="bgt" />
                </Picker> */}
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                  width: 150,
                  top: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: '#dde1e9',
                }}>
                <Text style={{fontFamily: 'Poppins-Regular', color: '#1b1b1b'}}>
                  State
                </Text>
                {/* <Picker
                  style={{borderBottomWidth: 1, borderBottomColor: '#dde1e9'}}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item label="Maharashtra" value="mh" />
                  <Picker.Item label="Madhya Pradesh" value="mp" />
                </Picker> */}
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: 16,
              }}>
              <View
                style={{
                  marginHorizontal: 10,
                  width: 150,
                  left: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: isFocusPin ? '#09dca4' : '#dde1e9',
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: isFocusPin ? '#09dca4' : '#1b1b1b',
                  }}>
                  Pin Code
                </Text>
                <TextInput
                  autoCapitalize="none"
                  onFocus={() => setIsFocusPin(true)}
                  onBlur={() => setIsFocusPin(false)}
                  TextInputProps={{
                    Label: 'Full Name',
                    onChangeText: text => setPin(text),
                    value: pin,
                  }}
                />
              </View>
              <TouchableOpacity style={styles.location}>
                <FoundationIcon name="target-two" color={'#fff'} size={20} />
                <Text style={styles.txtLocation}>Use Current Location</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.bottomView} onPress={() => EditProfileUser()} activeOpacity={0.8}>
        <Text style={styles.textStyle}>Udate Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
