import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../Helper/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import {getDocterDetailsData, getVenderProfileData} from '../../Helper/API_Call/API_Call';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VandorProfile({navigation}) {
  const [isFetching, setisFetching] = useState(true);
  // const [SetNameKey, SetName] = useState(null);
  // const [setEmailKey, setEmail] = useState(null);
  // const [setPhoneKey, setPhone] = useState(null);
  // const [setImageKey, setImage] = useState(null);
  // const [detailsKey, detailsValue] = useState();

  const [setVenderConsoltantKey, setVenderConsoltantValue] = useState('');
  const [setVendorDataKey, setVendorDataValue] = useState('');
  useEffect(() => {
    getVenderData();
    getDetilsUser();
    setTimeout(() => {
      setisFetching(false);
    }, 200);
  }, []);

  const getVenderData = async () => {
    const jsonValue = await AsyncStorage.getItem('vendor');
    const vendorData = JSON.parse(jsonValue);
    getVenderProfileData(vendorData.vender_id)
      .then(async res => {
        let response = res.data.data;
        console.log(response[0], '-------respose of vendor data');
        setVendorDataValue(response[0]);
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  const getDetilsUser = () => {
    getDocterDetailsData()
      .then(async res => {
        let response = res;
        var AllData = response.data.response[0];
        setVenderConsoltantValue(AllData);
        //detailsValue(AllData.course);


        console.log(AllData, '-------res')
        // detailsValue(response.data.response);
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  // console.log(detailsKey.course, 'st vendor data ');
  const data = [
    {
      id: 1,
      tag: 'CA/Audit/Counsulting',
    },
    {
      id: 1,
      tag: 'IPR/Patent Registration',
    },
    {
      id: 1,
      tag: 'CA/Audit/Counsulting',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: SCREEN_HEIGHT * 0.1}}>
        <View style={styles.head}>
          <Text style={styles.heading}>Profile Details</Text>
        </View>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <View style={styles.cardImg}>
              <Image
                source={require('../../Assets/Images/Home_pg/MaleDoc.png')}
                style={{height: 50, width: 50, borderRadius: 10}}
                resizeMode="cover"
              />
              <View style={{left: 10, width: 250}}>
                <Text style={styles.txt}>{setVendorDataKey.name}</Text>
                <Text style={styles.txtemail}>{setVendorDataKey.email}</Text>
              </View>
            </View>
            <Pressable
              onPress={() => navigation.navigate('Edit Vandor Profile')}
              style={styles.editProfile}>
              <Text style={styles.txtGreen}>Edit Details</Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <FontAwesome
              name="graduation-cap"
              style={{marginHorizontal: 10}}
              size={20}
              color={'#6f7c8e'}
            />
            <Text
              style={[
                styles.txtOccupation,
                {fontSize: 11, paddingVertical: 5,  color : Colors.Mostly_Black},
              ]}>
             {setVenderConsoltantKey.education}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name="location-sharp"
              style={{marginHorizontal: 10}}
              size={20}
              color={'#6f7c8e'}
            />
            <Text
              style={[
                styles.txtOccupation,
                {fontSize: 11, paddingVertical: 5, color : Colors.Mostly_Black},
              ]}>
              {setVenderConsoltantKey.address}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Icon
              name="ios-pricetag"
              size={20}
              style={{marginHorizontal: 10}}
              color={'#6f7c8e'}
            />
            <FlatList
              horizontal={true}
              data={setVenderConsoltantKey}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              renderItem={({item}) => {
                return (
                  <>
                    <View style={styles.cardYellow}>
                      <Text style={styles.txtYellow}>{item.course}</Text>
                    </View>
                  </>
                );
              }}
            />
          </View>
          <View
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              marginHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <View style={styles.cardSmall}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: Colors.LimeGreen,
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                 {setVenderConsoltantKey.experience}
                </Text>
                <Image
                  source={require('../../Assets/Images/Consultant_Detail/knowledge.png')}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 10,
                  color: Colors.Mostly_Black,
                }}>
                Years Exp
              </Text>
            </View>
            <View
              style={[
                styles.cardSmall,
                {borderBottomColor: '#41bbea', backgroundColor: '#f6fcfe'},
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: '#41bbea',
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  {setVenderConsoltantKey.client}
                </Text>
                <Image
                  source={require('../../Assets/Images/Consultant_Detail/target.png')}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 10,
                  color: Colors.Mostly_Black,
                }}>
                Clients
              </Text>
            </View>
            <View
              style={[
                styles.cardSmall,
                {borderBottomColor: '#ffab04', backgroundColor: '#fffcf5'},
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: '#ffab04',
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  96%
                </Text>
                <Image
                  source={require('../../Assets/Images/Consultant_Detail/success.png')}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 10,
                  color: Colors.Mostly_Black,
                }}>
                Success Rate
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.head}>
          <Text style={styles.heading}>Professional Details</Text>
        </View>
        <View style={[styles.card]}>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Professtion Details')}
              activeOpacity={0.9}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.title}>Brief Discription</Text>
              <Icon
                name="chevron-forward"
                style={{top: 12, right: 10}}
                size={15}
                color={'#6f7c8e'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Professtion Details')}
              activeOpacity={0.9}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.title}>Education</Text>
              <Icon
                name="chevron-forward"
                style={{top: 12, right: 10}}
                size={15}
                color={'#6f7c8e'}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.titleContainer, {marginBottom: 20}]}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.title}>Work & Experience</Text>
              <Icon
                name="chevron-forward"
                style={{top: 12, right: 10}}
                size={15}
                color={'#6f7c8e'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Pressable style={styles.btnLogout}>
          <Text style={styles.txtRed}>LOGOUT</Text>
          <Entypo name="log-out" style={{left: 10}} size={19} color={'red'} />
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fcff',
  },
  head: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    fontFamily: 'Poppins-Semiold',
    color: Colors.Mostly_Black,
  },
  card: {
    backgroundColor: Colors.White,
  },
  cardImg: {
    flexDirection: 'row',
    marginVertical: 10,
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  txt: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    color: Colors.Mostly_Black,
  },
  txtemail: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Mostly_Black,
    fontSize: 12,
  },
  editProfile: {
    top: 7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#09dca4',
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  txtGreen: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#09dca4',
  },
  cardYellow: {
    height: 25,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#ffbb37',
    backgroundColor: '#fffcf2',
  },
  txtYellow: {
    fontFamily: 'Poppins-Regular',
    color: '#ffbb37',
    fontSize: 12,
  },
  cardSmall: {
    width: SCREEN_WIDTH * 0.3,
    marginVertical: 5,
    backgroundColor: '#f5fefb',
    borderRadius: 10,
    borderBottomWidth: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomColor: '#09dca4',
  },
  titleContainer: {
    top: 10,
    marginHorizontal: 10,
    height: 50,
    borderWidth: 1,
    alignContent: 'center',
    borderColor: '#EBEff8',
    borderRadius: 5,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    paddingLeft: 10,
    top: 12,
    color: Colors.Mostly_Black,
  },
  accordion: {
    marginHorizontal: 8,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f8faff',
    borderColor: Colors.Mostly_Black,
  },
  content: {
    fontSize: 11,
    color: Colors.Mostly_Black,
    fontFamily: 'Poppins-Regular',
  },
  btnTxt: {
    fontFamily: 'Poppins-Regular',
    color: Colors.White,
    fontSize: 14,
  },
  bottom: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: Colors.LimeGreen,
    height: 55,
    width: SCREEN_WIDTH * 0.9,
    bottom: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    elevation: 16,
  },
  btnLogout: {
    top: 10,
    left: 20,
    flexDirection: 'row',
    width: SCREEN_WIDTH * 0.9,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f1d4d7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  txtRed: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#ea4243',
  },
});
