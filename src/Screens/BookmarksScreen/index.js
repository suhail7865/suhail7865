import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import {Colors} from '../../Helper/Colors';

export function BookmarksScreen({navigation}) {
  
  const data = [
    {
      img: (
        <Image
          source={require('../../Assets/Images/Home_pg/MaleDoc.png')}
          style={{height: 90, width: 90, borderRadius: 10}}
          resizeMode="cover"
        />
      ),
      name: 'Vishal Raj',
      occupation: 'Doctor',
      ratings: '4.5',
      reviews: 'Reviews',
      charges: '200',
    },
    {
      img: (
        <Image
          source={require('../../Assets/Images/Home_pg/MaleDoc.png')}
          style={{height: 90, width: 90, borderRadius: 10}}
          resizeMode="cover"
        />
      ),
      name: 'Faisal Shah',
      occupation: 'Advhocate',
      ratings: '4.5',
      reviews: 'Reviews',
      charges: '3000',
    },
    {
      img: (
        <Image
          source={require('../../Assets/Images/Home_pg/MaleDoc.png')}
          style={{height: 90, width: 90, borderRadius: 10}}
          resizeMode="cover"
        />
      ),
      name: 'Vishal Raj',
      occupation: 'Doctor',
      ratings: '4.5',
      reviews: 'Reviews',
      charges: '200',
    },
    {
      img: (
        <Image
          source={require('../../Assets/Images/Home_pg/MaleDoc.png')}
          style={{height: 90, width: 90, borderRadius: 10}}
          resizeMode="cover"
        />
      ),
      name: 'Vishal Raj',
      occupation: 'Doctor',
      ratings: '4.5',
      reviews: 'Reviews',
      charges: '200',
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.topHead}>
        <Text style={styles.text}>All Bookmarks</Text>
      </View>
      <View
        style={{
          backgroundColor: '#fefefe',
          marginBottom: SCREEN_HEIGHT * 0.1,
        }}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item}) => {
            return (
              <>
                <View style={styles.card}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: 10,
                    }}
                    onPress={() => navigation.navigate('Doctor Details')}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.cardImg}>{item.img}</View>
                      <View style={{marginVertical: 10}}>
                        <Text style={styles.txt}>{item.name}</Text>
                        <Text style={styles.txtOccupation}>
                          {item.occupation}
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
                            {item.ratings}
                          </Text>
                          <Text style={{color: '#b0b7c1', fontSize: 13}}>
                            ({item.reviews})
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
                          <Text style={{marginHorizontal: 5, color: '#191919'}}>
                            {item.charges}
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
                        <Text
                          style={{
                            fontFamily: 'Poppins-semiBold',
                            color: '#09dca4',
                            fontSize: 12,
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
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fcff',
  },
  
 
  topHead: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  
  text: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
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
