import React, {useState, useEffect} from 'react';
import {
  View,
  Modal,
  Alert,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Stars from 'react-native-stars';

import {Colors} from '../../Helper/Colors';
import {FontFamily} from '../../Helper/FontFamily';
import {GetOtpButton} from '../../Component/GetOtpButton';
import RadioButtonCard from '../../Component/RadioButtonCard';
import {getYourAppointment} from '../../Helper/API_Call/API_Call';

const dataDay = [
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
const data = [
  {
    id: 1,
    img: require('../../Assets/Images/Home_pg/MaleDoc.png'),
    date: '26/12/2021',
    time: '12:00 PM - 01:00 PM',
    confirm: 'conferm',
  },
  {
    id: 2,
    img: require('../../Assets/Images/Home_pg/MaleDoc.png'),
    date: '26/12/2021',
    time: '12:00 PM - 01:00 PM',
    confirm: 'conferm',
  },
  {
    id: 3,
    img: require('../../Assets/Images/Home_pg/MaleDoc.png'),
    date: '26/12/2021',
    time: '12:00 PM - 01:00 PM',
    confirm: 'Pendding',
  },
  {
    id: 4,
    img: require('../../Assets/Images/Home_pg/MaleDoc.png'),
    date: '26/12/2021',
    time: '12:00 PM - 01:00 PM',
    confirm: 'Canceled',
  },
];

export default function AppointmentScreen({navigation}) {
  const [isSelected, setIsSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem] = useState(0);
  const [selectedSchedule, inSelectedSchedule] = useState(false);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.Mostly_White_Cyan,
    },
    card: {
      marginVertical: 8,
      borderWidth: 1,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    txtHead: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 15,
      color: Colors.Mostly_Black,
    },
    details: {
      marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f1f1f1',
    },
    cardImg: {
      marginHorizontal: 10,
      marginVertical: 10,
      flexDirection: 'row',
      marginVertical: 10,
      width: 50,
      height: 50,
      borderRadius: 10,
    },
    txt: {
      fontFamily: 'Poppins-SemiBold',
      color: Colors.Mostly_Black,
    },
    txtOccupation: {
      fontFamily: 'Poppins-Regular',
      color: '#acb3be',
      fontSize: 12,
    },
    vertual: {
      top: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f3fbfe',
      height: 25,
      paddingHorizontal: 16,
      borderRadius: 25,
      borderColor: '#11abe6',
      borderWidth: 1,
    },
    txtBlue: {
      fontFamily: 'Poppins-Regular',
      color: '#11abe6',
      fontSize: 10,
      marginHorizontal: 5,
    },
    date: {
      flexDirection: 'row',
      marginVertical: 10,
      paddingVertical: 5,
      paddingRight: 10,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    txtGreen: {
      fontFamily: 'Poppins-SemiBold',
      color: Colors.LimeGreen,
      fontSize: 10,
    },
    btnCancel: {
      height: 50,
      borderWidth: 1,
      borderRadius: 10,
      // elevation: 1,
      borderColor: '#C2CAD9',
      width: SCREEN_WIDTH * 0.42,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnApprove: {
      height: 50,
      borderWidth: 1,
      borderRadius: 10,
      elevation: 2,
      borderColor: Colors.LimeGreen,
      width: SCREEN_WIDTH * 0.42,
      backgroundColor: Colors.LimeGreen,
      justifyContent: 'center',
      alignItems: 'center',
    },
    txtCancel: {
      fontFamily: 'Poppins-SemiBold',
      color: Colors.Week_Black,
      fontSize: 12,
    },
    txtConnect: {
      fontFamily: 'Poppins-SemiBold',
      color: Colors.White,
      fontSize: 12,
    },
    containerModal: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)',
    },

    modalView: {
      width: '100%',
      height: 410,
      backgroundColor: Colors.White,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      alignItems: 'center',
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 20,
    },
    closeButton: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderRadius: 50,
      padding: 10,
    },
    wrapper: {
      flex: 0.65,
      // marginBottom : SCREEN_HEIGHT * 0.21,
      backgroundColor: Colors.White,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
    },
    contentSelectScheduleView: {
      // marginVertical: SCREEN_HEIGHT * 0.02,
      backgroundColor: Colors.White,
      paddingHorizontal: 13,
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
    buttonText: {
      alignSelf: 'center',
      marginTop: SCREEN_HEIGHT * 0.023,
      color: Colors.White,
      fontSize: 12,
      fontFamily: FontFamily.medium,
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

    verifyButton: {
      textAlign: 'center',
      marginTop: SCREEN_HEIGHT * 0.02,
      fontSize: 12,
      fontFamily: FontFamily.medium,
      color: Colors.White,
    },
  });

  const [appointmentKey, appointmentValue] = useState([]);
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    getAppointment();
    setTimeout(() => {
      setisFetching(false);
    }, 5000);
  }, []);

  //////////Your Appointment API////////////

  const getAppointment = () => {
    getYourAppointment()
      .then(async res => {
        let response = res;
        appointmentValue(response.data.appointment);
        // console.log('appointmentValue');
        // console.log(appointmentValue);
        // console.log('appointmentKey');
        // console.log(appointmentKey);
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 10, marginLeft: 10}}>
        <Text style={styles.txtHead}>Schedules</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert = 'Modal has been close';
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.containerModal}>
          <Pressable
            style={{top: -15}}
            onPress={() => setModalVisible(!modalVisible)}>
            <AntDesign
              color={Colors.White}
              name="close"
              size={22}
              style={styles.closeButton}
            />
          </Pressable>
          <View style={styles.modalView}>
            <View style={styles.wrapper}>
              <View style={{marginTop: SCREEN_HEIGHT * 0.03}}>
                <Text
                  style={{
                    color: Colors.Black,
                    fontSize: 14,
                    fontFamily: FontFamily.semibold,
                    marginHorizontal: 13,
                  }}>
                  Reschedule Booking
                </Text>
                <Text
                  style={{
                    bottom: SCREEN_HEIGHT * 0.027,
                    borderBottomWidth: 1,
                    borderColor: Colors.Very_Dark,
                    width: SCREEN_WIDTH * 0.92,
                    marginHorizontal: 13,
                  }}></Text>
              </View>
              <View style={styles.contentSelectScheduleView}>
                <Text
                  style={{
                    color: Colors.Week_Black,
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
                  data={dataDay}
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
                      color: Colors.Week_Black,
                      paddingTop: SCREEN_HEIGHT * 0.01,
                    }}>
                    Time Slot:
                  </Text>
                  <View>
                    <RadioButtonCard />
                  </View>
                </View>
              </View>
              <View style={{marginTop: SCREEN_HEIGHT * 0.02}}>
                <GetOtpButton
                  verifyOtp={'Update Appointment'}
                  verifyButtonText={styles.buttonText}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={appointmentKey}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={{backgroundColor: Colors.White}}>
              <Pressable
                onPress={() => setIsSelected(item.id)}
                style={[
                  styles.card,
                  {
                    borderColor:
                      isSelected === item.id
                        ? Colors.LimeGreen
                        : Colors.Light_Grayish_Blue_White,
                  },
                ]}>
                <View style={styles.details}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.cardImg}>
                      <Image
                        source={{uri: item.vendor_image}}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 10,
                        }}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.txt}>{item.vendor_name}</Text>
                      <Text style={styles.txtOccupation}>
                        {item.vendor_category}
                      </Text>
                    </View>
                  </View>
                  <Pressable style={styles.vertual}>
                    <Icon name="voice-chat" size={14} color={'#11abe6'} />
                    <Text style={styles.txtBlue}>{item.appointment_type}</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                  }}>
                  <View style={styles.date}>
                    <MterialCommunityIcons
                      name="calendar"
                      style={{paddingHorizontal: 5}}
                      size={15}
                    />
                    <Text style={{fontSize: 10, color: Colors.Mostly_Black}}>
                      {item.booking_date}
                    </Text>
                  </View>
                  <View
                    style={{
                      top: 10,
                      height: 25,
                      borderLeftWidth: 1,
                      borderColor: '#f4f4f4',
                    }}
                  />
                  <View style={styles.date}>
                    <MterialCommunityIcons
                      name="clock-time-five-outline"
                      style={{paddingHorizontal: 5}}
                      size={15}
                    />
                    <Text style={{fontSize: 10, color: Colors.Mostly_Black}}>
                      {item.appointment_time}
                    </Text>
                  </View>
                  <View
                    style={{
                      top: 10,
                      height: 25,
                      borderLeftWidth: 1,
                      borderColor: '#f4f4f4',
                    }}
                  />
                  <View style={styles.date}>
                    <Text style={styles.txtGreen}>
                      {item.appointment_status}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                  }}>
                  <Pressable style={styles.btnCancel}>
                    <Text style={styles.txtCancel}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setModalVisible(true)}
                    style={styles.btnApprove}>
                    <Text style={styles.txtConnect}>{item.order_status}</Text>
                  </Pressable>
                </View>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
}
