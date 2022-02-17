import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  StatusBar,
  FlatList,
} from 'react-native';
import Svg, {Image, Defs, Pattern, Rect, G, Path} from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import CalendarStrip from 'react-native-calendar-strip';

import {FontFamily} from '../../Helper/FontFamily';
import {Colors} from '../../Helper/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import RadioButtonCard from '../../Component/RadioButtonCard';
import {GetOtpButton} from '../../Component/GetOtpButton';

const data = [
  {
    title: 'Today',
    name: '08',
    key: '1',
  },
  {
    title: 'Sat',
    name: '09',
    key: '2',
  },
  {
    title: 'Sun',
    name: '10',
    key: '3',
  },
  {
    title: 'Mon',
    name: '11',
    key: '4',
  },
  {
    title: 'Tue',
    name: '12',
    key: '5',
  },
  {
    title: 'Wed',
    name: '13',
    key: '6',
  },
  {
    title: 'Thu',
    name: '14',
    key: '7',
  },
];

export function ScheduleBooking() {
  const origin = {latitude: 37.3318456, longitude: -122.0296002};
  const destination = {latitude: 37.771707, longitude: -122.4053769};
  const GOOGLE_MAPS_APIKEY = '877362440828-uakcg0al37r6n691k8bki25uhsbeq2j7.apps.googleusercontent.com';
  const [active, isActive] = useState(1);
  const [selectedItem] = useState(0);
  const [selectedSchedule, inSelectedSchedule] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <ScrollView>
        <View style={styles.topWrapperDocterDetail}>
          <View style={styles.docterView}>
            <Svg width="45" height="45">
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
              <Text style={styles.frontText}>Vijay sharma</Text>
              <Text style={styles.frontDocterText}>Docter</Text>
              <Pressable>
                <View style={styles.getDirecView}>
                  
                 
                  <Text style={styles.getDirecText}>Get Direction</Text>
                  <Svg width="14.018" height="14" viewBox="0 0 14.018 14">
                    <G
                      id="directions_black_24dp"
                      transform="translate(-1.005 -1.014)">
                      <Path
                        id="Path_121"
                        data-name="Path 121"
                        d="M14.66,7.117,8.918,1.375a1.307,1.307,0,0,0-1.8,0L1.378,7.111a1.269,1.269,0,0,0,0,1.8l5.736,5.736a1.277,1.277,0,0,0,1.8,0l5.73-5.73A1.269,1.269,0,0,0,14.66,7.117ZM8.019,13.745,2.283,8.009,8.019,2.273l5.736,5.736ZM5.463,7.378V9.928H6.738V8.016H9.287V9.609l2.231-2.231L9.287,5.148V6.741H6.1A.639.639,0,0,0,5.463,7.378Z"
                        transform="translate(0 0)"
                        fill="#11abe6"
                      />
                    </G>
                  </Svg>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.mapAddressView}>
            <FontAwesome5
              name="map-marker-alt"
              size={15}
              color={Colors.Cell_Phone_Heavy_Dark}
            />
            <Text style={styles.mapAddressText}>
              45, D-S-4, Vijay Nager, Indore (452010)
            </Text>
          </View>
        </View>
        <Text style={styles.contentTypeText}>Appointment Type</Text>
        <View style={styles.contentWrapperType}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {/* <Entypo name="chat" color={Colors.Black} size={30} /> */}
            <Pressable
              style={active === 1 ? styles.cardSelected : styles.card}
              onPress={() => isActive(1)}>
              <View style={{alignItems: 'center', top: 15}}>
                <Svg width="30" height="30" viewBox="0 0 30 30">
                  <Path
                    id="Path_115"
                    data-name="Path 115"
                    d="M21.5,5V15.5H6.755l-.885.885-.87.87V5H21.5M23,2H3.5A1.5,1.5,0,0,0,2,3.5v21l6-6H23A1.5,1.5,0,0,0,24.5,17V3.5A1.5,1.5,0,0,0,23,2Zm7.5,6h-3V21.5H8v3A1.5,1.5,0,0,0,9.5,26H26l6,6V9.5A1.5,1.5,0,0,0,30.5,8Z"
                    transform="translate(-2 -2)"
                    fill={
                      active === 1
                        ? Colors.LimeGreen
                        : Colors.Cell_Phone_Heavy_Dark
                    }
                  />
                </Svg>
                <Text
                  style={
                    active === 1 ? styles.activeWalkText : styles.inActiveText
                  }>
                  CHAT
                </Text>
                <Text
                  style={
                    active === 1 ? styles.activeWalkRupee : styles.inActiveRupee
                  }>
                  {'\u20B9'} 2000
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={active == 2 ? styles.cardSelected : styles.card}
              onPress={() => isActive(2)}>
              <View style={{alignItems: 'center', top: 15}}>
                <Material
                  name="message-video"
                  color={
                    active === 2
                      ? Colors.LimeGreen
                      : Colors.Cell_Phone_Heavy_Dark
                  }
                  size={30}
                />

                <Text
                  style={
                    active === 2 ? styles.activeWalkText : styles.inActiveText
                  }>
                  VIRTUAL
                </Text>
                <Text
                  style={
                    active === 2 ? styles.activeWalkRupee : styles.inActiveRupee
                  }>
                  {'\u20B9'} 2250
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={active === 3 ? styles.cardSelected : styles.card}
              onPress={() => isActive(3)}>
              <View style={{alignItems: 'center', top: 15}}>
                <MaterialIcons
                  name="directions-walk"
                  color={
                    active === 3
                      ? Colors.LimeGreen
                      : Colors.Cell_Phone_Heavy_Dark
                  }
                  size={30}
                />

                <Text
                  style={
                    active === 3 ? styles.activeWalkText : styles.inActiveText
                  }>
                  WALK IN
                </Text>
                <Text
                  style={
                    active == 3 ? styles.activeWalkRupee : styles.inActiveRupee
                  }>
                  {'\u20B9'} 2500
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.contentViewBottm}>
            <Foundation
              style={{marginTop: SCREEN_HEIGHT * 0.007}}
              size={14}
              name="info"
              color={Colors.Cell_Phone_Heavy_Dark}
            />
            <View style={{marginRight: SCREEN_WIDTH * 0.08}}>
              <Text style={styles.contenTextBottom}>
                In Virtual Booking you will be able to make a Vide or Audio Call
                and chat as well the Consultant
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.contentSelectText}>Select Schedule</Text>
        <View style={styles.contentSelectScheduleView}>
          <Text
            style={{
              color: Colors.Cell_Phone_Heavy_Dark,
              paddingTop: SCREEN_HEIGHT * 0.01,
              fontFamily: FontFamily.medium,
              fontSize: 12,
            }}>
            Date:
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={item => item.key.toString()}
            extraData={selectedItem}
            data={data}
            renderItem={({item}) => (
              <View style={{marginHorizontal: 5}}>
                <Pressable
                  style={
                    selectedSchedule === item.key
                      ? styles.scheduleCardActive
                      : styles.scheduleCard
                  }
                  onPress={() => inSelectedSchedule(item.key)}>
                  <View style={{alignItems: 'center', top: 8}}>
                    <Text
                      style={
                        selectedSchedule === item.key
                          ? styles.numberTextActive
                          : styles.numberTextInActive
                      }>
                      {item.name}
                    </Text>
                    <Text
                      style={
                        selectedSchedule === item.key
                          ? styles.dateTextActive
                          : styles.dateTextInActive
                      }>
                      {item.title}
                    </Text>
                  </View>
                </Pressable>
              </View>
            )}
          />
          <View>
            <Text
              style={{
                fontFamily: FontFamily.medium,
                fontSize: 12,
                color: Colors.Cell_Phone_Heavy_Dark,
                paddingTop: SCREEN_HEIGHT * 0.01,
              }}>
              Time Slot:
            </Text>
            <View>
              <RadioButtonCard />
            </View>
          </View>
        </View>
        <View style={{paddingVertical: SCREEN_HEIGHT * 0.03}}>
          <GetOtpButton
            verifyOtp={'Confirm Schedule'}
            verifyButtonText={styles.bottomTextButton}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Mostly_White_Cyan,
  },
  topWrapperDocterDetail: {
    backgroundColor: Colors.White,
    marginVertical: 20,
    height: SCREEN_HEIGHT * 0.144,
    padding: 12,
  },
  docterView: {
    flexDirection: 'row',
  },
  frontText: {
    marginVertical: 3,
    left: SCREEN_HEIGHT * 0.02,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.medium,
  },
  frontDocterText: {
    bottom: SCREEN_HEIGHT * 0.002,
    left: SCREEN_HEIGHT * 0.02,
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.regular,
    position: 'absolute',
  },
  getDirecText: {
    color: Colors.Vivid_Blue,
    paddingRight: 5,
    fontFamily: FontFamily.medium,
  },
  getDirecView: {
    marginLeft: SCREEN_HEIGHT * 0.265,
    bottom: SCREEN_HEIGHT * 0.022,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.Vivid_Blue,
  },
  mapAddressView: {
    marginVertical: 10,
    marginHorizontal: 4,
    flexDirection: 'row',
  },
  mapAddressText: {
    color: Colors.Cell_Phone_Heavy_Dark,
    marginLeft: SCREEN_HEIGHT * 0.01,
    fontFamily: FontFamily.regular,
    fontSize: 11,
  },
  contentTypeText: {
    paddingHorizontal: 13,
    bottom: SCREEN_HEIGHT * 0.01,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
  },
  contentWrapperType: {
    backgroundColor: Colors.White,
    paddingHorizontal: 10,
  },
  card: {
    marginTop: SCREEN_HEIGHT / 50,
    height: SCREEN_HEIGHT * 0.14,
    width: SCREEN_WIDTH * 0.28,
    backgroundColor: Colors.White,
    elevation: 2,
    borderColor: Colors.Light_Grayish_Blue_White,
    borderWidth: 0.1,
    borderRadius: 5,
  },
  cardSelected: {
    marginTop: SCREEN_HEIGHT / 50,
    height: SCREEN_HEIGHT * 0.14,
    width: SCREEN_WIDTH * 0.28,
    borderColor: Colors.LimeGreen,
    borderWidth: 1,
    backgroundColor: Colors.White,
    elevation: 2,
    borderRadius: 5,
  },
  activeWalkText: {
    color: Colors.LimeGreen,
    fontSize: 11,
    fontFamily: FontFamily.regular,
  },
  inActiveText: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 11,
    fontFamily: FontFamily.regular,
  },
  activeWalkRupee: {
    fontSize: 14,
    fontFamily: FontFamily.semibold,
    color: Colors.LimeGreen,
  },
  inActiveRupee: {
    fontSize: 14,
    fontFamily: FontFamily.semibold,
    color: Colors.Cell_Phone_Heavy_Dark,
  },
  contentViewBottm: {
    paddingHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'row',
    backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
  },
  contenTextBottom: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 10,
    fontFamily: FontFamily.regular,
    marginLeft: SCREEN_HEIGHT * 0.01,
    lineHeight: 15,
  },
  contentSelectText: {
    paddingHorizontal: 13,
    top: SCREEN_HEIGHT * 0.02,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
  },
  contentSelectScheduleView: {
    marginVertical: SCREEN_HEIGHT * 0.02,
    backgroundColor: Colors.White,
    paddingHorizontal: 13,
  },
  bottomTextButton: {
    color: Colors.White,
    fontFamily: FontFamily.medium,
    fontSize: 12,
    alignSelf: 'center',
    paddingVertical: SCREEN_HEIGHT * 0.027,
  },
  scheduleCardActive: {
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_HEIGHT * 0.09,
    backgroundColor: Colors.LimeGreen,
    elevation: 2,
    shadowColor: Colors.Black,
    borderRadius: 5,
  },
  scheduleCard: {
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_HEIGHT * 0.09,
    backgroundColor: Colors.White,
    elevation: 2,
    borderColor: Colors.Light_Grayish_Blue_White,
    borderRadius: 5,
  },
  dateTextActive: {
    color: Colors.White,
    fontSize: 10,
    fontFamily: 'bold',
  },
  dateTextInActive: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontFamily: 'bold',
    fontSize: 10,
  },
  numberTextActive: {
    color: Colors.White,
    fontSize: 18,
    fontFamily: FontFamily.medium,
  },
  numberTextInActive: {
    fontFamily: FontFamily.medium,
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 18,
  },
});
