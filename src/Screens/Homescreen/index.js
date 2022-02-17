import React, {Component, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../Helper/Colors';
import {ScrollCard} from '../../Component/Explore/ScrollCard';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {FlatList} from 'react-native-gesture-handler';
import {
  getBannerData,
  getTopConsultantData,
  getSpecialityData,
  getCategoryData,
  getcityData,
} from '../../Helper/API_Call/API_Call';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Loader from '../../Component/Loader';
import {GetUserCityData} from '../../Helper/actionHelper';

const colorCategory = [
  '#4485FD',
  '#a584ff',
  '#ff8f71',
  '#00c11a',
  '#a584ff',
  '#ff8f71',
  '#4485FD',
  
];
// const colorCategory = [{
//             color:'#4485FD',
//             id:'0'
//           },
//           {
//             color:'#a584ff',
//             id:'1'
//           },
//           {
//             color:'#ff8f71',
//             id:'3'
//           },
//           {
//             color:'#00c11a',
//             id:'4'
//           },
//           {
//             color:'#a584ff',
//             id:'5'
//           },
//           {
//             color:'#ff8f71',
//             id:'6'
//           },
//           {
//             color:'#4485FD',
//             id:'7'
//           }];

const HomeScreen = ({navigation}) => {
  const [bannerKey, bannerValue] = useState([]);
  const [categoryKey, categoryValue] = useState([]);
  const [consultantKey, consultantValue] = useState([]);
  const [specialityKey, specialityValue] = useState([]);
  const [isFetching, setisFetching] = useState(true);
  const [selectedCityKey, selectedCityData] = useState();

  const isFocused = useIsFocused();

  useEffect(() => {
    getAllData();
    getTopConsultant();
    getSpeciality();
    getAllCategory();
    GetUserCityData();
    setTimeout(() => {
      setisFetching(false);
    }, 2000);
  }, [isFocused]);

  /////////City Data ////////////////

  const getAllData = () => {
    getBannerData()
      .then(async res => {
        let response = res;
        bannerValue(response.data.categories);
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  const getAllCategory = () => {
    getCategoryData()
      .then(async res => {
        let response = res;
        categoryValue(response.data.categories);
        // console.log(categoryKey, '-------cateHome')
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  //////////top_consultant data////////////
  const getTopConsultant = () => {
    getTopConsultantData()
      .then(async res => {
        let response = res;
        consultantValue(response.data.response);
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  //////////speciality data////////////
  const getSpeciality = () => {
    getSpecialityData()
      .then(async res => {
        let response = res;
        specialityValue(response.data.response);
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  GetUserCityData().then(async res => {
    selectedCityData(res);
  });

  return (
    <ScrollView style={styles.container}>
      {isFetching ? (
        <View
          style={{justifyContent: 'center', marginTop: SCREEN_HEIGHT * 0.38}}>
          <Loader />
        </View>
      ) : (
        <>
          <StatusBar hidden={false} />
          <ScrollView scrollEventThrottle={16}>
            <View
              style={{
                flexDirection: 'row',
                top: SCREEN_HEIGHT * 0.02,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{width : 187}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="location-pin"
                    size={16}
                    color={Colors.LimeGreen}
                    style={{marginLeft: SCREEN_WIDTH * 0.05}}
                  />
                  <Text
                    style={{
                      fontFamily :  'Poppins-Regular',
                      marginLeft: SCREEN_WIDTH * 0.02,
                      fontSize: 12,
                      color: Colors.Week_Black,
                    }}>
                    CITY
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Poppins-ExtraBold',
                    marginLeft: 20,
                    color: Colors.Week_Black,
                  }}>
                  {selectedCityKey.cityName}
                  <Text style={{fontFamily: 'Poppins-Regular',  fontSize: 16,}}>, India </Text>
                </Text>
              </View>

              <Pressable
                onPress={() => navigation.navigate('LocationScreen')}
                style={styles.btnChangeCity}>
                <Text
                  style={{
                    color: Colors.LimeGreen,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Change City
                </Text>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={15}
                  color={Colors.LimeGreen}
                  style={{paddingLeft: 5}}
                />
              </Pressable>
            </View>
            <View
              style={{
                marginTop: SCREEN_HEIGHT * 0.04,
                height: SCREEN_HEIGHT * 0.59,
              }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={bannerKey}
                keyExtractor={(item, index) => item.banner_id.toString()}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        height: SCREEN_HEIGHT / 4.5,
                        width: SCREEN_WIDTH / 1.2,
                        marginHorizontal: 10,
                        borderWidth: 1,
                        borderColor: '#dddddd',
                        borderRadius: 10,
                      }}>
                      <View style={{flex: 1, elevation: 8, borderRadius: 10}}>
                        <Image
                          source={{uri: item.image}}
                          style={{
                            flex: 1,
                            width: '100%',
                            resizeMode: 'stretch',
                          }}
                        />
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginTop: SCREEN_HEIGHT * -0.35,
              marginHorizontal: 16,
              justifyContent: 'space-between',
              marginBottom: SCREEN_HEIGHT * 0.02,
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 16,
                  color: Colors.Week_Black,
                }}>
                Categories
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#4ce5be',
                borderBottomWidth: 1,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('All Services')}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: Colors.LimeGreen,
                    fontSize: 16,
                    padding: 4,
                    fontWeight: 'bold',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
              <FontAwesomeIcon
                name="angle-double-right"
                size={22}
                color={Colors.LimeGreen}
                style={{left: 5, top: 3}}
              />
            </View>
          </View>
          <View style={styles.categoriesView}>
            {categoryKey.map((rowData, index) => (
              //console.log(rowData,"................this is category");
              <View key={index} style={{top: 10}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Vandors', {id: rowData.id})
                  }
                  activeOpacity={0.9}>
                  <View
                    style={[
                      styles.btnSquere,
                      {backgroundColor: colorCategory[index]},
                    ]}>
                    <Image
                      source={{uri: rowData.category_icon}}
                      style={{
                        flex: 0.5,
                        width: '40%',
                        resizeMode: 'stretch',
                      }}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={styles.txtButton}>{rowData.category_name}</Text>
              </View>
            ))}
            <View key={2} style={{top: 10}}>
              <TouchableOpacity
                onPressIn={() => navigation.navigate('All Services')}
                activeOpacity={0.9}>
                <View style={[styles.btnSquere, {backgroundColor: '#ffb74c'}]}>
                  <Image
                    source={require('../../Assets/Images/Home_pg/more.png')}
                    style={{
                      flex: 0.5,
                      width: '30%',
                      resizeMode: 'stretch',
                    }}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.txtButton}>More</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              marginTop: 8,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 18,
                  color: Colors.Mostly_Black,
                }}>
                Speciality
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#4ce5be',
                borderBottomWidth: 1,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Vandors', {id: categoryKey.category_id})
                }>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: '#4ce5be',
                    fontSize: 16,
                    padding: 4,
                    fontWeight: 'bold',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
              <FontAwesomeIcon
                name="angle-double-right"
                size={22}
                color={Colors.LimeGreen}
                style={{left: 5, top: 3}}
              />
            </View>
          </View>
          <View
            style={{
              marginVertical: 5,
              paddingVertical: 5,
              backgroundColor: '#fbfbfb',
            }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={specialityKey}
              keyExtractor={(item, index) => item.id.toString()}
              renderItem={({item, index}) => {
                return (
                  <>
                    <ScrollCard
                      imageUri={item.image}
                      name={item.name}
                      occupation={item.category}
                      charges={item.videocall_amount}
                      onPress={() =>
                        navigation.navigate('Doctor Details', {id: item.id})
                      }
                      ViewName={'View Name'}
                    />
                  </>
                );
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              marginTop: 5,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 18,
                  color: Colors.Mostly_Black,
                }}>
                Top consultants
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#4ce5be',
                borderBottomWidth: 1,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: Colors.LimeGreen,
                    fontSize: 16,
                    padding: 4,
                    fontWeight: 'bold',
                  }}>
                  View All
                </Text>
              </TouchableOpacity>
              <FontAwesomeIcon
                name="angle-double-right"
                size={22}
                color={Colors.LimeGreen}
                style={{left: 5, top: 3}}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              paddingVertical: 5,
              backgroundColor: '#fbfbfb',
              marginBottom: SCREEN_HEIGHT * 0.08,
            }}>
            <FlatList
              horizontal
              data={consultantKey}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                // console.log("item.image");
                //console.log(item.image);
                return (
                  <>
                    <ScrollCard
                      imageUri={item.image}
                      name={item.name}
                      occupation={item.category_name}
                      charges={item.videocall_amount}
                      onPress={() =>
                        navigation.navigate('Doctor Details', {id: item.id})
                      }
                      ViewName={'View Name'}
                    />
                  </>
                );
              }}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fcff',
  },
  btnChangeCity: {
    flexDirection: 'row',
    margin: 16,
    width: 140,
    alignSelf: 'flex-end',
    fontFamily: 'Poppins-Reguler',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.LimeGreen,
    backgroundColor: Colors.Green_Background,
  },
  categoriesView: {
    // marginBottom: SCREEN_HEIGHT * 0.01,

    minHeight: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  btnSquere: {
    height: 60,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderRadius: 8,
  },
  txtButton: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    padding: 5,
    color: Colors.Mostly_Black,
    fontSize: 11,
  },
});
