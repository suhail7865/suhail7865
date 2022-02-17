import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, StatusBar, FlatList} from 'react-native';
import {Colors} from '../../Helper/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {getDashboardData} from '../../Helper/API_Call/API_Call';

export default function Dashboard({navigation}) {
  const [dashboardKey, dashboardValue] = useState([]);
  const [count_client, setCount_client] = useState(null);
  const [count_Pending, setCount_Pending] = useState(null);
  const [total_Earning, setTotal_Earning] = useState(null);
  const [count_Cancel, setCount_Cancel] = useState(null);
  const [Total_Loss, setTotal_Loss] = useState(null);

  useEffect(() => {
    getDashboard();
  }, []);
  const getDashboard = () => {
    getDashboardData()
      .then(async res => {
        let response = res;
        var AllData = response.data.data[0];
        setCount_client(AllData.count_client);
        setCount_Pending(AllData.count_Pending);
        setTotal_Earning(AllData.Total_Earning);
        setCount_Cancel(AllData.count_Cancel);
        setTotal_Loss(AllData.Total_Loss);
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };

  const DATA = [
    {
      id: 1,
      icon: 'contacts',
      clints: '216',
      title: 'Total clients',
    },
    {
      id: 2,
      icon: 'contacts',
      title: 'Painding Appointments',
      clints: '18',
    },
    {
      id: 3,
      icon: 'contacts',
      title: 'Completed',
      clints: '203',
    },
    {
      id: 4,
      icon: 'contacts',
      title: 'Canceled Appointments',
      clints: '13',
    },
    {
      id: 5,
      icon: 'contacts',
      title: 'Total Earning',
      clints: '110045 INR',
    },
    {
      id: 6,
      icon: 'contacts',
      title: 'Total Loss',
      clints: '2435 INR',
    },
  ];

  // const Item = ({title, icon, clints, loss, appointments}) => (

  // );

  // const renderItem = ({item}) => (
  //   <Item
  //     title={item.title}
  //     loss={item.loss}
  //     clints={item.clints}
  //     icon={item.icon}
  //   />
  // );

  const count = ['1', '2', '2'];
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 10, marginVertical: 10}}>
        <Text style={styles.txtBold}>Dashboard Overview</Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.White,
          flexWrap: 'wrap',
          height: 400,
          justifyContent: 'space-evenly',
        }}>
        <View style={styles.card}>
          <View
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#f2f3f6',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.viewIcon}>
                <Icon name={'contacts'} size={20} color={'green'} />
              </View>
              <View style={{marginLeft: 5}}>
                <Text style={styles.txtBold}>{count_client}</Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 5, marginLeft: 5}}>
            <Text style={styles.txtGray}>Total Clients</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#f2f3f6',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.viewIcon}>
                <MaterialCommunityIcons
                  name={'text-box-check-outline'}
                  size={20}
                  color={'green'}
                />
              </View>
              <View style={{marginLeft: 5}}>
                <Text style={styles.txtBold}>{count_client}</Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 5, marginLeft: 5}}>
            <Text style={styles.txtGray}>Complited</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#f2f3f6',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.viewIcon}>
                <FontAwesome5 name={'hand-holding-usd'} size={20} color={'green'} />
              </View>
              <View style={{marginLeft: 5}}>
                <Text style={styles.txtBold}>{total_Earning}</Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 5, marginLeft: 5}}>
            <Text style={styles.txtGray}>Total Earning</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#f2f3f6',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.viewIcon}>
                <MaterialCommunityIcons
                  name={'timer-sand-empty'}
                  size={20}
                  color={'green'}
                />
              </View>
              <View style={{marginLeft: 5}}>
                <Text style={styles.txtBold}>{count_Pending}</Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 5, marginLeft: 5}}>
            <Text style={styles.txtGray}>Pending Appointment</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#f2f3f6',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.viewIcon}>
                <MaterialCommunityIcons name={'text-box-remove-outline'} size={20} color={'green'} />
              </View>
              <View style={{marginLeft: 5}}>
                <Text style={styles.txtBold}>{count_Cancel}</Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 5, marginLeft: 5}}>
            <Text style={styles.txtGray}>Cancelled Appointment</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#f2f3f6',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.viewIcon}>
                <Ionicons name={'md-bar-chart-outline'} size={20} color={'green'} />
              </View>
              <View style={{marginLeft: 5}}>
                <Text style={styles.txtBold}>{Total_Loss}</Text>
              </View>
            </View>
          </View>
          <View style={{marginVertical: 5, marginLeft: 5}}>
            <Text style={styles.txtGray}>Total Loss</Text>
          </View>
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
  txtBold: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    color: Colors.Mostly_Black,
  },
  card: {
    // marginVertical: 10,
    width: SCREEN_WIDTH * 0.443,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: Colors.White,
    elevation: 5,
    borderRadius: 10,
  },
  viewIcon: {
    marginHorizontal: 5,
    borderRadius: 20,
    elevation: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : Colors.White
  },
  txtGray: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#a0a8b4',
  },
});
