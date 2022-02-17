import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const Setting = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <Text
            style={{
                margin : -5,
                fontWeight : 'bold',
                color : '#000',
              fontSize: 25,
            }}>
            You are on Setting Screen
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details')}>
            <Text>Open Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}>
            <Text>Open Profile</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          React Native Bottom
        </Text>
       
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    fontWeight : 'bold',
    color : '#000',
//   fontSize: 25,
    // backgroundColor: 'orange',
    // padding: 10,
    // width: 100,
    marginTop: 16,
  },
});
export default Setting;
