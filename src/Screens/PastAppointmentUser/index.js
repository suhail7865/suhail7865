import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Svg, {Image, Defs, Pattern, Rect, G, Path} from 'react-native-svg';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

import {FontFamily} from '../../Helper/FontFamily';
import {Colors} from '../../Helper/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';

export function PastAppointmentUser({navigation}) {
  const [active, isActive] = useState(1);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View
        style={{
          marginHorizontal: 13,
          marginTop: SCREEN_HEIGHT * 0.03,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={active === 1 ? styles.cardSelected : styles.card}
          onPress={() => isActive(1)}>
          <View style={active === 1 ? styles.cardSelected : styles.card}>
            <Text
              style={
                active === 1 ? styles.activeTextFirst : styles.inActiveTextFirst
              }>
              All
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={active === 2 ? styles.cardSelected : styles.card}
          onPress={() => isActive(2)}>
          <View style={active === 2 ? styles.cardSelected : styles.card}>
            <Text
              style={
                active === 2 ? styles.activeTextFirst : styles.inActiveTextFirst
              }>
              Successful
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={active === 3 ? styles.cardSelected : styles.card}
          onPress={() => isActive(3)}>
          <View style={active === 3 ? styles.cardSelected : styles.card}>
            <Text
              style={
                active === 3 ? styles.activeTextFirst : styles.inActiveTextFirst
              }>
              Cencalled
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.textCount}>All(03)</Text>
      <View style={{backgroundColor: '#FDFDFD', flex: 1}}>
        <ScrollView>
          <View style={styles.topContentBorder}>
            <Text
              style={{
                position: 'absolute',
                borderWidth: 3,
                height: SCREEN_HEIGHT * 0.3,
                borderColor: Colors.Heavey_Green,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              }}></Text>
            <View style={styles.topWrapperUserDetail}>
              <View style={styles.UserView}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
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

                <View>
                  <Text style={styles.frontText}>Vijay Sharma</Text>
                  <Text style={styles.frontUserText}>Docter</Text>
                  <Pressable>
                    <View style={styles.getCompView}>
                      <Text style={styles.getCompText}>COMPLETED</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View style={styles.detailesView}>
                <Text
                  style={{
                    width: SCREEN_WIDTH * 0.9,
                    borderBottomWidth: 1,
                    borderColor: Colors.Light_Grayish_Blue_White,
                    position: 'absolute',
                    marginHorizontal: SCREEN_HEIGHT * 0.01,
                    marginVertical: SCREEN_HEIGHT * 0.018,
                  }}></Text>
                <View style={styles.detailesTypeView}>
                  <Text style={styles.detailesTextType}>Type</Text>
                  <View
                    style={{
                      backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
                      padding: 17,
                      height: SCREEN_HEIGHT * 0.076,
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: SCREEN_WIDTH * 0.425,
                      borderRadius: 5,
                      marginTop: SCREEN_HEIGHT * 0.02,
                    }}>
                    <Svg width="29" height="29" viewBox="0 0 29 29">
                      <G
                        id="voice_chat_black_24dp"
                        transform="translate(-2.846 -2.846)">
                        <Path
                          id="Path_107"
                          data-name="Path 107"
                          d="M28.1,2H4.9A2.9,2.9,0,0,0,2.014,4.9L2,31l5.8-5.8H28.1A2.909,2.909,0,0,0,31,22.3V4.9A2.909,2.909,0,0,0,28.1,2Zm0,20.3H6.6L4.9,24V4.9H28.1Zm-8.7-7.83,4.35,3.48V9.25L19.4,12.73V9.25H9.25v8.7H19.4Z"
                          transform="translate(0.846 0.846)"
                          fill="#191919"
                        />
                      </G>
                    </Svg>
                    <View style={{marginHorizontal: SCREEN_HEIGHT * 0.01}}>
                      <Text style={styles.virtualText}>VIRTUAL</Text>
                      <Text style={styles.virtualRupee}>{'\u20B9'} 2250.0</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.detailesTextSlot}>Date & Time Slot</Text>
                  <View
                    style={{
                      backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
                      padding: 17,
                      height: SCREEN_HEIGHT * 0.076,
                      flexDirection: 'row',
                      width: SCREEN_WIDTH * 0.425,
                      borderRadius: 5,
                      alignItems: 'center',
                      marginTop: SCREEN_HEIGHT * 0.02,
                      marginHorizontal: SCREEN_HEIGHT * 0.01,
                    }}>
                    <View>
                      <Material
                        name="calendar-outline"
                        color={Colors.Black}
                        size={14}
                      />
                      <Material
                        name="clock-time-five-outline"
                        color={Colors.Black}
                        size={14}
                        style={{marginTop: 2}}
                      />
                    </View>
                    <View style={{marginHorizontal: SCREEN_HEIGHT * 0.01}}>
                      <Text style={styles.dateText}>16/12/2021</Text>
                      <Text style={styles.timeText}>12:00pm - 01:00pm</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  bottom: SCREEN_HEIGHT * 0.029,
                  width: SCREEN_WIDTH * 0.865,
                  borderBottomWidth: 1,
                  borderColor: Colors.Light_Grayish_Blue_White,
                  // marginHorizontal: SCREEN_HEIGHT * 0.01,
                }}></Text>
              <View style={styles.ViewBottom}>
                <Text style={styles.comText}>Completed in 50mins</Text>
                <Pressable
                  onPress={() => navigation.navigate('Appointment Details')}
                  style={{flexDirection: 'row'}}>
                  <Text style={styles.viewText}>View Details</Text>
                  <Svg
                    id="arrow_forward_black_24dp"
                    width="17"
                    height="17"
                    viewBox="0 0 18 18">
                    <Path
                      id="Path_39"
                      data-name="Path 39"
                      d="M0,0H18V18H0Z"
                      fill="none"
                    />
                    <Path
                      id="Path_40"
                      data-name="Path 40"
                      d="M10,4,8.943,5.057,13.128,9.25H4v1.5h9.128L8.943,14.943,10,16l6-6Z"
                      transform="translate(-1 -1)"
                      fill={Colors.LimeGreen}
                    />
                  </Svg>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.topContentBorder}>
            <Text
              style={{
                position: 'absolute',
                borderWidth: 3,
                height: SCREEN_HEIGHT * 0.3,
                borderColor: Colors.Heavey_Red,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              }}></Text>
            <View style={styles.topWrapperUserDetail}>
              <View style={styles.UserView}>
              <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
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

                <View>
                  <Text style={styles.frontText}>Vijay Sharma</Text>
                  <Text style={styles.frontUserText}>Docter</Text>
                  <Pressable>
                    <View style={styles.getCancelView}>
                      <Text style={styles.getCencleText}>CANCELLED</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View style={styles.detailesView}>
                <Text
                  style={{
                    width: SCREEN_WIDTH * 0.9,
                    borderBottomWidth: 1,
                    borderColor: Colors.Light_Grayish_Blue_White,
                    position: 'absolute',
                    marginHorizontal: SCREEN_HEIGHT * 0.01,
                    marginVertical: SCREEN_HEIGHT * 0.018,
                  }}></Text>
                <View style={styles.detailesTypeView}>
                  <Text style={styles.detailesTextType}>Type</Text>
                  <View
                    style={{
                      backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
                      padding: 17,
                      height: SCREEN_HEIGHT * 0.076,
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: SCREEN_WIDTH * 0.425,
                      borderRadius: 5,
                      marginTop: SCREEN_HEIGHT * 0.02,
                    }}>
                    <Svg width="29" height="29" viewBox="0 0 29 29">
                      <G
                        id="voice_chat_black_24dp"
                        transform="translate(-2.846 -2.846)">
                        <Path
                          id="Path_107"
                          data-name="Path 107"
                          d="M28.1,2H4.9A2.9,2.9,0,0,0,2.014,4.9L2,31l5.8-5.8H28.1A2.909,2.909,0,0,0,31,22.3V4.9A2.909,2.909,0,0,0,28.1,2Zm0,20.3H6.6L4.9,24V4.9H28.1Zm-8.7-7.83,4.35,3.48V9.25L19.4,12.73V9.25H9.25v8.7H19.4Z"
                          transform="translate(0.846 0.846)"
                          fill="#191919"
                        />
                      </G>
                    </Svg>
                    <View style={{marginHorizontal: SCREEN_HEIGHT * 0.01}}>
                      <Text style={styles.virtualText}>VIRTUAL</Text>
                      <Text style={styles.virtualRupee}>{'\u20B9'} 2250.0</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.detailesTextSlot}>Date & Time Slot</Text>
                  <View
                    style={{
                      backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
                      padding: 17,
                      height: SCREEN_HEIGHT * 0.076,
                      flexDirection: 'row',
                      width: SCREEN_WIDTH * 0.425,
                      borderRadius: 5,
                      alignItems: 'center',
                      marginTop: SCREEN_HEIGHT * 0.02,
                      marginHorizontal: SCREEN_HEIGHT * 0.01,
                    }}>
                    <View>
                      <Material
                        name="calendar-outline"
                        color={Colors.Black}
                        size={14}
                      />
                      <Material
                        name="clock-time-five-outline"
                        color={Colors.Black}
                        size={14}
                        style={{marginTop: 2}}
                      />
                    </View>
                    <View style={{marginHorizontal: SCREEN_HEIGHT * 0.01}}>
                      <Text style={styles.dateText}>16/12/2021</Text>
                      <Text style={styles.timeText}>12:00pm - 01:00pm</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  bottom: SCREEN_HEIGHT * 0.029,
                  width: SCREEN_WIDTH * 0.865,
                  borderBottomWidth: 1,
                  borderColor: Colors.Light_Grayish_Blue_White,
                  // marginHorizontal: SCREEN_HEIGHT * 0.01,
                }}></Text>
              <View style={styles.ViewBottom}>
                <Text style={styles.comText}>Cencalled By Client</Text>
                <Pressable
                  onPress={() => navigation.navigate('Appointment Details')}
                  style={{flexDirection: 'row'}}>
                  <Text style={styles.viewText}>View Details</Text>
                  <Svg
                    id="arrow_forward_black_24dp"
                    width="17"
                    height="17"
                    viewBox="0 0 18 18">
                    <Path
                      id="Path_39"
                      data-name="Path 39"
                      d="M0,0H18V18H0Z"
                      fill="none"
                    />
                    <Path
                      id="Path_40"
                      data-name="Path 40"
                      d="M10,4,8.943,5.057,13.128,9.25H4v1.5h9.128L8.943,14.943,10,16l6-6Z"
                      transform="translate(-1 -1)"
                      fill={Colors.LimeGreen}
                    />
                  </Svg>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.topContentBorder}>
            <Text
              style={{
                position: 'absolute',
                borderWidth: 3,
                height: SCREEN_HEIGHT * 0.3,
                borderColor: Colors.Heavey_Red,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              }}></Text>
            <View style={styles.topWrapperUserDetail}>
              <View style={styles.UserView}>
              <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
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

                <View>
                  <Text style={styles.frontText}>Vijay Sharma</Text>
                  <Text style={styles.frontUserText}>Docter</Text>
                  <Pressable>
                    <View style={styles.getCancelView}>
                      <Text style={styles.getCencleText}>CANCELLED</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View style={styles.detailesView}>
                <Text
                  style={{
                    width: SCREEN_WIDTH * 0.9,
                    borderBottomWidth: 1,
                    borderColor: Colors.Light_Grayish_Blue_White,
                    position: 'absolute',
                    marginHorizontal: SCREEN_HEIGHT * 0.01,
                    marginVertical: SCREEN_HEIGHT * 0.018,
                  }}></Text>
                <View style={styles.detailesTypeView}>
                  <Text style={styles.detailesTextType}>Type</Text>
                  <View
                    style={{
                      backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
                      padding: 17,
                      height: SCREEN_HEIGHT * 0.076,
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: SCREEN_WIDTH * 0.425,
                      borderRadius: 5,
                      marginTop: SCREEN_HEIGHT * 0.02,
                    }}>
                    <Svg width="29" height="29" viewBox="0 0 29 29">
                      <G
                        id="voice_chat_black_24dp"
                        transform="translate(-2.846 -2.846)">
                        <Path
                          id="Path_107"
                          data-name="Path 107"
                          d="M28.1,2H4.9A2.9,2.9,0,0,0,2.014,4.9L2,31l5.8-5.8H28.1A2.909,2.909,0,0,0,31,22.3V4.9A2.909,2.909,0,0,0,28.1,2Zm0,20.3H6.6L4.9,24V4.9H28.1Zm-8.7-7.83,4.35,3.48V9.25L19.4,12.73V9.25H9.25v8.7H19.4Z"
                          transform="translate(0.846 0.846)"
                          fill="#191919"
                        />
                      </G>
                    </Svg>
                    <View style={{marginHorizontal: SCREEN_HEIGHT * 0.01}}>
                      <Text style={styles.virtualText}>VIRTUAL</Text>
                      <Text style={styles.virtualRupee}>{'\u20B9'} 2250.0</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.detailesTextSlot}>Date & Time Slot</Text>
                  <View
                    style={{
                      backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
                      padding: 17,
                      height: SCREEN_HEIGHT * 0.076,
                      flexDirection: 'row',
                      width: SCREEN_WIDTH * 0.425,
                      borderRadius: 5,
                      alignItems: 'center',
                      marginTop: SCREEN_HEIGHT * 0.02,
                      marginHorizontal: SCREEN_HEIGHT * 0.01,
                    }}>
                    <View>
                      <Material
                        name="calendar-outline"
                        color={Colors.Black}
                        size={14}
                      />
                      <Material
                        name="clock-time-five-outline"
                        color={Colors.Black}
                        size={14}
                        style={{marginTop: 2}}
                      />
                    </View>
                    <View style={{marginHorizontal: SCREEN_HEIGHT * 0.01}}>
                      <Text style={styles.dateText}>16/12/2021</Text>
                      <Text style={styles.timeText}>12:00pm - 01:00pm</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  bottom: SCREEN_HEIGHT * 0.029,
                  width: SCREEN_WIDTH * 0.865,
                  borderBottomWidth: 1,
                  borderColor: Colors.Light_Grayish_Blue_White,
                  // marginHorizontal: SCREEN_HEIGHT * 0.01,
                }}></Text>
              <View style={styles.ViewBottom}>
                <Text style={styles.comText}>Cencalled By You</Text>
                <Pressable
                  onPress={() => navigation.navigate('Appointment Details')}
                  style={{flexDirection: 'row'}}>
                  <Text style={styles.viewText}>View Details</Text>
                  <Svg
                    id="arrow_forward_black_24dp"
                    width="17"
                    height="17"
                    viewBox="0 0 18 18">
                    <Path
                      id="Path_39"
                      data-name="Path 39"
                      d="M0,0H18V18H0Z"
                      fill="none"
                    />
                    <Path
                      id="Path_40"
                      data-name="Path 40"
                      d="M10,4,8.943,5.057,13.128,9.25H4v1.5h9.128L8.943,14.943,10,16l6-6Z"
                      transform="translate(-1 -1)"
                      fill={Colors.LimeGreen}
                    />
                  </Svg>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Mostly_White_Cyan,
  },
  cardSelected: {
    borderWidth: 1,
    borderColor: Colors.LimeGreen,
    borderRadius: 100,
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HEIGHT * 0.05,
    backgroundColor: Colors.LimeGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: Colors.Light_Grayish_Blue,
    borderRadius: 100,
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HEIGHT * 0.05,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTextFirst: {
    fontSize: 11,
    fontFamily: FontFamily.medium,
    color: Colors.White,
  },
  inActiveTextFirst: {
    fontSize: 11,
    fontFamily: FontFamily.medium,
    color: Colors.Week_Black,
  },
  textCount: {
    marginTop: SCREEN_HEIGHT * 0.016,
    marginHorizontal: 13,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
    color: Colors.Week_Black,
  },
  topContentBorder: {
    borderWidth: 1,
    borderColor: Colors.Light_Grayish_Blue_White,
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: Colors.White,
    width: 335,
    marginHorizontal: 13,
  },
  topWrapperUserDetail: {
    height: SCREEN_HEIGHT * 0.3,
    padding: 12,
    // paddingHorizontal : 17
  },
  UserView: {
    flexDirection: 'row',
  },
  frontText: {
    marginVertical: 3,
    left: SCREEN_HEIGHT * 0.02,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.medium,
  },
  frontUserText: {
    bottom: SCREEN_HEIGHT * 0.012,
    left: SCREEN_HEIGHT * 0.02,
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.regular,
    position: 'absolute',
  },
  getCompText: {
    color: Colors.Heavey_Green,
    fontSize: 10,
    fontFamily: FontFamily.regular,
    marginVertical: SCREEN_HEIGHT * 0.007,
    alignSelf: 'center',
    

  },
  getCompView: {
    marginLeft: SCREEN_HEIGHT * 0.27,
    bottom: SCREEN_HEIGHT * 0.041,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: Colors.Heavey_Green,
    backgroundColor: Colors.Week_Green,
    // width: 81,
    width: SCREEN_WIDTH * 0.23,
    height: 25,
  },

  detailesView: {
    flexDirection: 'row',
    paddingVertical: SCREEN_HEIGHT * 0.01,
    justifyContent: 'space-between',
  },
  detailesTypeView: {
    // paddingHorizontal: 1,
  },
  detailesTextType: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.medium,
  },
  detailesTextSlot: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.medium,
  },
  virtualText: {
    color: Colors.Week_Black,
    fontSize: 11,
    fontFamily: FontFamily.regular,
  },
  virtualRupee: {
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
    bottom: SCREEN_HEIGHT * 0.006,
  },
  dateText: {
    color: Colors.Week_Black,
    fontSize: 11,
    fontFamily: FontFamily.medium,
  },
  timeText: {
    color: Colors.Week_Black,
    fontSize: 11,
    fontFamily: FontFamily.medium,
  },
  ViewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: SCREEN_HEIGHT * 0.015,
  },
  comText: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 10,
    fontFamily: FontFamily.regular,
  },
  viewText: {
    fontSize: 12,
    fontFamily: FontFamily.medium,
    color: Colors.LimeGreen,
  },

  getCancelView: {
    marginLeft: SCREEN_HEIGHT * 0.27,
    bottom: SCREEN_HEIGHT * 0.041,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: Colors.Heavey_Red,
    backgroundColor: Colors.Week_Red,
    // width: 81,
    width: SCREEN_WIDTH * 0.23,
    height: 25,
  },
  getCencleText: {
    color: Colors.Heavey_Red,
    fontSize: 10,
    fontFamily: FontFamily.regular,
    marginVertical: SCREEN_HEIGHT * 0.007,
    alignSelf: 'center',
  },
});
