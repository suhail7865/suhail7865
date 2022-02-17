import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import HomeScreen from './HomeScreen';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Detailes from './Data/Detailes';
import Setting from './Setting';

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const Settings = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="color" activeColor="#000">
      <Tab.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          backgroundColor: 'red',
          tabBarIcon: ({color}) => {
            return (
              <Image
              color={color}
                source={require('../assets/image/homeIcon.png')}
                style={{height: 25, width: 30}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Detailes"
        component={Detailes}
        options={{
          tabBarLabel: 'Detailes',
          tabBarIcon: () => {
            return (
              <Image
                source={require('../assets/image/homeIcon.png')}
                style={{height: 25, width: 30}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({Feed}) => {
            return (
              <Image
                source={require('../assets/image/SettingIcon3.png')}
                style={{height: 25, width: 30}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOption={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOption={{
      headerStyle: {
        backgroundColor: '#694fad',
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen name="Detailes" component={Detailes} />
  </DetailsStack.Navigator>
);

const SettingStackScreen = ({navigation}) => (
  <SecondStack.Navigator
    screenOption={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        fontWeight: 'bold',
      },
    }}>
    <SecondStack.Screen name="Settings" component={Settings} />
  </SecondStack.Navigator>
);
