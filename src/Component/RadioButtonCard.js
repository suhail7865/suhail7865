import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';

import {Colors} from '../Helper/Colors';
import {FontFamily} from '../Helper/FontFamily';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Helper/DeviceDimensions';

const data = [
  {name: '12:00-01:00pm', key: '1'},
  {name: '02:00-03:00pm', key: '2'},
  {name: '04:00-05:00pm', key: '3'},
  {name: '01:00-02:00pm', key: '4'},
  {name: '03:00-04:00pm', key: '5'},
  {name: '05:00-06:00pm', key: '6'},
];

class LocationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: '0',
    };
  }

  onPressHandler(data) {
    this.setState({selectedItem: data});
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          initialScrollIndex={0}
          contentContainerStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          keyExtractor={item => item.key.toString()}
          extraData={this.state.selectedItem}
          data={data}
          renderItem={({item}) => (
            
              <View style={styles.wrapContent}>
                <Pressable
                  onShowUnderlay={this.activeText}
                  onPress={() => this.onPressHandler(item.key)}>
                  <View style={{}}>
                    <View
                      style={
                        this.state.selectedItem === item.key
                          ? styles.stateView
                          : styles.stateDisSelect
                      }>
                      <View
                        style={
                          this.state.selectedItem === item.key
                            ? styles.setRadioCircle
                            : styles.radioCircle
                        }>
                        {
                          <View
                            style={
                              this.state.selectedItem === item.key
                                ? styles.selectedRb
                                : null
                            }
                          />
                        }
                      </View>
                      <Text
                        style={
                          this.state.selectedItem == item.key
                            ? styles.activeText
                            : styles.inActiveText
                        }>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            
          )}
        />
      </View>
    );
  }
}
export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#97a1ad',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setRadioCircle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#09dca4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 70,
    backgroundColor: '#09dca4',
  },
  stateView: {
    padding: 8,
    height: SCREEN_HEIGHT * 0.054,
    borderRadius: 33,
    borderWidth: 0.5,
    borderColor: Colors.LimeGreen,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.44,
  },
  stateDisSelect: {
    padding: 8,
    height: SCREEN_HEIGHT * 0.054,
    width: SCREEN_WIDTH * 0.44,
    borderRadius: 33,
    borderWidth: 0.5,
    borderColor: Colors.Light_Grayish_Blue,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  wrapContent: {
    height: 50,
    marginHorizontal:5,
  },

  inActiveText: {
    fontSize: 14,
    color: Colors.Cell_Phone_Heavy_Dark,
    fontFamily: FontFamily.medium,
    marginHorizontal: SCREEN_HEIGHT * 0.01,
  },

  activeText: {
    fontFamily: FontFamily.medium,
    fontSize: 14,
    color: Colors.LimeGreen,
    marginHorizontal: SCREEN_HEIGHT * 0.01,
  },
});
