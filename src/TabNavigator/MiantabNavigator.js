import React, {useEffect,useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens/Homescreen';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from '../Screens/ProfileScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CustomDrawer from '../Component/CustomDrawer';
import AllServices from '../Screens/AllServices';
import {Colors} from '../Helper/Colors';
import BlogsScreen from '../Screens/BlogsScreen';
import AppointmentScreen from '../Screens/AppointmentScreen';
import {GetUserLoginData} from '../Helper/actionHelper';
import { LoginOtpScreen } from '../Screens/LoginOtpScreen';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
var userSelectedData = '';

console.log(userSelectedData, ".......................userSelectedData");

const HomeStackScreen = ({navigation}) => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#09dca4',
      },
      headerTintColor: '#fff',
      headerTitle: () => (
        <Image source={require('../Assets/Images/Side_nav/logo_navbar.png')} />
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row', paddingRight: 10}}>
          <View style={[styles.icons, {marginRight: 10}]}>
            <Fontisto name="search" size={16} color={'#fff'} />
          </View>
          <Pressable
            style={styles.icons}
            onPress={() => navigation.navigate('Notifications')}>
            <MaterialIcon
              name="notifications-none"
              size={18}
              color={Colors.White}
            />
          </Pressable>
        </View>
      ),
    }}>
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="md-home"
            size={size}
            color={focused ? Colors.LimeGreen : Colors.Cell_Phone_Heavy_Dark}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

const ServicesStackScreen = ({navigation}) => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#09dca4',
      },
      headerTintColor: '#fff',
      headerTitle: () => (
        <Image source={require('../Assets/Images/Side_nav/logo_navbar.png')} />
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row', paddingRight: 10}}>
          <View style={[styles.icons, {marginRight: 10}]}>
            <Fontisto name="search" size={16} color={'#fff'} />
          </View>
          <Pressable
            style={styles.icons}
            onPress={() => navigation.navigate('Notifications')}>
            <MaterialIcon name="notifications-none" size={18} color={'#fff'} />
          </Pressable>
        </View>
      ),
    }}>
    <Drawer.Screen
      name="Services"
      component={AllServices}
      options={{
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="md-home"
            size={size}
            color={focused ? '#7cc' : '#ccc'}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

const BlogsStackScreen = ({navigation}) => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#09dca4',
      },
      headerTintColor: '#fff',
      headerTitle: () => (
        <Image source={require('../Assets/Images/Side_nav/logo_navbar.png')} />
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row', paddingRight: 10}}>
          <View style={[styles.icons, {marginRight: 10}]}>
            <Fontisto name="search" size={16} color={'#fff'} />
          </View>
          <Pressable
            style={styles.icons}
            onPress={() => navigation.navigate('Blogs')}>
            <MaterialIcon name="notifications-none" size={18} color={'#fff'} />
          </Pressable>
        </View>
      ),
    }}>
    <Drawer.Screen
      name="BLOGS"
      component={BlogsScreen}
      options={{
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="md-home"
            size={size}
            color={focused ? '#7cc' : '#ccc'}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

const AppointmentStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Your Appointments"
      component={AppointmentScreen}
      options={{
        headerStyle: {
          backgroundColor: '#09dca4',
        },
        headerTintColor: '#fff',
      }}
    />
  </Stack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  
  // if(selectedUserKey==null){
  //   navigation.navigate('LoginOtpScreen');
  // }else if(selectedCityKey.user_id){
  //   navigation.navigate('ProfileScreen');
  // }
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#09dca4',
      },
      headerTintColor: '#fff',
      headerTitle: () => (
        <Image source={require('../Assets/Images/Side_nav/logo_navbar.png')} />
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row', paddingRight: 10}}>
          <View style={[styles.icons, {marginRight: 10}]}>
            <Fontisto name="search" size={16} color={'#fff'} />
          </View>
          <Pressable
            style={styles.icons}
            onPress={() => navigation.navigate('Notifications')}>
            <MaterialIcon name="notifications-none" size={18} color={'#fff'} />
          </Pressable>
        </View>
      ),
    }}>
    <Drawer.Screen
      name="Profile"
      component={userSelectedData!=null ? LoginOtpScreen : ProfileScreen  }
      options={{
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="md-home"
            size={size}
            color={focused ? '#7cc' : '#ccc'}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

const MainTabScreen = () => {
  const [isFetching, setisFetching] = useState(true);
  useEffect(() => {
    GetUserLoginData().then(async res => {
      //selectedUserData(res);
      console.log(res, ".................................user_id");
      //userSelectedData = res.user_id;
    });
  setTimeout(() => {
    setisFetching(false);
  }, 2000);
  },[]);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#09dca4"
      inactiveColor="#c2cad9"
      barStyle={styles.bottomBar}>
      <Tab.Screen
        name="Feed"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'HOME',
          activeColor: '#09dca4',
          tabBarIcon: ({color}) => (
            <FeatherIcon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SERVICES"
        component={ServicesStackScreen}
        options={{
          tabBarLabel: 'Services',
          activeColor: '#09dca4',
          tabBarIcon: ({color}) => (
            <Icon name="appstore-o" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Blogs"
        component={BlogsStackScreen}
        options={{
          tabBarLabel: 'Blogs',
          activeColor: '#09dca4',
          tabBarIcon: ({color}) => (
            <FontIcon name="pencil-square-o" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={AppointmentStack}
        options={{
          tabBarLabel: 'Bookings',
          activeColor: '#09dca4',
          tabBarIcon: ({color}) => (
            <FontIcon name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          activeColor: '#09dca4',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
    position: 'absolute',
    borderRadius: 10,
  },
  icons: {
    height: 31,
    width: 31,
    borderRadius: 50,
    backgroundColor: '#47e5bb',
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
