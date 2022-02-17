import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../Helper/Colors';

const NotificationScreen = () => {
  const data = [
    {
      id: 5,
      title: 'Your Appointment',
      day: 'Today',
      time: '10:05 AM',
      discription:
        'your appointment is pending with Doctor Arav sing we all notify when he accept your request',
    },
    {
      id: 6,
      title: 'New Appointment',
      day: 'Today',
      time: '10:05 AM',
      discription:
        'your appointment is pending with Doctor Arav sing we all notify when he accept your request',
    },     
  ];
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.textHeading}>All Notifications</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#E80000',
            flexDirection: 'row',
          }}>
          <Text style={styles.txtRed}>Clear All</Text>
          <Icon name="close" size={16} color={'#E80000'} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item}) => {
            return (
              <View style={{flex: 1}}>
                <View style={styles.card}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 10,
                      marginTop:10,
                    }}>
                    <View style={styles.imgView}>
                      <Image
                        source={require('../../Assets/Images/Notofications/notification.png')}
                      />
                    </View>
                    <View>
                      <Text style={styles.txtTitle}>{item.title}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.txtTime}>{item.day}</Text>
                        <View
                          style={{
                            marginHorizontal: 8,
                            height: 15,
                            backgroundColor: '#6f7c8e',
                            width: 1,
                          }}
                        />
                        <Text style={[styles.txtTime]}>{item.time}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{marginHorizontal: 18,marginBottom:5,marginTop:5}}>
                    <Text style={styles.description}>{item.discription}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Mostly_Cyan,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 13,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  textHeading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#191919',
  },
  txtRed: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#E80000',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  imgView: {
    height: 45,
    width: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2fdfa',
    marginHorizontal: 8,
  },
  txtTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#1b1b1b',
    fontSize: 13,
  },
  txtTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#6f7c8e',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color:'#191919',
  },
});
