import React, {useRef, useEffect, useState} from 'react';
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

import Svg, {
  Image,
  Defs,
  Pattern,
  Rect,
  G,
  Path,
  Filter,
  FeComposite,
  FeGaussianBlur,
  FeOffset,
  FeFlood,
} from 'react-native-svg';

import {ScrollView} from 'react-native-gesture-handler';
import Stars from 'react-native-stars';
import Accordion from '@jialing/react-native-accordion';

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {Colors} from '../../Helper/Colors';
import {GetOtpButton} from '../../Component/GetOtpButton';
import {FontFamily} from '../../Helper/FontFamily';
import RadioButtonCard from '../../Component/RadioButtonCard';
import {getAllAppointmentData} from '../../Helper/API_Call/API_Call';

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

export function VenderAllAppointment({navigation}) {
  const [active, isActive] = useState(1);
  const [selectedItem] = useState(0);
  const [selectedSchedule, inSelectedSchedule] = useState(false);
  const [briefExpandAccept, setBriefExpandAccept] = useState(false);
  const [briefExpandAcceptTwo, setBriefExpandAcceptTwo] = useState(false);
  const [briefExpandPending, setBriefExpandPending] = useState(false);
  const [briefExpandPendingTwo, setBriefExpandPendingTwo] = useState(false);
  const [briefExpandLive, setBriefExpandLive] = useState(false);

  const [appointmentKey, appointmentValue] = useState([]);
  const [appointmentTime, setAppointmentTime] = useState(null);
  const [appointmentType, setAppointmentType] = useState(null);

  // useEffect(() => {
  //   getAppoitmentVender();
  // }, []);
  // const getAppoitmentVender = () => {
  //   getAllAppointmentData().then(async res => {
  //     let response = res;
  //     appointmentValue(response.data.response);
  //     var AllData = response.data.response[0];
  //     // console.log(appointmentKey, '----------------appointmentKey')
 
  //     setAppointmentTime(AllData.appointment_time);
  //     setAppointmentType(AllData.appointment_type);
  //     // console.log(response.data.response[0].appointment_time, '----------tme')
  //   });
  // };
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
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
          <Text style={styles.frontText}>Hello!</Text>
          <Text style={styles.frontUserText}>Vijay Sharma</Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 13,
          marginTop: SCREEN_HEIGHT * 0.025,
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
              PENDING
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
              ACCEPTED
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
              LIVE
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginHorizontal: 10, marginTop: SCREEN_HEIGHT * 0.025}}>
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
      </View>
      <ScrollView>
        {active === 1 ? (
          <View style={{}}>
            <Text style={styles.contentText}>Pending Appointments</Text>
            <View style={styles.userDetailsView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: SCREEN_HEIGHT * 0.02,
                }}>
                <Text style={styles.textUserSlot}>Slot - 1</Text>
                <Text style={styles.textUserTime}>TODAY | 12:00pm-01:00pm</Text>
              </View>

              <View style={styles.userBorderViewAccept}>
                <View style={styles.userView}>
                  <Svg width="50" height="50" viewBox="0 0 50 50">
                    <Defs>
                      <Pattern
                        id="pattern"
                        width="1"
                        height="1"
                        viewBox="0 1.492 50 50">
                        <Image
                          preserveAspectRatio="xMidYMid slice"
                          width="50"
                          height="62.439"
                          xlinkHref={require('../../Assets/Images/UserPics/Outdoors-man-portrait_(cropped)-image.jpg')}
                        />
                      </Pattern>
                    </Defs>
                    <Rect
                      id="Outdoors-man-portrait__cropped_"
                      data-name="Outdoors-man-portrait_(cropped)"
                      width="50"
                      height="50"
                      rx="8"
                      fill="url(#pattern)"
                    />
                  </Svg>
                  <View style={{marginRight: SCREEN_HEIGHT * 0.17}}>
                    <Text style={styles.userfrontText}>Arun Mehta</Text>
                    <Text style={styles.timeUserText}>
                      Today at {appointmentTime}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <View style={styles.getUserView}>
                      <Svg
                        id="phone_black_24dp"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15">
                        <Path
                          id="Path_18"
                          data-name="Path 18"
                          d="M5.95,4.667a10.26,10.26,0,0,0,.375,2.158l-1,1a12.355,12.355,0,0,1-.633-3.158H5.95m8.217,10.017a10.627,10.627,0,0,0,2.167.375V16.3a12.855,12.855,0,0,1-3.167-.625l1-.992M6.75,3H3.833A.836.836,0,0,0,3,3.833,14.165,14.165,0,0,0,17.167,18,.836.836,0,0,0,18,17.167V14.258a.836.836,0,0,0-.833-.833,9.506,9.506,0,0,1-2.975-.475.7.7,0,0,0-.258-.042.854.854,0,0,0-.592.242l-1.833,1.833A12.624,12.624,0,0,1,6.017,9.492L7.85,7.658a.836.836,0,0,0,.208-.85,9.467,9.467,0,0,1-.475-2.975A.836.836,0,0,0,6.75,3Z"
                          transform="translate(-3 -3)"
                          fill="#fff"
                        />
                      </Svg>
                    </View>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: Colors.Light_Grayish_Blue,
                    bottom: SCREEN_HEIGHT * 0.029,
                  }}></Text>
                <View style={styles.userDetailView}>
                  <Text style={styles.textType}>Appointment Type:</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Svg width="13" height="13" viewBox="0 0 29 29">
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
                    <Text style={styles.textVirtual}>{appointmentType}</Text>
                  </View>
                </View>
                <View style={styles.userDetailView}>
                  <Text style={styles.textType}>Successfully Paid:</Text>
                  <Text style={styles.textVirtual}>{'\u20B9'} 2250.0</Text>
                </View>
                <View style={styles.messageView}>
                  <TouchableOpacity
                    style={{
                      marginVertical: SCREEN_HEIGHT * 0.01,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                    onPress={() => setBriefExpandPending(!briefExpandPending)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <MaterialCommunityIcons
                        name="message-text-outline"
                        color={Colors.Black}
                      />
                      <Text style={styles.messageText}>Message</Text>
                    </View>
                    <View>
                      <FontAwesome
                        name={briefExpandPending ? 'angle-down' : 'angle-up'}
                        color={Colors.Very_Week_Dark}
                        size={15}
                      />
                    </View>
                  </TouchableOpacity>
                  <Accordion expand={briefExpandPending}>
                    <Text
                      style={{
                        borderTopWidth: 0.5,
                        borderColor: Colors.Light_Grayish_Blue,
                      }}></Text>
                    <Text style={styles.messageBoxText}>
                      Gofinx doctor is responsible for all sides of care of a
                      patient. He diagnose, educate, and treat patients to
                      ensure that he have the best possible care.
                    </Text>
                  </Accordion>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.buttonBorder}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonBorderConnect}>
                    <Text style={styles.connectText}>Accept</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: SCREEN_HEIGHT * 0.02,
                }}>
                <Text style={styles.textUserSlot}>Slot - 2</Text>
                <Text style={styles.textUserTime}>TODAY | 01:00pm-02:00pm</Text>
              </View>
              <View style={{marginBottom: SCREEN_HEIGHT * 0.15}}>
                <View style={styles.userBorderViewAccept}>
                  <View style={styles.userView}>
                    <Svg width="50" height="50" viewBox="0 0 50 50">
                      <Defs>
                        <Pattern
                          id="pattern"
                          width="1"
                          height="1"
                          viewBox="0 1.492 50 50">
                          <Image
                            preserveAspectRatio="xMidYMid slice"
                            width="50"
                            height="62.439"
                            xlinkHref={require('../../Assets/Images/UserPics/Outdoors-man-portrait_(cropped)-image.jpg')}
                          />
                        </Pattern>
                      </Defs>
                      <Rect
                        id="Outdoors-man-portrait__cropped_"
                        data-name="Outdoors-man-portrait_(cropped)"
                        width="50"
                        height="50"
                        rx="8"
                        fill="url(#pattern)"
                      />
                    </Svg>
                    <View style={{marginRight: SCREEN_HEIGHT * 0.17}}>
                      <Text style={styles.userfrontText}>Arun Mehta</Text>
                      <Text style={styles.timeUserText}>Today at 11:47 AM</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={styles.getUserView}>
                        <Svg
                          id="phone_black_24dp"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15">
                          <Path
                            id="Path_18"
                            data-name="Path 18"
                            d="M5.95,4.667a10.26,10.26,0,0,0,.375,2.158l-1,1a12.355,12.355,0,0,1-.633-3.158H5.95m8.217,10.017a10.627,10.627,0,0,0,2.167.375V16.3a12.855,12.855,0,0,1-3.167-.625l1-.992M6.75,3H3.833A.836.836,0,0,0,3,3.833,14.165,14.165,0,0,0,17.167,18,.836.836,0,0,0,18,17.167V14.258a.836.836,0,0,0-.833-.833,9.506,9.506,0,0,1-2.975-.475.7.7,0,0,0-.258-.042.854.854,0,0,0-.592.242l-1.833,1.833A12.624,12.624,0,0,1,6.017,9.492L7.85,7.658a.836.836,0,0,0,.208-.85,9.467,9.467,0,0,1-.475-2.975A.836.836,0,0,0,6.75,3Z"
                            transform="translate(-3 -3)"
                            fill="#fff"
                          />
                        </Svg>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: Colors.Light_Grayish_Blue,
                      bottom: SCREEN_HEIGHT * 0.029,
                    }}></Text>
                  <View style={styles.userDetailView}>
                    <Text style={styles.textType}>Appointment Type:</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <MaterialIcons
                        name="directions-walk"
                        color={Colors.Week_Black}
                        size={12}
                        style={{bottom: SCREEN_HEIGHT * 0.003}}
                      />

                      <Text style={styles.textVirtual}>WALK IN</Text>
                    </View>
                  </View>
                  <View style={styles.userDetailView}>
                    <Text style={styles.textType}>Successfully Paid:</Text>
                    <Text style={styles.textVirtual}>{'\u20B9'} 2500.0</Text>
                  </View>
                  <View style={styles.messageView}>
                    <TouchableOpacity
                      style={{
                        marginVertical: SCREEN_HEIGHT * 0.01,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                      onPress={() =>
                        setBriefExpandPendingTwo(!briefExpandPendingTwo)
                      }>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons
                          name="message-text-outline"
                          color={Colors.Black}
                        />
                        <Text style={styles.messageText}>Message</Text>
                      </View>
                      <View>
                        <FontAwesome
                          name={
                            briefExpandPendingTwo ? 'angle-down' : 'angle-up'
                          }
                          color={Colors.Very_Week_Dark}
                          size={15}
                        />
                      </View>
                    </TouchableOpacity>
                    <Accordion expand={briefExpandPendingTwo}>
                      <Text
                        style={{
                          borderTopWidth: 0.5,
                          borderColor: Colors.Light_Grayish_Blue,
                        }}></Text>
                      <Text style={styles.messageBoxText}>
                        Gofinx doctor is responsible for all sides of care of a
                        patient. He diagnose, educate, and treat patients to
                        ensure that he have the best possible care.
                      </Text>
                    </Accordion>
                  </View>
                  <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.buttonBorder}>
                      <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBorderConnect}>
                      <Text style={styles.connectText}>Accept</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>
      <ScrollView>
        {active === 2 ? (
          <View style={{}}>
            <Text style={styles.contentText}>Accepted Appointment</Text>
            <View style={styles.userDetailsView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: SCREEN_HEIGHT * 0.02,
                }}>
                <Text style={styles.textUserSlot}>Slot - 1</Text>
                <Text style={styles.textUserTime}>TODAY | 12:00pm-01:00pm</Text>
              </View>

              <View style={styles.userBorderViewPending}>
                <View style={styles.userView}>
                  <Svg width="50" height="50" viewBox="0 0 50 50">
                    <Defs>
                      <Pattern
                        id="pattern"
                        width="1"
                        height="1"
                        viewBox="0 1.492 50 50">
                        <Image
                          preserveAspectRatio="xMidYMid slice"
                          width="50"
                          height="62.439"
                          xlinkHref={require('../../Assets/Images/UserPics/Outdoors-man-portrait_(cropped)-image.jpg')}
                        />
                      </Pattern>
                    </Defs>
                    <Rect
                      id="Outdoors-man-portrait__cropped_"
                      data-name="Outdoors-man-portrait_(cropped)"
                      width="50"
                      height="50"
                      rx="8"
                      fill="url(#pattern)"
                    />
                  </Svg>
                  <View style={{marginRight: SCREEN_HEIGHT * 0.17}}>
                    <Text style={styles.userfrontText}>Arun Mehta</Text>
                    <Text style={styles.timeUserText}>Today at 11:47 AM</Text>
                  </View>
                  <TouchableOpacity>
                    <View style={styles.getUserView}>
                      <Svg
                        id="phone_black_24dp"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15">
                        <Path
                          id="Path_18"
                          data-name="Path 18"
                          d="M5.95,4.667a10.26,10.26,0,0,0,.375,2.158l-1,1a12.355,12.355,0,0,1-.633-3.158H5.95m8.217,10.017a10.627,10.627,0,0,0,2.167.375V16.3a12.855,12.855,0,0,1-3.167-.625l1-.992M6.75,3H3.833A.836.836,0,0,0,3,3.833,14.165,14.165,0,0,0,17.167,18,.836.836,0,0,0,18,17.167V14.258a.836.836,0,0,0-.833-.833,9.506,9.506,0,0,1-2.975-.475.7.7,0,0,0-.258-.042.854.854,0,0,0-.592.242l-1.833,1.833A12.624,12.624,0,0,1,6.017,9.492L7.85,7.658a.836.836,0,0,0,.208-.85,9.467,9.467,0,0,1-.475-2.975A.836.836,0,0,0,6.75,3Z"
                          transform="translate(-3 -3)"
                          fill="#fff"
                        />
                      </Svg>
                    </View>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: Colors.Light_Grayish_Blue,
                    bottom: SCREEN_HEIGHT * 0.029,
                  }}></Text>
                <View style={styles.userDetailView}>
                  <Text style={styles.textType}>Appointment Type:</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Svg width="13" height="13" viewBox="0 0 29 29">
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
                    <Text style={styles.textVirtual}>VIRTUAL</Text>
                  </View>
                </View>
                <View style={styles.userDetailView}>
                  <Text style={styles.textType}>Successfully Paid:</Text>
                  <Text style={styles.textVirtual}>{'\u20B9'} 2250.0</Text>
                </View>
                <View style={styles.messageView}>
                  <TouchableOpacity
                    style={{
                      marginVertical: SCREEN_HEIGHT * 0.01,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                    onPress={() => setBriefExpandAccept(!briefExpandAccept)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <MaterialCommunityIcons
                        name="message-text-outline"
                        color={Colors.Black}
                      />
                      <Text style={styles.messageText}>Message</Text>
                    </View>
                    <View>
                      <FontAwesome
                        name={briefExpandAccept ? 'angle-down' : 'angle-up'}
                        color={Colors.Very_Week_Dark}
                        size={15}
                      />
                    </View>
                  </TouchableOpacity>
                  <Accordion expand={briefExpandAccept}>
                    <Text
                      style={{
                        borderTopWidth: 0.5,
                        borderColor: Colors.Light_Grayish_Blue,
                      }}></Text>
                    <Text style={styles.messageBoxText}>
                      Gofinx doctor is responsible for all sides of care of a
                      patient. He diagnose, educate, and treat patients to
                      ensure that he have the best possible care.
                    </Text>
                  </Accordion>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.buttonBorder}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonBorderAccepted}>
                    <Text style={styles.textAccepted}>Accepted</Text>
                    <Svg
                      id="check_circle_black_24dp"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15">
                      <Path
                        id="Path_141"
                        data-name="Path 141"
                        d="M9.5,2A7.5,7.5,0,1,0,17,9.5,7.5,7.5,0,0,0,9.5,2ZM8,13.25,4.25,9.5,5.307,8.443,8,11.127l5.693-5.692L14.75,6.5Z"
                        transform="translate(-2 -2)"
                        fill="#00ab44"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: SCREEN_HEIGHT * 0.02,
                }}>
                <Text style={styles.textUserSlot}>Slot - 2</Text>
                <Text style={styles.textUserTime}>TODAY | 01:00pm-02:00pm</Text>
              </View>
              <View style={{marginBottom: SCREEN_HEIGHT * 0.15}}>
                <View style={styles.userBorderViewPending}>
                  <View style={styles.userView}>
                    <Svg width="50" height="50" viewBox="0 0 50 50">
                      <Defs>
                        <Pattern
                          id="pattern"
                          width="1"
                          height="1"
                          viewBox="0 1.492 50 50">
                          <Image
                            preserveAspectRatio="xMidYMid slice"
                            width="50"
                            height="62.439"
                            xlinkHref={require('../../Assets/Images/UserPics/Outdoors-man-portrait_(cropped)-image.jpg')}
                          />
                        </Pattern>
                      </Defs>
                      <Rect
                        id="Outdoors-man-portrait__cropped_"
                        data-name="Outdoors-man-portrait_(cropped)"
                        width="50"
                        height="50"
                        rx="8"
                        fill="url(#pattern)"
                      />
                    </Svg>
                    <View style={{marginRight: SCREEN_HEIGHT * 0.17}}>
                      <Text style={styles.userfrontText}>Arun Mehta</Text>
                      <Text style={styles.timeUserText}>Today at 11:47 AM</Text>
                    </View>
                    <TouchableOpacity>
                      <View style={styles.getUserView}>
                        <Svg
                          id="phone_black_24dp"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15">
                          <Path
                            id="Path_18"
                            data-name="Path 18"
                            d="M5.95,4.667a10.26,10.26,0,0,0,.375,2.158l-1,1a12.355,12.355,0,0,1-.633-3.158H5.95m8.217,10.017a10.627,10.627,0,0,0,2.167.375V16.3a12.855,12.855,0,0,1-3.167-.625l1-.992M6.75,3H3.833A.836.836,0,0,0,3,3.833,14.165,14.165,0,0,0,17.167,18,.836.836,0,0,0,18,17.167V14.258a.836.836,0,0,0-.833-.833,9.506,9.506,0,0,1-2.975-.475.7.7,0,0,0-.258-.042.854.854,0,0,0-.592.242l-1.833,1.833A12.624,12.624,0,0,1,6.017,9.492L7.85,7.658a.836.836,0,0,0,.208-.85,9.467,9.467,0,0,1-.475-2.975A.836.836,0,0,0,6.75,3Z"
                            transform="translate(-3 -3)"
                            fill="#fff"
                          />
                        </Svg>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: Colors.Light_Grayish_Blue,
                      bottom: SCREEN_HEIGHT * 0.029,
                    }}></Text>
                  <View style={styles.userDetailView}>
                    <Text style={styles.textType}>Appointment Type:</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <MaterialIcons
                        name="directions-walk"
                        color={Colors.Week_Black}
                        size={12}
                        style={{bottom: SCREEN_HEIGHT * 0.003}}
                      />
                      <Text style={styles.textVirtual}>WALK IN</Text>
                    </View>
                  </View>
                  <View style={styles.userDetailView}>
                    <Text style={styles.textType}>Successfully Paid:</Text>
                    <Text style={styles.textVirtual}>{'\u20B9'} 2500.0</Text>
                  </View>
                  <View style={styles.messageView}>
                    <TouchableOpacity
                      style={{
                        marginVertical: SCREEN_HEIGHT * 0.01,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                      onPress={() =>
                        setBriefExpandAcceptTwo(!briefExpandAcceptTwo)
                      }>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons
                          name="message-text-outline"
                          color={Colors.Black}
                        />
                        <Text style={styles.messageText}>Message</Text>
                      </View>
                      <View>
                        <FontAwesome
                          name={
                            briefExpandAcceptTwo ? 'angle-down' : 'angle-up'
                          }
                          color={Colors.Very_Week_Dark}
                          size={15}
                        />
                      </View>
                    </TouchableOpacity>
                    <Accordion expand={briefExpandAcceptTwo}>
                      <Text
                        style={{
                          borderTopWidth: 0.5,
                          borderColor: Colors.Light_Grayish_Blue,
                        }}></Text>
                      <Text style={styles.messageBoxText}>
                        Gofinx doctor is responsible for all sides of care of a
                        patient. He diagnose, educate, and treat patients to
                        ensure that he have the best possible care.
                      </Text>
                    </Accordion>
                  </View>
                  <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.buttonBorder}>
                      <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBorderAccepted}>
                      <Text style={styles.textAccepted}>Accepted</Text>
                      <Svg
                        id="check_circle_black_24dp"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15">
                        <Path
                          id="Path_141"
                          data-name="Path 141"
                          d="M9.5,2A7.5,7.5,0,1,0,17,9.5,7.5,7.5,0,0,0,9.5,2ZM8,13.25,4.25,9.5,5.307,8.443,8,11.127l5.693-5.692L14.75,6.5Z"
                          transform="translate(-2 -2)"
                          fill="#00ab44"
                        />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>
      <ScrollView>
        {active === 3 ? (
          <View style={{}}>
            <Text style={styles.contentText}>Live Appointments</Text>
            <View style={styles.userDetailsView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: SCREEN_HEIGHT * 0.02,
                }}>
                <Text style={styles.textUserSlot}>Slot - 1</Text>
                <Text style={styles.textUserTime}>TODAY | 12:00pm-01:00pm</Text>
              </View>

              <View style={styles.userBorderView}>
                <View style={styles.userView}>
                  <Svg width="50" height="50" viewBox="0 0 50 50">
                    <Defs>
                      <Pattern
                        id="pattern"
                        width="1"
                        height="1"
                        viewBox="0 1.492 50 50">
                        <Image
                          preserveAspectRatio="xMidYMid slice"
                          width="50"
                          height="62.439"
                          xlinkHref={require('../../Assets/Images/UserPics/Outdoors-man-portrait_(cropped)-image.jpg')}
                        />
                      </Pattern>
                    </Defs>
                    <Rect
                      id="Outdoors-man-portrait__cropped_"
                      data-name="Outdoors-man-portrait_(cropped)"
                      width="50"
                      height="50"
                      rx="8"
                      fill="url(#pattern)"
                    />
                  </Svg>
                  <View style={{marginRight: SCREEN_HEIGHT * 0.17}}>
                    <Text style={styles.userfrontText}>Arun Mehta</Text>
                    <Text style={styles.timeUserText}>Today at 11:47 AM</Text>
                  </View>
                  <TouchableOpacity>
                    <View style={styles.getUserView}>
                      <Svg
                        id="phone_black_24dp"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15">
                        <Path
                          id="Path_18"
                          data-name="Path 18"
                          d="M5.95,4.667a10.26,10.26,0,0,0,.375,2.158l-1,1a12.355,12.355,0,0,1-.633-3.158H5.95m8.217,10.017a10.627,10.627,0,0,0,2.167.375V16.3a12.855,12.855,0,0,1-3.167-.625l1-.992M6.75,3H3.833A.836.836,0,0,0,3,3.833,14.165,14.165,0,0,0,17.167,18,.836.836,0,0,0,18,17.167V14.258a.836.836,0,0,0-.833-.833,9.506,9.506,0,0,1-2.975-.475.7.7,0,0,0-.258-.042.854.854,0,0,0-.592.242l-1.833,1.833A12.624,12.624,0,0,1,6.017,9.492L7.85,7.658a.836.836,0,0,0,.208-.85,9.467,9.467,0,0,1-.475-2.975A.836.836,0,0,0,6.75,3Z"
                          transform="translate(-3 -3)"
                          fill="#fff"
                        />
                      </Svg>
                    </View>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: Colors.Light_Grayish_Blue,
                    bottom: SCREEN_HEIGHT * 0.029,
                  }}></Text>
                <View style={styles.userDetailView}>
                  <Text style={styles.textType}>Appointment Type:</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Svg width="13" height="13" viewBox="0 0 29 29">
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
                    <Text style={styles.textVirtual}>VIRTUAL</Text>
                  </View>
                </View>
                <View style={styles.userDetailView}>
                  <Text style={styles.textType}>Successfully Paid:</Text>
                  <Text style={styles.textVirtual}>{'\u20B9'} 2250.0</Text>
                </View>
                <View style={styles.messageView}>
                  <TouchableOpacity
                    style={{
                      marginVertical: SCREEN_HEIGHT * 0.01,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                    onPress={() => setBriefExpandLive(!briefExpandLive)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <MaterialCommunityIcons
                        name="message-text-outline"
                        color={Colors.Black}
                      />
                      <Text style={styles.messageText}>Message</Text>
                    </View>
                    <View>
                      <FontAwesome
                        name={briefExpandLive ? 'angle-down' : 'angle-up'}
                        color={Colors.Very_Week_Dark}
                        size={15}
                      />
                    </View>
                  </TouchableOpacity>
                  <Accordion expand={briefExpandLive}>
                    <Text
                      style={{
                        borderTopWidth: 0.5,
                        borderColor: Colors.Light_Grayish_Blue,
                      }}></Text>
                    <Text style={styles.messageBoxText}>
                      Gofinx doctor is responsible for all sides of care of a
                      patient. He diagnose, educate, and treat patients to
                      ensure that he have the best possible care.
                    </Text>
                  </Accordion>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.buttonBorder}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonBorderConnect}>
                    <Text style={styles.connectText}>Connect Now</Text>
                    <Svg
                      id="arrow_forward_black_24dp"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                        fill="#fff"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Mostly_White_Cyan,
  },
  UserView: {
    flexDirection: 'row',
    marginHorizontal: 13,
    marginTop: SCREEN_HEIGHT * 0.025,
  },
  frontText: {
    marginVertical: 3,
    left: SCREEN_HEIGHT * 0.02,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.medium,
  },
  frontUserText: {
    bottom: SCREEN_HEIGHT * 0.008,
    left: SCREEN_HEIGHT * 0.02,
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.regular,
  },
  getCompText: {
    color: Colors.Heavey_Green,
    fontSize: 10,
    fontFamily: FontFamily.regular,
    marginVertical: SCREEN_HEIGHT * 0.007,
    alignSelf: 'center',
  },
  cardSelected: {
    borderWidth: 0.5,
    borderColor: Colors.LimeGreen,
    borderRadius: 100,
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HEIGHT * 0.05,
    backgroundColor: Colors.LimeGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 0.5,
    borderColor: Colors.Light_Grayish_Blue,
    borderRadius: 100,
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HEIGHT * 0.05,
    backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
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
  contentText: {
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
    marginHorizontal: 13,
    marginTop: SCREEN_HEIGHT * 0.025,
  },
  userDetailsView: {
    backgroundColor: Colors.White,
    paddingHorizontal: 12,
  },
  textUserSlot: {
    color: Colors.LimeGreen,
    fontSize: 12,
    fontFamily: FontFamily.semibold,
  },
  textUserTime: {
    color: Colors.Very_Week_Dark,
    fontSize: 11,
    fontFamily: FontFamily.medium,
  },
  userBorderView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.LimeGreen,
    paddingHorizontal: SCREEN_HEIGHT * 0.014,
    backgroundColor: Colors.Dark_White,
    marginBottom: SCREEN_HEIGHT * 0.22,
  },
  userBorderViewAccept: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.Light_Grayish_Blue_White,
    paddingHorizontal: SCREEN_HEIGHT * 0.014,
    backgroundColor: Colors.Dark_White,
  },
  userBorderViewPending: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.Light_Grayish_Blue_White,
    paddingHorizontal: SCREEN_HEIGHT * 0.014,
    backgroundColor: Colors.Dark_White,
  },
  userView: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userfrontText: {
    marginVertical: 4,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.medium,
  },
  timeUserText: {
    color: Colors.Cell_Phone_Heavy_Dark,
    fontSize: 12,
    fontFamily: FontFamily.regular,
  },

  getUserView: {
    // marginLeft: SCREEN_HEIGHT * 0.33,
    // bottom: SCREEN_HEIGHT * 0.033,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.LimeGreen,
    backgroundColor: Colors.LimeGreen,
    width: 31,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: SCREEN_HEIGHT * 0.01,
  },
  textType: {
    color: Colors.Very_Week_Dark,
    fontSize: 11,
    fontFamily: FontFamily.medium,
  },
  textVirtual: {
    color: Colors.Week_Black,
    fontSize: 12,
    fontFamily: FontFamily.medium,
    paddingLeft: SCREEN_HEIGHT * 0.007,
  },
  messageView: {
    backgroundColor: Colors.White,
    paddingHorizontal: SCREEN_HEIGHT * 0.014,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.Light_Grayish_Blue_White,
  },
  messageText: {
    color: Colors.Week_Black,
    fontSize: 13,
    fontFamily: FontFamily.medium,
    paddingHorizontal: 5,
  },
  messageBoxText: {
    color: Colors.Week_Black,
    fontSize: 10,
    fontFamily: FontFamily.regular,
    lineHeight: 16,
    width: SCREEN_WIDTH * 0.7,
    bottom: SCREEN_HEIGHT * 0.014,
  },
  buttonView: {
    marginVertical: SCREEN_HEIGHT * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonBorder: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: Colors.Heavey_Red,
    height: SCREEN_HEIGHT * 0.053,
    width: SCREEN_WIDTH * 0.42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBorderConnect: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: Colors.LimeGreen,
    height: SCREEN_HEIGHT * 0.053,
    width: SCREEN_WIDTH * 0.42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LimeGreen,
    flexDirection: 'row',
  },
  buttonBorderAccepted: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: Colors.Very_Week_White,
    height: SCREEN_HEIGHT * 0.053,
    width: SCREEN_WIDTH * 0.42,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.Very_Week_White,
    flexDirection: 'row',
  },
  cancelText: {
    color: Colors.Heavey_Red,
    fontSize: 12,
    fontFamily: FontFamily.medium,
  },
  connectText: {
    color: Colors.White,
    fontFamily: FontFamily.medium,
    fontSize: 12,
    marginHorizontal: SCREEN_HEIGHT * 0.005,
  },
  textAccepted: {
    color: Colors.Heavey_Green,
    fontFamily: FontFamily.medium,
    fontSize: 12,
    marginHorizontal: SCREEN_HEIGHT * 0.005,
  },
});
