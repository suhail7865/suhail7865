import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {Colors} from '../../Helper/Colors';
import {getBlogData} from '../../Helper/API_Call/API_Call';
import {Circle, Rect} from 'react-native-svg';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Loader, {FacebookLoader} from 'react-native-easy-content-loader';

const BlogsScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [blogKey, blogValue] = useState([]);
  const [isFetching, setisFetching] = useState(true);
  const [loaderT, loaderS] = useState(true);

  useEffect(() => {
    getAllBlogData();
    setTimeout(() => {  
      loaderS(false);
    }, 2000);
  }, []);

  const getAllBlogData = () => {
    getBlogData('')
      .then(async res => {
        let response = res;
        blogValue(response.data.data);

        // console.log(response, '---------blogs');
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };

  const data = [
    {
      img: require('../../Assets/Images/Select_city/img4.png'),
      discription: 'The Holder of an accredited accadem.....',
      time: '26 min ago',
    },
    {
      img: require('../../Assets/Images/Select_city/img5.png'),
      discription: 'The Helder of an accredited accadem.....',
      time: '1 hours ago',
    },
    {
      img: require('../../Assets/Images/Select_city/img3.png'),
      discription: 'The Helder of an accredited accadem.....',
      time: '26 min ago',
    },
  ];

  const data2 = [
    {
      img: require('../../Assets/Images/Select_city/img1.png'),
      discription: 'The Holder of an accredited accadem.....',
      time: '26 min ago',
    },
    {
      img: require('../../Assets/Images/Select_city/img2.png'),
      discription: 'The Helder of an accredited accadem.....',
      time: '1 hours ago',
    },
    {
      img: require('../../Assets/Images/Select_city/img3.png'),
      discription:
        'A lawyer or attorney is a person who practices law,as an advocate',
      time: '26 min ago',
    },
    {
      img: require('../../Assets/Images/Select_city/img3.png'),
      discription:
        'A lawyer or attorney is a person who practices law,as an advocate',
      time: '26 min ago',
    },
    {
      img: require('../../Assets/Images/Select_city/img3.png'),
      discription:
        'A lawyer or attorney is a person who practices law,as an advocate',
      time: '26 min ago',
    },
    {
      img: require('../../Assets/Images/Select_city/img3.png'),
      discription:
        'A lawyer or attorney is a person who practices law,as an advocate',
      time: '26 min ago',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View
          style={{borderBottomColor: Colors.LimeGreen, borderBottomWidth: 1}}>
          <Text style={styles.txtGreen}>View All</Text>
        </View>
      </View>
      <View style={{backgroundColor: Colors.White, padding: 10}}>
        <FlatList
          horizontal={true}
          data={blogKey}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.blog_id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                  navigation.navigate('Blogs Details', {id: item.blog_id})
                }
                style={{
                  width: SCREEN_WIDTH * 0.57,
                  marginHorizontal: 10,
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#EBEFF8',
                  borderRadius: 10,
                }}>
                <FacebookLoader loading={loaderT}>
                  <View
                    style={{
                      marginVertical: 5,
                      width: SCREEN_WIDTH * 0.53,
                      elevation: 5,
                      borderRadius: 10,
                      minHeight: SCREEN_HEIGHT * 0.14,
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        flex: 1,
                        // height : '100%',
                        width: '100%',
                        resizeMode: 'stretch',
                      }}
                    />
                  </View>
                </FacebookLoader>
                <View style={{marginHorizontal: 5, marginVertical: 5}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      color: Colors.Week_Black,
                    }}>
                    {item.blog_title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      color: Colors.Cell_Phone_Heavy_Dark,
                    }}>
                    {item.created_date}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.head}>
        <Text style={styles.heading}>All Blogs</Text>
        <View
          style={{
            borderBottomColor: Colors.LimeGreen,
            borderBottomWidth: 1,
          }}>
          <Text style={styles.txtGreen}>View All</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: Colors.White,
          marginBottom: SCREEN_HEIGHT * 0.5,
          padding: 10,
          minHeight : 0
        }}>
        <FlatList
          data={blogKey}
          keyExtractor={(item, index) => item.blog_id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                  navigation.navigate('Blogs Details', {id: item.blog_id})
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    marginTop: 5,
                    borderColor: '#EBEFF8',
                    borderRadius: 10,
                  }}>
                  <View
                    style={{
                      marginVertical: 10,
                      marginLeft: 10,
                      width: 100,
                      elevation: 5,
                      borderRadius: 10,
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        flex: 1,
                        width: '100%',
                        resizeMode: 'stretch',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      marginVertical: 10,
                      marginHorizontal: 10,
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.txtDiscription}>{item.blog_title}</Text>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: Colors.Cell_Phone_Heavy_Dark,
                      }}>
                      {item.created_date}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default BlogsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Mostly_Cyan,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    fontFamily: 'Poppins-Semiold',
    color: Colors.Mostly_Black,
  },
  txtGreen: {
    color: Colors.LimeGreen,
    fontFamily: 'Poppins-Semiold',
  },
  txtDiscription: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Week_Black,
    marginRight: SCREEN_WIDTH * 0.3,
  },
});
