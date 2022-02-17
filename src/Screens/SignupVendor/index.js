import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  StatusBar,
  Pressable,
  Modal,
} from 'react-native';
import {Colors} from '../../Helper/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomTextInput} from '../../Component/CustomTextInput';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {TouchableOpacity} from 'react-native';
import {CustomPasswordInput} from '../../Component/CustomPasswordInput';
import {RevealFromBottomAndroidSpec} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import DocumentPicker from 'react-native-document-picker';
import {RagisterVender, getCategoryData} from '../../Helper/API_Call/API_Call';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetOtpButton} from '../../Component/GetOtpButton';
import {FontFamily} from '../../Helper/FontFamily';

export default function SignupVendor({navigation}) {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profession, setProfession] = useState('');
  const [value, setValue] = useState('');

  const [isActive, setIsActive] = useState({
    id: 0,
    text: 'Add Your professional document in pdf format',
  });
  const [isActiveCate, setIsActiveCate] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [professionKey, professionValue] = useState([]);
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    getVendorProfesion();
    setTimeout(() => {
      setisFetching(false);
    }, 200);
  }, []);

  const ragister = () => {
    //RagisterVender(mobile, email, name, password, setIsActive.id)
    RagisterVender(name, email, mobile, password, isActive.id)
      .then(async res => {
        let response = res.data;
        // console.log(response.status, '......................response');
        Toast.show({
          text1: 'Logged in Successfully!',
          duration: 100,
        });
        if (!name) {
          alert('Please fill Full Name');
          return;
        }
        if (!mobile) {
          alert('Please fill Mobile Number');
          return;
        }
        if (!email) {
          alert('Please fill Email');
          return;
        }

        if (!password) {
          alert('Please fill Password');
          return;
        }
        // setModalVisible(truefalse);
        if (response.status == 200) {
          let value = {
            vender_id: response.vendor_id,
          };
          Toast.show({
            text1: 'Registration Success',
            duration: 100,
          });
          _storeData(value);
          // const jsonValue =  await AsyncStorage.getItem('vendor');
          // console.log(jsonValue, "json value");
          navigation.navigate('VandorTab');
        } else {
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Already Registered Your Phone And Email Try to Another No',
          });
          alert(response.msg);
        }
      })
      .catch(err => {
        setLoading(false);
        let error = err;
        console.log(error);
      });
  };
  const getVendorProfesion = () => {
    getCategoryData()
      .then(async res => {
        let response = res;
        professionValue(response.data.categories);
        //console.log(professionKey, '-------professionKey')
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

  const renderItem = ({item}) => (
    <Item id={item.id} image={item.category_icon} text={item.category_name} />
  );

  const Item = ({image, id, text}) => (
    <View style={[{backgroundColor: 'red'}]}>
      <Pressable
        onPress={() => setIsActive({id: id, text: text})}
        style={[
          styles.smallCard,
          {borderColor: isActive.id === id ? '#09dca4' : '#ebeff8'},
        ]}>
        <Image
          //onPress={() => setIsActiveCate(text)}
          source={{uri: image}}
          style={{flex: 0.5, width: '40%', resizeMode: 'stretch'}}
        />
        <Text
          style={[
            styles.text,
            {color: isActive.id === id ? '#09dca4' : '#1b1b1b'},
          ]}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
  // console.log(isActive.text,"..........is active");
  return (
    <View style={styles.container}>
      <View style={styles.modelContainer}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modelContainer}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <AntDesignIcon
                color="#fff"
                name="close"
                size={19}
                style={styles.closeButton}
              />
            </Pressable>
            <View style={styles.modelView}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 15,
                  marginTop: 18,
                }}>
                <Text
                  style={{fontFamily: 'Poppins-Semibold', color: '#191919'}}>
                  Select Profession
                </Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#f6f6f6',
                  marginTop: 10,
                }}
              />
              <FlatList
                data={professionKey}
                contentContainerStyle={{justifyContent: 'space-between'}}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id.toString()}
              />
              <View style={{marginBottom: 15}}>
                <GetOtpButton
                  onPress={() => setModalVisible(false)}
                  verifyOtp={'Done'}
                  verifyButtonText={styles.btn}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <View style={{top: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="arrowleft"
              style={{marginHorizontal: 5}}
              size={25}
              color={Colors.LimeGreen}
            />
            <Image
              style={styles.topImg}
              source={require('../../Assets/Images/Select_user/consultation_active.png')}
            />
            <Text style={styles.txtHead}>CONSULTANT</Text>
          </View>
          <View style={styles.logo}>
            <View style={{marginTop: 25}}>
              <View style={styles.txtWel}>
                <View style={styles.leftLine} />
                <Text style={styles.txtBlack}>Welcome!</Text>
              </View>
              <Text style={styles.txtSmall}>
                Enter the following details to register your account
              </Text>
            </View>
            <Image
              style={{resizeMode: 'stretch'}}
              source={require('../../Assets/Images/Welcome_pgs/logo.png')}
            />
          </View>
        </View>
        <Text style={styles.txtBasic}>BASIC DETAILS</Text>
        <View style={{marginTop: SCREEN_HEIGHT * 0.03, marginHorizontal: 20}}>
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
        <View style={{marginHorizontal: 20, top: 10}}>
          <CustomTextInput
            Label={'Mobile Number'}
            autoCapitalize="none"
            keyboardType="numeric"
            IconName={'cellphone-android'}
            IconSize={22}
            IconColor={Colors.LimeGreen}
            TextInputProps={{
              onChangeText: text => setMobile(text),
              value: mobile,
            }}
          />
        </View>
        <View style={{marginHorizontal: 20, top: 20}}>
          <CustomTextInput
            Label={'Email ID'}
            autoCapitalize="none"
            IconName={'email-outline'}
            IconSize={22}
            IconColor={Colors.LimeGreen}
            TextInputProps={{
              onChangeText: text => setEmail(text),
              value: email,
            }}
          />
        </View>
        <View style={{marginHorizontal: 20, top: 28}}>
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

        <Text style={[styles.txtBasic, {top: 40}]}>PROFESSION DETAILS</Text>
        <View style={{top: 40}}>
          <Pressable
            style={styles.btnProfession}
            onPress={() => setModalVisible(true)}>
            <Text style={{fontFamily: 'Poppins-SemiBold', color: '#1b1b1b'}}>
              {isActive.text}
            </Text>
            <EntypoIcon name="chevron-thin-down" />
          </Pressable>
        </View>
        <View style={{top: 60, left: 16}}>
          <Text style={styles.txtGray}>
            Add Your professional document in pdf format
          </Text>
        </View>

        <TouchableOpacity style={[styles.btnUpload, {top: 90}]}>
          <MaterialCommunityIcons
            name="upload"
            color={Colors.LimeGreen}
            size={20}
          />
          <Text
            onPress={() => selectFile()}
            style={{fontFamily: 'Poppins-Regular', color: Colors.LimeGreen}}>
            Upload File
          </Text>
        </TouchableOpacity>

        {/* {textInputKey.map(value => {
          return value;
        })} */}

        <View style={{alignSelf: 'flex-end', flexDirection: 'row', top: 70}}>
          <TouchableOpacity
            // onPress={() => addTextInput(textInputKey.length)}
            style={styles.greenAdd}>
            <Text
              style={{fontFamily: 'Poppins-Regular', color: Colors.LimeGreen}}>
              + Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.redCancel}
            onPress={() => removeTextInput()}>
            <Text style={{fontFamily: 'Poppins-Regular', color: 'red'}}>
              x Remove
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnBottom}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            activeOpacity={0.8}
            onPress={() => ragister()}>
            <Text style={styles.textStyle}>Submit</Text>
            <Icon
              name="arrowright"
              size={19}
              color="#fff"
              style={{top: 3, left: 3}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: SCREEN_HEIGHT * 0.01,
    flex: 1,
    backgroundColor: '#f8fffe',
  },
  text: {
    fontFamily: 'Poppins-Reguler',
    top: 8,
  },
  topImg: {
    marginHorizontal: 5,
    height: 30,
    width: 30,
  },
  txtHead: {
    marginHorizontal: 5,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.LimeGreen,
  },
  smallCard: {
    marginVertical: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.29,
    marginHorizontal: 8,
    padding: 10,
    backgroundColor: Colors.White,
    elevation: 1,
    borderWidth: 1,
    borderRadius: 10,
  },
  logo: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  txtWel: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnSquere: {
    height: 80,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 1,
  },
  txtGray: {
    fontFamily: 'Poppins-Regular',
    color: '#7b8898',
    fontSize: 12,
  },
  closeButton: {
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 50,
    padding: 10,
  },
  btnUpload: {
    width: SCREEN_WIDTH * 0.9,
    height: 45,
    borderRadius: 5,
    flexDirection: 'row',
    top: 40,
    marginHorizontal: 16,
    backgroundColor: Colors.LimeGreen,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0fdfa',
    borderWidth: 1,
    borderColor: Colors.LimeGreen,
    borderStyle: 'dotted',
  },
  leftLine: {
    height: 30,
    borderRightWidth: 4,
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
  txtBasic: {
    top: 20,
    left: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.Mostly_Black,
  },
  txtSmall: {
    left: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    lineHeight: 18,
    color: Colors.Mostly_Black,
    maxWidth: 160,
  },
  modelContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modelView: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.87,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: 'black',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 20,
  },
  greenAdd: {
    width: 45,
    top: 20,
    paddingVertical: 7,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LimeGreen,
  },
  redCancel: {
    width: 70,
    top: 20,
    paddingVertical: 7,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  txtForgot: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Week_Black,
  },
  btnBottom: {
    elevation: 2,
    width: SCREEN_WIDTH * 0.9,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    backgroundColor: Colors.LimeGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
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
  },
  txt: {
    fontFamily: 'Poppins-Regular',
    color: '#212121',
    fontSize: 12,
  },
  btnProfession: {
    top: 10,
    left: 16,
    height: 45,
    width: SCREEN_WIDTH * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: '#ebeff8',
    borderRadius: 5,
  },
  btn: {
    color: Colors.White,
    fontFamily: FontFamily.semibold,
    alignSelf: 'center',
    marginTop: 14,
  },
});
