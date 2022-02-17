import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {getBlogData} from '../../Helper/API_Call/API_Call';
import {Colors} from '../../Helper/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {useRoute} from '@react-navigation/native';
import HTMLView from 'react-native-htmlview';
const data = [
  {
    time: '26 min ago',
  },
];
export default function BlogsDetails({navigation: {goBack}}) {
  const route = useRoute();
  const [blog_id, setid] = useState(route?.params?.id);
  // console.log(route)
  const [isFeching, setisFecthing] = useState();
  const [blogsDetailsKey, blogsDetailsValue] = useState();
  const [blogsDescriptionKey, blogsDescriptionValue] = useState();
  const [blogsTitlesKey, blogsTitleValue] = useState();
  const [blogsImageKey, blogsImageValue] = useState();
  const [blogsDateKey, blogsDateValue] = useState();

  useEffect(() => {
    getBlogsDetails();
    setTimeout(() => {
      setisFecthing(false);
    }, 200);
  }, []);

  const getBlogsDetails = () => {
    getBlogData(blog_id)
      .then(async res => {
        let response = res.data.data;
        blogsDetailsValue(response);
        blogsDescriptionValue(response.blog_description);
        blogsTitleValue(response.blog_title);
        blogsImageValue(response.image);
        blogsDateValue(response.created_date);
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  const webViewStyle = StyleSheet.create({ p: { color:"black", }, })
  console.log(blogsDescriptionKey, '......................blogsDescriptionKey');
  return (
    <View style={{flex: 1, backgroundColor: Colors.Mostly_Cyan}}>
      <ImageBackground
        source={{uri: blogsImageKey}}
        style={styles.bgImg}
        resizeMode="stretch">
        <Pressable onPress={() => goBack()} style={{left: 10, top: 10}}>
          <Icon name="arrowleft" size={25} color={Colors.White} />
        </Pressable>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            alignSelf: 'flex-end',
          }}>
          <Text style={{color: Colors.White}}>{blogsDateKey}</Text>
        </View>
      </ImageBackground>

      <ScrollView style={{backgroundColor: Colors.White, top: 10, flex: 1}}>
        <View
          style={{
            marginHorizontal: 16,
            marginVertical: 10,
            borderBottomWidth: 1,
            paddingBottom: 10,
            borderBottomColor: '#f5f5f5',
          }}>
          <Text style={styles.headerTxt}>{blogsTitlesKey}</Text>
        </View>
        <View
          style={{
            marginHorizontal: 16,
            // backgroundColor : 'red',
            borderBottomWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderBottomColor: '#f5f5f5',
          }}>
          <HTMLView value={blogsDescriptionKey} stylesheet={webViewStyle} />
        </View>
        <View
          style={{
            marginHorizontal: 16,
            borderBottomWidth: 1,
            paddingVertical: 10,
            borderBottomColor: '#f5f5f5',
          }}>
          {/* <Text style={styles.descriptionTxt}>
            Your childhood teacher did not wrong you when they taught you that
            there should be three, or four, or five sentences in a paragraph. It
            is important to understand, however, that the aim in teaching this
            was not to impart a hard-and-fast rule of grammar, drawn from an
            authoritative-but-dusty book.
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 16,
            borderBottomWidth: 1,
            paddingVertical: 10,
            borderBottomColor: '#f5f5f5',
          }}>
          <Text style={styles.descriptionTxt}>
            Your childhood teacher did not wrong you when they taught you that
            there should be three, or four, or five sentences in a paragraph. It
            is important to understand, however, that the aim in teaching this
            was not to impart a hard-and-fast rule of grammar, drawn from an
            authoritative-but-dusty book.
          </Text> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // blogs: {
  //   fontSize : 11,
  //  color : Colors.Mostly_Black

  // },
  headerTxt: {
    marginRight: 40,
    fontFamily: 'Poppins-semiBold',
    color: Colors.Mostly_Black,
    fontSize: 15,
  },
  descriptionTxt: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Black,
    fontSize: 13,
  },
  bgImg: {
    width: '100%',
    borderBottomRadius: 10,
    height: SCREEN_HEIGHT * 0.27,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
