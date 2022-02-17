import React, {Component} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import Svg, {Image} from 'react-native-svg';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {Colors} from '../../Helper/Colors'; 

export default class UserTypeScreen extends Component {
  state = {
    cardSelected: 1,
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <View style={{marginTop: SCREEN_HEIGHT * 0.03}}>
          {/* <Svg viewBox="0 0 117.61 88.429">
            <Image
              width="117.61"
              height="88.429"
              xlinkHref={require('../../Assets/Images/HeadPhonesLogo/logo_primary_png-image.png')}
            />
          </Svg> */}
          <Image source={require('../../Assets/Images/Welcome_pgs/logo.png')} />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.heading}>Select User Type</Text>
        </View>
        <View style={{marginHorizontal: 50, paddingTop: 7}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: Colors.Mostly_Black,
            }}>
            Choose the user type and continue to the step of access your account{' '}
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Pressable
            style={
              this.state.cardSelected == 1 ? styles.cardSelected : styles.card
            }
            onPress={() => this.setState({cardSelected: 1})}
            isActive={this.state.activeButton === 1}>
            <View style={{alignItems: 'center', top: 15}}>
              <Image
                source={
                  this.state.cardSelected == 1
                    ? require('../../Assets/Images/Select_user/user_active.png')
                    : require('../../Assets/Images/Select_user/user_inactive.png')
                }
                size={25}
              />
              <Text
                style={
                  this.state.cardSelected == 1
                    ? styles.selectedText
                    : styles.unselectText
                }>
                NORMAL USER
              </Text>
              <Text
                style={
                  this.state.cardSelected == 1
                    ? styles.disSelected
                    : styles.disUnselected
                }>
                Select as a normal user if you want a consultaion service
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={
              this.state.cardSelected == 2 ? styles.cardSelected : styles.card
            }
            onPress={() => this.setState({cardSelected: 2})}
            isActive={this.state.activeButton === 1}>
            <View style={{alignItems: 'center', top: 15}}>
              <Image
                source={
                  this.state.cardSelected == 2
                    ? require('../../Assets/Images/Select_user/consultation_active.png')
                    : require('../../Assets/Images/Select_user/consultation_inactive.png')
                }
                size={30}
              />
              <Text
                style={
                  this.state.cardSelected == 2
                    ? styles.selectedText
                    : styles.unselectText
                }>
                CONSULTANT
              </Text>
              <Text
                style={
                  this.state.cardSelected == 2
                    ? styles.disSelected
                    : styles.disUnselected
                }>
                Select cunsultant if you are a service provider
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            activeOpacity={0.8}
            onPress={() => this.state.cardSelected == 1? this.props.navigation.navigate('onboarding') : this.props.navigation.navigate('Login Vendor')}>
            <Text style={styles.textStyle}>Continue</Text>
            <Icon
              name="arrowright"
              size={19}
              color="#fff"
              style={{top: 3, left: 3}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fbfffe',
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginTop: SCREEN_HEIGHT * 0.02,
    color: Colors.Mostly_Black,
  },
  unselectText: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#6f7c8e',
  },
  selectedText: {
    marginTop: 8,
    fontSize: 16,
    color: Colors.LimeGreen,
    fontFamily: 'Poppins-SemiBold',
  },
  card: {
    marginTop: SCREEN_HEIGHT / 25,
    height: SCREEN_HEIGHT / 4.5,
    width: SCREEN_WIDTH * 0.6,
    backgroundColor: '#fbfffe',
    alignItems: 'center',
    elevation: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  cardSelected: {
    marginTop: SCREEN_HEIGHT / 25,
    height: SCREEN_HEIGHT / 4.5,
    width: SCREEN_WIDTH * 0.6,
    borderColor: Colors.LimeGreen,
    borderWidth: 1,
    backgroundColor: '#ebfcf8',
    paddingHorizontal: 5,
    alignItems: 'center',
    elevation: 2,
    borderRadius: 5,
  },
  disUnselected: {
    top: 3,
    fontSize: 12,
    marginHorizontal: 6,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: '#818c9c',
  },
  disSelected: {
    top: 3,
    color: Colors.LimeGreen,
    fontSize: 12,
    marginHorizontal: 6,
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
  },
  bottomView: {
    width: SCREEN_WIDTH * 0.9,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    backgroundColor: Colors.LimeGreen,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 10, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
