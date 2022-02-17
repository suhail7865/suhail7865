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
import Accordion from '@jialing/react-native-accordion';
import {getDocterDetailsData} from '../../Helper/API_Call/API_Call';
import {useRoute} from '@react-navigation/native';

export default function VandorDetailsScreen({navigation}) {
 

  const [briefExpand, setBreifExpand] = useState(false);
  const [eductionExpand, setEducationExpand] = useState(false);
  const [workExpand, setWorkExpand] = useState(false);
  // const data = [
  //   {
  //     id: 1,
  //     tag: 'CA/Audit/Counsulting',
  //   },
  //   {
  //     id: 1,
  //     tag: 'IPR/Patent Registration',
  //   },
  //   {
  //     id: 1,
  //     tag: 'CA/Audit/Counsulting',
  //   },
  // ];
  const [isFetching, setisFetching] = useState(true);

  const [detailsKey, detailsValue] = useState();
  const [UserName, SetName] = useState(null);
  const [categoryName, setCategory] = useState(null);
  const [star, setStar] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [amount, setAmount] = useState(null);
  const [image, setImage] = useState(null);
  const [education, setEducation] = useState(null);
  const [address, setAddress] = useState(null);
  const [briefDescription, setBriefDescription] = useState(null);
  const [experience, setExperience] = useState(null);
  const [client, setClient] = useState(null);
  const route = useRoute();
  const [partnerId, setid] = useState(route?.params?.id);

  useEffect(() => {
    getDetilsUser();
    setTimeout(() => {
      setisFetching(false);
    }, 200);
  }, []);

  const getDetilsUser = () => {
    getDocterDetailsData(partnerId)
      .then(async res => {
        let response = res;
        var AllData = response.data.response[0];
        detailsValue(response.data.response);
        SetName(AllData.name);
        setCategory(AllData.category_name);
        setReviews(AllData.star);
        setStar(AllData.total_reviews);
        setAmount(AllData.offline_amount);
        setImage(AllData.image);
        setEducation(AllData.education);
        setAddress(AllData.address);
        setBriefDescription(AllData.brief_description);
        setExperience(AllData.experience);
        setClient(AllData.client);

      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: SCREEN_HEIGHT * 0.1}}>
        <View style={styles.head}>
          <Text style={styles.heading}>Basic Details</Text>
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
                source={{uri: image}}
                style={{height: 90, width: 90, borderRadius: 10}}
                resizeMode="cover"
              />
              <View style={{left: 10}}>
                <Text style={styles.txt}>{UserName}</Text>
                <Text style={styles.txtOccupation}>{categoryName}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                  }}>
                  <MaterialCommunityIcons
                    name="star"
                    color={'#ffc400'}
                    size={18}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#b0b7c1',
                      marginHorizontal: 5,
                    }}>
                    {star}
                  </Text>
                  <Text style={{color: '#b0b7c1', fontSize: 13}}>
                    {reviews}
                  </Text>
                </View>
                <Text style={{marginHorizontal: 5, color: '#191919'}}>
                  {'\u20B9'} {amount}
                </Text>
              </View>
            </View>

            <View style={styles.favorite}>
              <MaterialCommunityIcons
                name="bookmark-outline"
                size={15}
                color={'#7e8a9a'}
              />
            </View>
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
                {fontSize: 11, paddingVertical: 5},
              ]}>
              {education}
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
                {fontSize: 11, paddingVertical: 5},
              ]}>
              {address}
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
              data={detailsKey}
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
                  {experience}
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
                  {client}
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
          <Text style={styles.heading}>Overview</Text>
        </View>
        <View style={[styles.card]}>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={() => setBreifExpand(!briefExpand)}>
              <Text style={styles.title}>Brief Discription</Text>
              <Icon
                name={briefExpand ? 'chevron-down' : 'chevron-up'}
                style={{top: 12, right: 10}}
                color={'#6f7c8e'}
                size={15}
              />
            </TouchableOpacity>
          </View>
          <Accordion style={styles.accordion} expand={briefExpand}>
            <Text style={styles.content}>{briefDescription}</Text>
          </Accordion>
          <View style={styles.titleContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={() => setEducationExpand(!eductionExpand)}>
              <Text style={styles.title}>Education</Text>
              <Icon
                name={eductionExpand ? 'chevron-down' : 'chevron-up'}
                style={{top: 12, right: 10}}
                size={15}
                color={'#6f7c8e'}
              />
            </TouchableOpacity>
          </View>
          <Accordion style={styles.accordion} expand={eductionExpand}>
            <Text style={styles.content}>{education}</Text>
          </Accordion>
          <View style={[styles.titleContainer, {marginBottom: 20}]}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={() => setWorkExpand(!workExpand)}>
              <Text style={styles.title}>Work & Experience</Text>
              <Icon
                name={workExpand ? 'chevron-down' : 'chevron-up'}
                style={{top: 12, right: 10}}
                size={15}
                color={'#6f7c8e'}
              />
            </TouchableOpacity>
          </View>
          <Accordion style={styles.accordion} expand={workExpand}>
            <Text style={styles.content}>{briefDescription}</Text>
          </Accordion>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <Pressable onPress={() => navigation.navigate('LoginOtpScreen')}>
          <Text style={styles.btnTxt}>Back On Appointment</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Mostly_Cyan,
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
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  txt: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    color: Colors.Mostly_Black,
    width : SCREEN_WIDTH * 0.36
  },
  txtOccupation: {
    fontFamily: 'Poppins-Regular',
    color: '#acb3be',
    fontSize: 12,
  },
  favorite: {
    top: 7,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
    backgroundColor: Colors.YellowLight,
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
});
