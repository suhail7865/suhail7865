import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import NotificationScreen from '../NotificationScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Stack = createStackNavigator();

export function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1ACB97',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My Home Screen',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
	      
        <Stack.Screen 
          name="Details" 
          component={NotificationsScreen}  />
	      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: 'red',
  },
  parentView: {
    flex: 1,
    backgroundColor: 'green',
    position:'relative'
  },drawerStyle: {
    flex: 1,
    backgroundColor: 'green',
    position:'absolute'
  },bottomNav: {
    flex: 0.1,
    backgroundColor: 'green',
    position:'absolute',
    alignSelf:'baseline'
  },
});
