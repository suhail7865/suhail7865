import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import Svg, {Path, ClipPath, Image, G, Defs, Circle} from 'react-native-svg';
import CheckBox from '@react-native-community/checkbox';
export default function PaymentMethod() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const DATA = [
    {
      id: 1,
      bank: 'HDFC',
      account: '54654654546465654',
      name: 'Vijay Sharma',
    },
    {
      id: 2,
      bank: 'SBI',
      account: '54654654546465654',
      name: 'Anil Sharma',
    },
  ];

  const Item = ({bank, account, name}) => (
    <View style={styles.card}>
      <View
        style={{
          left: 5,
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#f4f4f4',
        }}>
        <View style={{marginHorizontal: 5}}>
          <Svg
            id="Ellipse_1347_copy-2"
            data-name="Ellipse 1347 copy"
            width="42"
            height="42"
            viewBox="0 0 42 42">
            <Defs>
              <ClipPath id="clip-path">
                <Circle
                  id="Ellipse_1347_copy"
                  data-name="Ellipse 1347 copy"
                  cx="21"
                  cy="21"
                  r="21"
                  fill="#fff"
                  stroke="#ddd"
                  stroke-width="1"
                />
              </ClipPath>
            </Defs>
            <G
              id="Ellipse_1347_copy-3"
              data-name="Ellipse 1347 copy"
              fill="#fff"
              stroke="#ddd"
              stroke-width="1">
              <Circle cx="21" cy="21" r="21" stroke="none" />
              <Circle cx="21" cy="21" r="20.5" fill="none" />
            </G>
            <Path
              id="SBI-logo"
              d="M13.021,27.193a12.849,12.849,0,1,1,1.651,0V16.663a2.322,2.322,0,1,0-1.651,0"
              transform="translate(7.154 6.646)"
              fill="#16d"
            />
          </Svg>
        
        </View>
        <View style={{left: 5}}>
          <Text style={styles.account}>{account}</Text>
          <Text style={styles.bank}>{bank}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View
        style={{
          top: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.primary}>Set as Primary</Text>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          tintColor="#09dca4"
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <Item account={item.account} bank={item.bank} name={item.name} />
  );

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 10, left: 10}}>
        <Text style={styles.txtBold}>All Account Details</Text>
      </View>
      <View style={{backgroundColor: '#fff', paddingVertical: 5}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fcff',
  },
  txtBold: {
    fontFamily: 'Poppins-SemiBold',
    color: '#1b1b1b',
  },
  card: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1,
  },
  img: {
    height: 50,
    width: 50,
  },
  account: {
    fontFamily: 'Poppins-SemiBold',
    color: '#1b1b1b',
  },
  name: {
    fontFamily: 'Poppins-Regular',
    color: '#b2b9c2',
    fontSize: 11,
  },
  bank: {
    fontFamily: 'Poppins-Regular',
    color: '#b2b9c2',
    fontSize: 11,
  },
  primary: {
    fontFamily: 'Poppins-Regular',
    color: '#1b1b1b',
  },
});
