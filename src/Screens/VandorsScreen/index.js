import React, {useState,useRef, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  StatusBar,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import RadioButton from '../../Component/radioButton';
import {FlatList} from 'react-native-gesture-handler';
import {Colors} from '../../Helper/Colors';
import {useRoute} from '@react-navigation/native';
import {getVendersData} from '../../Helper/API_Call/API_Call';
import {GetUserCityData} from '../../Helper/actionHelper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const VandorsScreen = ({navigation}) => {
  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  const [isFetching, setisFetching] = useState(true);

  const [categoryId, setid] = useState(route?.params?.id);
  const [vendersKey, vendersValue] = useState([]);
  const [selectedCityKey, selectedCityData] = useState([]);
  

  useEffect(() => {
    getVenders();
    GetUserCityData();
    setTimeout(() => {
      setisFetching(false);
    }, 2000);
  }, []);

  //////////top Venders data////////////
  const getVenders = () => {
    getVendersData(categoryId)
      .then(async res => {
        let response = res;
        vendersValue(response.data.response);
        console.log(categoryId, '--------');
       
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  GetUserCityData().then(async res => {
   
    selectedCityData(res);
    // console.log(res, 'cityssssssssssss')
  });

  const PROP = [
    {
      key: 'all',
      text: 'All',
    },
    {
      key: 'top-rated',
      text: 'Top-Rated',
    },
    {
      key: 'price-lowtohigh',
      text: 'Price-Low To Heigh',
    },
    {
      key: 'price-high to low',
      text: 'Price-High To Low',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <View style={styles.topHead}>
        <Text style={styles.text}>Total Results</Text>
        <Text
          style={{
            fontFamily: 'Poppins-ExtraBold',
            fontSize: 15,
            color: Colors.Mostly_Black,
          }}>
          <Icon name="location-pin" color={'#09dca4'} size={17} />
          {selectedCityKey.cityName},{' '}
          <Text style={{fontFamily: 'Poppins-Regular'}}> India</Text>
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#fefefe',
          marginBottom: SCREEN_HEIGHT * 0.1,
        }}>
        <View style={styles.modelContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
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
                  <MaterialCommunityIcons
                    name="sort-variant"
                    color={'#1b1b1b'}
                    size={18}
                  />
                  <Text
                    style={{
                      fontFamily: 'Poppins-ExtraBold',
                      color: '#1b1b1b',
                      marginLeft: 7,
                      fontSize: 15,
                    }}>
                    Sort By
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#f6f6f6',
                    marginTop: 10,
                  }}
                />
                <View style={{marginHorizontal: 10, marginVertical: 20}}>
                  <RadioButton PROP={PROP} />
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={{marginBottom: SCREEN_HEIGHT * 0.08}}>
          <FlatList
            data={vendersKey}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <>
                  <View style={styles.card}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.cardImg}>
                          <Image style={{flex: 1}} source={{uri: item.image}} />
                        </View>
                        <View style={{marginVertical: 10}}>
                          <Text style={styles.txt}>{item.name}</Text>
                          <Text style={styles.txtOccupation}>
                            {item.category_name}
                          </Text>
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
                              {item.star}
                            </Text>
                            <Text style={{color: '#b0b7c1', fontSize: 13}}>
                              ({item.total_reviews})
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'baseline',
                              top: 2,
                            }}>
                            <FontAwesome
                              name="rupee"
                              size={15}
                              color={'#191919'}
                            />
                            <Text
                              style={{marginHorizontal: 5, color: '#191919'}}>
                              {item.chat_amount}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}>
                        <View style={styles.favorite}>
                          <MaterialCommunityIcons
                            name="bookmark-outline"
                            size={15}
                            color={'#7e8a9a'}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            padding: 6,
                          }}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('Doctor Details', {
                                id: item.id,
                              })
                            }>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <Text
                                style={{
                                  fontFamily: 'Poppins-semiBold',
                                  color: '#09dca4',
                                  fontSize: 14,
                                }}>
                                View Profile
                              </Text>
                              <MaterialCommunityIcons
                                name="arrow-right"
                                size={14}
                                style={{top: 2}}
                                color={'#09dca4'}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </>
              );
            }}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.btnGroup}>
          <Pressable
            style={{
              flexDirection: 'row',
            }}
            onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons
              name="sort-variant"
              color={'#000'}
              size={20}
            />
            <Text style={styles.btnTxt}>Sort By</Text>
          </Pressable>
        </View>
        <View style={{height: 40, borderWidth: 1, borderColor: '#f5f5f5'}} />
        <View style={styles.btnGroup}>
          <Pressable
            style={{
              flexDirection: 'row',
            }}>
            <MaterialCommunityIcons name="filter" color={'#000'} size={20} />
            <Text style={styles.btnTxt}>Filter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default VandorsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fcff',
  },
  modelContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modelView: {
    width: '100%',
    height: 250,
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
  closeButton: {
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 50,
    padding: 10,
  },
  text: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    color: Colors.Mostly_Black,
  },
  card: {
    borderColor: Colors.Light_Grayish_Blue_White,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 0.5,
  },
  btnTxt: {
    marginHorizontal: 5,
    fontFamily: 'Poppins-Regular',
    color: '#191919',
    fontSize: 14,
  },
  btnSquere: {
    height: 50,
    width: 60,
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  cardImg: {
    marginVertical: 10,
    marginRight: 10,
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  txt: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.Mostly_Black,
  },
  txtOccupation: {
    fontFamily: 'Poppins-Regular',
    color: '#acb3be',
    fontSize: 12,
  },
  favorite: {
    top: 7,
    left: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  btnGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  bottom: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: '#fff',
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
