import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  Pressable,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import CircularProgress from 'react-native-circular-progress-indicator';

import Svg, {
  Image,
  Defs,
  Pattern,
  Rect,
  G,
  Path,
  Filter,
  Circle,
  FeComposite,
  FeGaussianBlur,
  FeOffset,
  FeFlood,
} from 'react-native-svg';

import Stars from 'react-native-stars';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {Colors} from '../../Helper/Colors';
import {FontFamily} from '../../Helper/FontFamily';

const data = [
  {
    number: '4',
    massage: 'VIRTUAL',
    name: 'John Harrison',
    date: 'March 10, 2017',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.',
    id: '1',
  },
  {
    number: '4',
    massage: 'VIRTUAL',
    name: 'John Harrison',
    date: 'March 10, 2017',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.',
    id: '2',
  },
  {
    number: '4',
    massage: 'VIRTUAL',
    name: 'John Harrison',
    date: 'March 10, 2017',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.',
    id: '3',
  },
  {
    number: '4',
    massage: 'VIRTUAL',
    name: 'John Harrison',
    date: 'March 10, 2017',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.',
    id: '4',
  },
];

export function VenderReviews() {
  const Item = ({title, name, icon, date, loss, number, massage}) => (
    <View style={styles.borderView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 6 6">
          <Circle
            id="Rounded_Rectangle_27"
            data-name="Rounded Rectangle 27"
            cx="3"
            cy="3"
            r="3"
            fill="#191919"
          />
        </Svg>
        <Text style={styles.userNameText}>{name}</Text>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 29 29">
          <G id="voice_chat_black_24dp" transform="translate(-2.846 -2.846)">
            <Path
              id="Path_107"
              data-name="Path 107"
              d="M28.1,2H4.9A2.9,2.9,0,0,0,2.014,4.9L2,31l5.8-5.8H28.1A2.909,2.909,0,0,0,31,22.3V4.9A2.909,2.909,0,0,0,28.1,2Zm0,20.3H6.6L4.9,24V4.9H28.1Zm-8.7-7.83,4.35,3.48V9.25L19.4,12.73V9.25H9.25v8.7H19.4Z"
              transform="translate(0.846 0.846)"
              fill={Colors.Vivid_Blue}
            />
          </G>
        </Svg>

        <Text style={styles.messageText}>{massage}</Text>
        <View
          style={{
            marginLeft: SCREEN_HEIGHT * 0.178,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: Colors.Mostly_Green,
              fontFamily: FontFamily.semibold,
              fontSize: 12,
              position: 'absolute',
            }}>
            {number}
          </Text>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.445"
            height="18.397"
            viewBox="0 0 32.445 18.397">
            <G
              id="Rectangle_601"
              data-name="Rectangle 601"
              fill="rgba(46,176,0,0.05)"
              stroke="#2eb000"
              stroke-width="0.5">
              <Rect width="32.445" height="18.397" rx="4" stroke="none" />
              <Rect
                x="0.25"
                y="0.25"
                width="31.945"
                height="17.897"
                rx="3.75"
                fill="none"
              />
            </G>
          </Svg>
        </View>
      </View>
      <Text style={styles.paragraphText}>{title}</Text>
      <Text
        style={{
          top: SCREEN_HEIGHT * 0.01,
          borderTopWidth: 0.5,
          borderColor: Colors.Light_Grayish_Blue_White,
        }}></Text>
      <Text style={styles.dateText}>{date}</Text>
    </View>
  );
  const renderItem = ({item}) => (
    <View>
      <Item
        title={item.title}
        name={item.name}
        date={item.date}
        massage={item.massage}
        number={item.number}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.ratingTextTop}>Total Rating & Reviews</Text>
      <View style={styles.topContainer}>
        <View style={styles.ratingView}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 45 45">
            <Defs>
              <Pattern
                id="pattern"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                viewBox="0 0 732 549">
                <Image
                  width="732"
                  height="549"
                  xlinkHref={require('../../Assets/Images/DoctorMale/Male_Doctor_732x549-thumbnail-image.jpg')}
                />
              </Pattern>
            </Defs>
            <Rect
              id="Male_Doctor_732x549-thumbnail"
              width="45"
              height="45"
              rx="6"
              fill="url(#pattern)"
            />
          </Svg>

          <Text
            style={{
              marginHorizontal: 8,
              color: Colors.Yellow,
              fontSize: 24,
              fontFamily: 'Gilroy-SemiBold',
            }}>
            4.5
          </Text>
          <View>
            <Stars
              default={4.5}
              half={true}
              spacing={4}
              fullStar={
                <MaterialIcons name={'star'} style={[styles.myStarStyle]} />
              }
              emptyStar={
                <MaterialIcons
                  name={'star'}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <MaterialIcons
                  name={'star-half'}
                  style={[styles.myStarStyle]}
                />
              }
            />
            <Text style={styles.countRatingsText}>
              473 Ratings & 108 Reviews
            </Text>
          </View>
          <View>
            {/* <CircularProgress
              value={60}
              radius={120}
              duration={2000}
              textColor={'#ecf0f1'}
              maxValue={200}
              title={'KM/H'}
              titleColor={'white'}
              titleStyle={{fontWeight: 'bold'}}
            /> */}
          </View>
        </View>
      </View>
      <Text style={styles.ratingTextTop}>
        Total Rating & Reviews{' '}
        <Text
          style={{
            color: Colors.Very_Week_Dark,
            fontSize: 12,
            fontFamily: FontFamily.semibold,
          }}>
          (473)
        </Text>
      </Text>
      <View style={styles.contentView}>
        <View style={styles.countingView}>
          <FlatList
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Mostly_White_Cyan,
  },

  ratingTextTop: {
    marginHorizontal: 13,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
    marginTop: SCREEN_HEIGHT * 0.02,
  },
  topContainer: {
    backgroundColor: Colors.White,
  },
  ratingView: {
    marginHorizontal: 13,
    height: SCREEN_HEIGHT * 0.19,
    marginTop: SCREEN_HEIGHT * 0.02,
    flexDirection: 'row',
  },
  myStarStyle: {
    color: Colors.Yellow,
    backgroundColor: 'transparent',
    fontSize: 27,
  },
  myEmptyStarStyle: {
    color: Colors.Light_Grayish_Blue,
  },
  countRatingsText: {
    color: Colors.Mostly_Black_Gray_Dark,
    fontSize: 12,
    fontFamily: FontFamily.medium,
    marginTop: SCREEN_HEIGHT * 0.011,
    right: SCREEN_HEIGHT * 0.052,
  },
  contentView: {
    backgroundColor: Colors.White,
  },
  countingView: {
    marginHorizontal: 13,

    // height: SCREEN_HEIGHT * 0.90,
    marginTop: SCREEN_HEIGHT * 0.02,
  },
  userNameText: {
    color: Colors.Mostly_Black_Gray_Dark,
    fontSize: 13,
    fontFamily: FontFamily.medium,
    paddingRight: 10,
    marginHorizontal: 5,
  },
  paragraphText: {
    color: Colors.Dark_Gray,
    fontSize: 10,
    fontFamily: FontFamily.regular,
    width: SCREEN_WIDTH * 0.78,
    lineHeight: 14,
  },
  borderView: {
    padding: 9,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: Colors.Light_Grayish_Blue_White,
    marginVertical: 5,
  },
  dateText: {
    color: Colors.Dark_Gray,
    fontSize: 10,
  },
  messageText: {
    color: Colors.Vivid_Blue,
    fontSize: 10,
    fontFamily: FontFamily.medium,
    left: SCREEN_HEIGHT * 0.008,
  },
});
