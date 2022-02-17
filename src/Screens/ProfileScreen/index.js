import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import {SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import  { getProfileData}  from '../../Helper/API_Call/API_Call';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProfileScreen({navigation}) {
  const [isFetching, setisFetching] = useState(true);
  const [SetFullNameKey, SetFullName] = useState(null);
  const [setEmailKey, setEmail] = useState(null);
  const [setPhoneKey, setPhone] = useState(null);
  const [setImageKey, setImage] = useState(null);


useEffect(() => {
  getuserProfileData(); 
  setTimeout(() => {
    setisFetching(false);
  }, 200);
}, []);

const getuserProfileData = async () => {
  const jsonValue =  await AsyncStorage.getItem('user');
  const jsonValue1 = JSON.parse(jsonValue);
  // console.log(jsonValue1.user_id, '-------edit pro');
  getProfileData(jsonValue1.user_id)
    .then(async res => {
      let response = res.data.data[0];
        SetFullName(response.fullname);
        setEmail(response.email);
        setPhone(response.phone);
        setImage(response.image);
        console.log(setImageKey, '-----------image')
      // console.log(SetFullNameKey, "...................profileKey");
    })
    .catch(err => {
      let error = err;
      console.log(error);
    });
};

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={{uri:setImageKey}}
          style={{marginVertical: 5, left: 5, height: 65, width: 65}}
        />
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('Edit Profile',{name:SetFullNameKey,email:setEmailKey,phone:setPhoneKey,image:setImageKey})}>
          <View style={styles.editBtn}>
            <Text style={styles.txtEdit}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{top: 10, marginLeft: 10}}>
        <Text style={styles.heading}>Basic Details</Text>
      </View>
      <View style={{backgroundColor: '#ffffff', marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 12,
            alignItems: 'center',
          }}>
          <View style={styles.iconView}>
            <Icon name="account-outline" size={25} color={'#04dca9'} />
          </View>
          <View style={{justifyContent: 'center', marginVertical: 5}}>
            <Text style={styles.txtLabel}>Name</Text>
            <Text style={styles.txtDetails}>{SetFullNameKey}</Text>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <View style={styles.iconView}>
            <Icon name="cellphone-android" size={25} color={'#04dca9'} />
          </View>
          <View style={{justifyContent: 'center', marginVertical: 5}}>
            <Text style={styles.txtLabel}>Mobile No.</Text>
            <Text style={styles.txtDetails}>+91{setPhoneKey}</Text>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <View style={styles.iconView}>
            <Icon name="email-outline" size={25} color={'#04dca9'} />
          </View>
          <View style={{justifyContent: 'center', marginVertical: 5}}>
            <Text style={styles.txtLabel}>E-mail</Text>
            <Text style={styles.txtDetails}>{setEmailKey}</Text>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 12, marginLeft: 16}}>
        <Text style={styles.heading}>Other</Text>
      </View>
      <View style={{backgroundColor: '#ffffff', marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.iconView}>
            <Icon name="tune" size={25} color={'#1b1b1b'} />
          </View>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('Settings')}>
            <View style={{flexDirection: 'row',top:5}}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  color: '#1b1b1b',
                }}>
                Settings
              </Text>
              <MaterialIcons
                style={{left: SCREEN_WIDTH * 0.5}}
                name="keyboard-arrow-right"
                size={30}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:20}}>
      <TouchableOpacity style={styles.logout}>
          <Text style={styles.txtRed}>LOGOUT</Text>
          <Entypo name='log-out' style={{left:10}} size={19} color={"red"} />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fcff',
  },
  top: {
    marginTop: 16,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  editBtn: {
    margin: 16,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#09dca4',
    backgroundColor: '#e9fbfb',
  },
  txtEdit: {
    color: '#09dca4',
    fontFamily: 'Poppins-Regular',
  },
  txtEdit: {
    color: '#09dca4',
    fontFamily: 'Poppins-Regular',
  },
  txtRed: {
    color: '#E80000',
    fontFamily: 'Poppins-SemiBold',
    
  },
  heading: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    color: '#1b1b1b',
  },
  txtLabel: {
    fontFamily: 'Poppins-Regular',
    color: '#6F7C8E',
    fontSize: 13,
  },
  iconView: {
    marginHorizontal: 16,
    backgroundColor: '#f5fefb',
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
  txtDetails: {
    fontFamily: 'Poppins-SemiBold',
    color: '#1b1b1b',
    fontSize: 14,
  },
  logout:{
      flexDirection:'row',
      marginHorizontal:16,
      height:50,
      width:SCREEN_WIDTH*0.91,
      backgroundColor:'#f2f7fa',
      alignItems:'center',
      justifyContent:'center',
      borderColor:'red',
      borderRadius:10,
      borderWidth:1,
  }
});
