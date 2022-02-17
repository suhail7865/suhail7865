import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Colors} from '../Helper/Colors';
import HomeScreen from '../Screens/Homescreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomDrawer from '../Component/CustomDrawer';
// import Dashboard from '../Screens/Dashboard';
import Dashboard from '../Screens/Dashboard/index ';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import VandorProfile from '../Screens/VendorProfile';
import {VenderAllAppointment} from '../Screens/VenderAllAppointment';
import { VenderReviews } from '../Screens/VenderReviews';

const Drawer = createDrawerNavigator();
const VandorTab = createMaterialBottomTabNavigator();

const DashboardStack = ({navigation}) => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#09dca4',
      },
      headerTintColor: '#fff',
      headerTitle: () => <Text style={styles.titleGreen}>Dashboard</Text>,
      headerRight: () => (
        <Pressable
          style={styles.icons}
          onPress={() => navigation.navigate('Notifications')}>
          <MaterialIcon
            name="notifications-none"
            size={18}
            color={Colors.White}
          />
        </Pressable>
      ),
    }}>
    <Drawer.Screen
      name="Dashboard"
      component={Dashboard}
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

const VenderReviewsStack = ({navigation}) => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#09dca4',
      },
      headerTintColor: '#fff',
      headerTitle: () => <Text style={styles.titleGreen}>All Reviews</Text>,
      headerRight: () => (
        <Pressable
          style={styles.icons}
          onPress={() => navigation.navigate('Notifications')}>
          <MaterialIcon
            name="notifications-none"
            size={18}
            color={Colors.White}
          />
        </Pressable>
      ),
    }}>
    <Drawer.Screen
      name="All Reviews"
      component={VenderReviews}
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

const VenderAllAppointmentStack = ({navigation}) => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#09dca4',
      },
      headerTintColor: '#fff',
      headerTitle: () => (
        <Text style={styles.titleGreen}>All Appointments</Text>
      ),
      headerRight: () => (
        <Pressable
          style={styles.icons}
          onPress={() => navigation.navigate('Notifications')}>
          <MaterialIcon
            name="notifications-none"
            size={18}
            color={Colors.White}
          />
        </Pressable>
      ),
    }}>
    <Drawer.Screen
      name="All Appointments"
      component={VenderAllAppointment}
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
const VandorProfileStack = ({navigation}) => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#09dca4',
      },
      headerTintColor: '#fff',
      headerTitle: () => <Text style={styles.titleGreen}>Profile</Text>,
      headerRight: () => (
        <Pressable
          style={styles.icons}
          onPress={() => navigation.navigate('Notifications')}>
          <MaterialIcon
            name="notifications-none"
            size={18}
            color={Colors.White}
          />
        </Pressable>
      ),
    }}>
    <Drawer.Screen
      name="Profile"
      component={VandorProfile}
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

const VandorTabNavigator = () => {
  return (
    <VandorTab.Navigator
      initialRouteName="Home"
      activeColor="#09dca4"
      inactiveColor="#c2cad9"
      barStyle={styles.bottomBar}>
      <VandorTab.Screen
        name="Home"
        component={VenderAllAppointmentStack}
        options={{
          tabBarLabel: 'Home',
          activeColor: '#09dca4',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />

      <VandorTab.Screen
        name="DashBoard"
        component={DashboardStack}
        options={{
          tabBarLabel: 'Dashboard',
          activeColor: '#09dca4',
          tabBarIcon: ({color}) => (
            <Icon name="appstore-o" color={color} size={26} />
          ),
        }}
      />

      <VandorTab.Screen
        name="All Reviews"
        component={VenderReviewsStack}
        options={{
          tabBarLabel: 'REVIEWS',
          activeColor: '#09dca4',
          tabBarIcon: ({color}) => <Foundation name="clipboard-pencil" color={color} size={26} />,
        }}
      />

      <VandorTab.Screen
        name="Vandor Profile"
        component={VandorProfileStack}
        options={{
          tabBarLabel: 'Account',
          activeColor: '#09dca4',
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" color={color} size={26} />
          ),
        }}
      />
    </VandorTab.Navigator>
  );
};

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
    marginRight: 10,
    borderRadius: 50,
    backgroundColor: '#47e5bb',
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleGreen: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.White,
  },
});
export default VandorTabNavigator;
