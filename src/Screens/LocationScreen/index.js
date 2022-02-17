import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Feathers from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../Helper/Colors';
import {FontFamily} from '../../Helper/FontFamily';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {getcityData} from '../../Helper/API_Call/API_Call';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LocationScreen extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: '0'
    };
    this.state = {
      cityData: '',
    };
  }

  componentDidMount() {
    this._isMounted = true;  
    getcityData('allcity')
      .then(async res => {
        let response = res;
        this.setState({cityData: response.data.data});
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  }
  onPressHandler = async (id, name) =>    {
    this.setState({selectedItem: id});
    try {
      let value = {
        cityId: id,
        cityName:name
      };
      var item = await AsyncStorage.setItem('userCity', JSON.stringify(value));
      return item;
    } catch (error) {
      console.log(error);
    }

  }
  handleChange = target => {
    console.log(target, '......................target');
    getcityData('search', target)
      .then(async res => {
        let response = res;
        this.setState({cityData: response.data.data});
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };
  
  
  render() {
    // console.log(this.state.selectedItem,"................selecetd item");

    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={{marginVertical: 10, marginHorizontal: 7}}>
          <Pressable onPress={() => navigation.goBack()}>
            <Feathers name="arrow-left" color={Colors.Week_Black} size={29} />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 13,
          }}>
          <Text style={styles.textFrontBorder}></Text>
          <Text style={styles.textFront}>SELECT LOCATION</Text>
        </View>

        <View style={{marginLeft: 13, top: 10}}>
          <Text style={styles.textContantFront}>Search City</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Search Your City"
              placeholderTextColor={Colors.Cell_Phone_Heavy_Dark}
              style={styles.inputText}
              // onChangeText={item => {
              //   item;
              // }}
              //onChangeText={newText => (newText)}
              onChangeText={newText => this.handleChange(newText)}
              Cell_Phone_Heavy_Dark
            />
            <TouchableOpacity onPress={() => getAllCity()} activeOpacity={0.8}>
              <FontAwesome5
                size={14}
                name="search"
                color={Colors.Cell_Phone_Heavy_Dark}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={{top: 18}}>
            <FlatList
              style={{height: SCREEN_HEIGHT * 0.67}}
              initialScrollIndex={0}
              //keyExtractor={item => item.key.toString()}
              keyExtractor={(item, index) => item.id.toString()}
              extraData={this.state.selectedItem}
              data={this.state.cityData}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View style={styles.wrapContent}>
                  <Pressable
                    underlayColor="transparent"
                    onShowUnderlay={this.activeText}
                    onPress={() => this.onPressHandler(item.id,item.city)}>
                    <View
                      style={
                        this.state.selectedItem === item.id
                          ? styles.stateView
                          : styles.stateDisSelect
                      }>
                      <Text
                        style={
                          this.state.selectedItem == item.id
                            ? styles.activeText
                            : styles.inActiveText
                        }>
                        {item.city}
                      </Text>

                      {this.state.selectedItem === item.id && (
                        <Icon
                          name="checkcircle"
                          color={Colors.LimeGreen}
                          size={18}
                        />
                      )}
                    </View>
                  </Pressable>
                </View>
              )}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.bottomButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('MainTabScreen')}>
          <Text style={styles.BottomButtonText}>Done</Text>
          <Feathers name="arrow-right" color={Colors.White} size={18} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.FloralWhite,
    flex: 1,
  },
  BackArrow: {
    right: 3,
    top: 8,
    height: 25,
    width: 25,
  },
  textFrontBorder: {
    height: 27,
    borderLeftWidth: 5,
    borderColor: Colors.LimeGreen,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textFront: {
    top: 3,
    paddingLeft: 6,
    fontSize: 24,
    color: Colors.Mostly_Black,
    fontFamily: FontFamily.semibold,
  },
  textContantFront: {
    color: Colors.LimeGreen,
    fontSize: 12,
    fontFamily: FontFamily.medium,
  },
  inputText: {
    height: 40,
    width: SCREEN_WIDTH * 0.92,
    color: Colors.Mostly_Black_Dark,
    borderBottomWidth: 1.5,
    borderColor: Colors.LimeGreen,
    fontFamily: FontFamily.regular,
    fontSize: 13,
  },
  searchIcon: {
    right: 20,
  },
  stateView: {
    padding: 10,
    height: 40,
    width: SCREEN_WIDTH * 0.92,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.LimeGreen,
    backgroundColor: Colors.Light_Grayish_Cyan,
    elevation: 1,
    shadowColor: Colors.Black,
    shadowOpacity: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stateDisSelect: {
    justifyContent: 'center',
    paddingLeft: 10,
    height: 40,
    borderWidth: 0.5,
    width: SCREEN_WIDTH * 0.92,
    borderRadius: 5,
    backgroundColor: Colors.White,
    borderColor: Colors.Light_Grayish_Blue_White,
  },
  wrapContent: {
    height: 50,
  },

  contentChecked: {
    height: '100%',
  },
  inActiveText: {
    fontSize: 14,
    color: Colors.Cell_Phone_Heavy_Dark,
    fontFamily: FontFamily.medium,
  },

  activeText: {
    fontFamily: FontFamily.medium,
    fontSize: 14,
    color: Colors.LimeGreen,
  },
  bottomButton: {
    marginHorizontal: 13,
    width: '92%',
    height: 50,
    backgroundColor: Colors.LimeGreen,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 5,
    bottom: 20,
    flexDirection: 'row',
  },
  BottomButtonText: {
    color: Colors.White,
    fontSize: 15,
    fontFamily: FontFamily.medium,
  },
});
