import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import OnboardingScreen from './src/Screens/OnboardingScreen/index.';
import UserTypeScreen from './src/Screens/UserTypeScreen';
import MainTabScreen from './src/TabNavigator/MiantabNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import VandorsScreen from './src/Screens/VandorsScreen';
import VandorDetailsScreen from './src/Screens/VandorDetailsScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import EditProfile from './src/Screens/EditProfile';
import BlogsScreen from './src/Screens/BlogsScreen';
import NotificationScreen from './src/Screens/NotificationScreen';
import Settings from './src/Screens/Settings';
import BlogsDetails from './src/Screens/BlogsDetails';
import AppointmentScreen from './src/Screens/AppointmentScreen';
import {BookmarksScreen} from './src/Screens/BookmarksScreen';
import {SignupOtpScreen} from './src/Screens/SignupOtpScreen';
import {LoginOtpScreen} from './src/Screens/LoginOtpScreen';
import LocationScreen from './src/Screens/LocationScreen';
// import SignupVendor from './src/Screens/SignupVendor';
// import FinalCheckout from './src/Screens/FinalCheckout';
import {ScheduleBooking} from './src/Screens/ScheduleBooking';
import {PlaceAppointment} from './src/Screens/PlaceAppointment';
import {AppointmentDetails} from './src/Screens/AppointmentDetails';
import {Colors} from './src/Helper/Colors';
import {PastAppointment} from './src/Screens/PastAppointment';
import {ProfesstionDetails} from './src/Screens/ProfesstionDetails';
import {PastAppointmentUser} from './src/Screens/PastAppointmentUser';
import {AppointmentDetailsUser} from './src/Screens/AppointmentDetailsUser';
import {rateReviewConsultantPopupScreen} from './src/Screens/rateReviewConsultantPopupScreen';
import {VenderAllAppointment} from './src/Screens/VenderAllAppointment';
import AllServices from './src/Screens/AllServices';
import FinalCheckout from './src/Screens/FinalCheckout';
import LoginVendor from './src/Screens/LoginVendor';
import PaymentMethod from './src/Screens/PaymentMethods';
import VandorTabNavigator from './src/TabNavigator/VandorTabNavigator';
import VandorProfile from './src/Screens/VendorProfile';
import EditVendorProfile from './src/Screens/EditVendorProfile';
import SignupVendor from './src/Screens/SignupVendor';
import {VenderReviews} from './src/Screens/VenderReviews';
import {MainScreen} from './src/Screens/MainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="LoginOtpScreen"
          component={LoginOtpScreen}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="User"
          component={UserTypeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VandorTab"
          component={VandorTabNavigator}
          options={{headerShown: false}}
        />
      
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTabScreen"
          component={MainTabScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Schedule Appointment"
          component={ScheduleBooking}
          options={{
            headerStyle: {backgroundColor: Colors.LimeGreen},
            headerTintColor: Colors.White,
          }}
        />
      
        <Stack.Screen
          name="Vandors"
          component={VandorsScreen}
          options={{
            headerStyle: {
              backgroundColor: '#09dca4',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Blogs"
          component={BlogsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="All Services"
          component={AllServices}
          options={{
            headerStyle: {
              backgroundColor: '#09dca4',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Blogs Details"
          component={BlogsDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={{
            headerStyle: {
              backgroundColor: '#09dca4',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            headerStyle: {
              backgroundColor: '#09dca4',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerStyle: {
              backgroundColor: Colors.LimeGreen,
            },
            headerTintColor: Colors.White,
          }}
        />
        <Stack.Screen
          name="Doctor Details"
          component={VandorDetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.LimeGreen,
            },
            headerTintColor: Colors.White,
          }}
        />

        <Stack.Screen
          name="Your Bookmarks"
          component={BookmarksScreen}
          options={{
            headerStyle: {backgroundColor: Colors.LimeGreen},
            headerTintColor: Colors.White,
          }}
        />

        
        <Stack.Screen
          name="Login Vendor"
          component={LoginVendor}
          options={{headerShown: false}}
        /> 
            <Stack.Screen
          name="Payment"
          component={PaymentMethod}
          options={{
            headerStyle: {
              backgroundColor: '#09dca4',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Place Appointment"
          component={PlaceAppointment}
          options={{
            headerStyle: {backgroundColor: Colors.LimeGreen},
            headerTintColor: Colors.White,
          }}
        />
         <Stack.Screen
          name="Final CheckOut"
          component={FinalCheckout}
          options={{headerShown: false}}
        />
    
        <Stack.Screen
          name="Your Appointment"
          component={AppointmentScreen}
          options={{
            headerStyle: {
              backgroundColor: '#09dca4',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Vandor Profile"
          component={VandorProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit Vandor Profile"
          component={EditVendorProfile}
          options={{
            headerTitle: 'Edit Profile',
            headerStyle: {
              backgroundColor: '#09dca4',
            },
            headerTintColor: '#fff',
          }}
        />

         <Stack.Screen
          name="Signup Vendor"
          component={SignupVendor}
          options={{headerShown: false}}
        /> 

        <Stack.Screen
          name="All Appointments"
          component={VenderAllAppointment}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="rateReviewConsultantPopupScreen"
          component={rateReviewConsultantPopupScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Past Appointment User"
          component={PastAppointmentUser}
          options={{
            headerTitle: 'Past Appointment',
            headerStyle: {backgroundColor: Colors.LimeGreen},
            headerTintColor: Colors.White,
          }}
        />
        <Stack.Screen
          name="Appointment Details"
          component={AppointmentDetailsUser}
          options={{
            headerStyle: {backgroundColor: Colors.LimeGreen},
            headerTintColor: Colors.White,
          }}
        />
        <Stack.Screen
          name="Professtion Details"
          component={ProfesstionDetails}
          options={{
            headerStyle: {backgroundColor: Colors.LimeGreen},
            headerTintColor: Colors.White,
          }}
        />

        <Stack.Screen
          name="Past Appointment"
          component={PastAppointment}
          options={{
            headerStyle: {backgroundColor: Colors.LimeGreen},
            headerTintColor: Colors.White,
          }}
        />
        <Stack.Screen
          name="Appointment Details Vender"
          component={AppointmentDetails}
          options={{
            headerTitle: 'Appointment Details',
            headerStyle: {backgroundColor: Colors.LimeGreen},
            headerTintColor: Colors.White,
          }}
        /> 

        <Stack.Screen
          name="SignupOtpScreen"
          component={SignupOtpScreen}
          options={{headerShown: false}}
        />

        

        {/* <Stack.Screen
          name="SignupOtpScreen"
          component={SignupOtpScreen}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name="Reviews"
          component={VenderReviews}
          options={{
            headerStyle: {backgroundColor: Colors.LimeGreen},
            headerTintColor: Colors.White,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
