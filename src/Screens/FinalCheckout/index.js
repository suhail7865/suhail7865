import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../Helper/Colors';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../Helper/DeviceDimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';

export default function FinalCheckout() {
  const [number, onChangeNumber] = React.useState(null);
  const [cardNumber, onChangeCardNumber] = React.useState(null);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={{marginLeft: 10, top: 10}}>
        <MaterialCommunityIcons name="close" size={30} color={Colors.White} />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.card}>
          <View style={styles.viewTop}>
            <Image
              style={styles.imgLogo}
              source={require('../../Assets/Images/Welcome_pgs/logo.png')}
            />
            <View>
              <Text style={styles.txtMerchant}>Merchant Name</Text>
              <Text style={styles.order}>Order Id</Text>
              <View style={{top: 10, flexDirection: 'row'}}>
                <Text style={styles.rupee}>{'\u20B9'}</Text>
                <Text style={[styles.rupee, {left: 5}]}>2350</Text>
              </View>
            </View>
          </View>
          <View style={styles.viewSecond}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="ios-chevron-back" color={'#9b9b9a'} size={20} />
              <Text style={styles.txtCard}>Card</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="person-outline" color={'#9b9b9a'} size={17} />
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="888888888"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.viewThird}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginVertical: 10,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../Assets/Images/Side_nav/credit-card.png')}
                style={styles.creditCard}
              />
              <Text style={styles.txtBlue}>USE SAVED CARDS</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginVertical: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={styles.txtCard1}>Card Number</Text>
                <View style={styles.viewBorderd}>
                  <TextInput
                    style={styles.input1}
                    onChangeText={onChangeCardNumber}
                    value={cardNumber}
                    placeholder="888888888"
                    keyboardType="numeric"
                  />
                  <Image
                    source={require('../../Assets/Images/Welcome_pgs/visa.png')}
                    style={styles.visaCard}
                  />
                </View>
              </View>
              <View
                style={{borderBottomWidth: 1, borderBottomColor: '#ededed'}}>
                <Text style={styles.txtCvv}>Expiry</Text>
                <TextInput
                  style={styles.input2}
                  onChangeText={onChangeCardNumber}
                  value={cardNumber}
                  placeholder="888888888"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginVertical: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={styles.txtCard1}>Card Holder's Name</Text>
                <View
                  style={[styles.viewBorderd, {width: SCREEN_WIDTH * 0.49}]}>
                  <TextInput
                    style={styles.input1}
                    onChangeText={onChangeCardNumber}
                    value={cardNumber}
                    placeholder="888888888"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View
                style={{borderBottomWidth: 1, borderBottomColor: '#ededed'}}>
                <Text style={styles.txtCvv}>CVV</Text>
                <TextInput
                  style={styles.input2}
                  onChangeText={onChangeCardNumber}
                  value={cardNumber}
                  placeholder="888888888"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.txtSemiBold}>Remeber Card</Text>
            </View>
          </View>
          <View style={styles.btnBlue}>
            <Text style={styles.txtWhite}>PAY - 2350</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ced6d9',
  },
  card: {
    width: SCREEN_WIDTH * 0.8,
    borderRadius: 10,
    backgroundColor:'#f7f7f7',
  },
  viewTop: {
    paddingVertical: 12,
    flexDirection: 'row',
    backgroundColor: '#5182d0',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imgLogo: {
    height: 60,
    width: 80,
    margin: 15,
    padding: 5,
  },
  txtMerchant: {
    fontFamily: 'Poppins-Regular',
    color: '#f1f5fb',
    fontSize: 16,
  },
  txtWhite: {
    fontFamily: 'Poppins-Regular',
    color: Colors.White,
  },
  order: {
    fontFamily: 'Poppins-Regular',
    color: '#f1f5fb',
    fontSize: 10,
  },
  rupee: {
    fontFamily: 'Poppins-Regular',
    color: '#f1f5fb',
    fontSize: 16,
  },
  viewSecond: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#edeeee',
    backgroundColor: '#fcfbfa',
  },
  txtCard: {
    fontFamily: 'Poppins-Regular',
    color: '#9b9b9a',
    fontSize: 15,
  },
  input: {
    height: 40,
    padding: 10,
    width: 100,
  },
  viewThird: {
    backgroundColor: '#ffffff',
  },
  creditCard: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  txtBlue: {
    fontFamily: 'Poppins-SemiBold',
    color: '#94bbf7',
  },
  txtSemiBold: {
    fontFamily: 'Poppins-SemiBold',
    color: '#737373',
    left: 10,
  },
  input1: {
    height: 40,
    padding: 10,
    width: SCREEN_WIDTH * 0.4,
  },
  input2: {
    height: 40,
    width: SCREEN_WIDTH * 0.2,
  },
  viewBorderd: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
  },
  txtCard1: {
    fontFamily: 'Poppins-Regular',
    color: '#9b9b9a',
    left: 10,
  },
  visaCard: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  txtCvv: {
    fontFamily: 'Poppins-Regular',
    color: '#9b9b9a',
  },
  btnBlue: {
    marginTop: SCREEN_HEIGHT * 0.07,
    justifyContent: 'center',
    height: SCREEN_HEIGHT*0.08,
    alignItems: 'center',
    backgroundColor: '#6594e1',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
