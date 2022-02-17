import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ScrollView,
  onPress,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Searchbar} from 'react-native-paper';

const width = Dimensions.get('window').width;

const data = [
  // {name: 'Inore', key: ''},
  {name: 'Mumbai', key: '1'},
  {name: 'Delhi', key: '2'},
  {name: 'Banglore', key: '3'},
  {name: 'Hydrabad', key: '4'},
  {name: 'Chennai', key: '5'},
  {name: 'Kolkata', key: '6'},
  {name: 'Surat', key: '7'},
];

export default class Detailes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexChecked: true,
    };
  }
  state = {
    activeText: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{top: 10}}>
          <Text style={styles.textFront}>
            <Text style={styles.textPipe}>|</Text> SELECT LOCATION
          </Text>
        </View>
        <View style={{top: 10}}>
          <Text style={styles.textContantFront}>Search City</Text>
        </View>
        <View>
          <View style={{top: 27, marginBottom: 20}}>
            <TextInput
              style={styles.inputText}
              placeholder="Search Your City"
              fontWeight="bold"
            />
          </View>
          <View>
            <Icon name="search" size={17} style={{left: 305, top: -30}} />
          </View>
        </View>
        <View style={{}}>
          <FlatList
            data={data}
            keyExtractor={item => item.key}
            extraData={this.indexChecked}
            renderItem={({item}) => (
              <View style={styles.wrapContent}>
                <TouchableHighlight
                  style={styles.boxSelect}
                  underlayColor="transparent"
                  onShowUnderlay={this.activeText}
                  onPress={() =>
                    this.setState({
                      alignCenter: item.key,
                      indexChecked: item.key,
                    })
                  }>
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: '#0CE8CA',
                      borderRadius: 6,
                    }}>
                    <View style={styles.contentChecked}>
                      <Text
                        style={
                          this.state.alignCenter === 1
                            ? styles.activeText
                            : styles.alignCenter
                        }
                        onPress={() => this.setState({alignCenter: 1})}
                        isActive={this.state.activeText == 1}>
                        {item.name}
                      </Text>
                      {this.state.indexChecked == item.key && (
                        <Image
                          source={require('../assets/image/checkedIcon.png')}
                          style={styles.iconChecked}
                        />
                      )}
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
            )}
          />
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.bottomButton}>
              <View style={{flexDirection: 'row', opacity: 0.8}}>
                <Text style={styles.textBottom}>Done</Text>
                <Icon
                  style={{left: 10, color: '#fff'}}
                  name="arrow-right"
                  size={24}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    flex: 1,
  },
  textPipe: {
    color: '#0CE8CA',
    fontWeight: '900',
    fontSize: 25,
  },
  textFront: {
    letterSpacing: 0.5,
    top: 3,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#020303',
  },
  textContantFront: {
    letterSpacing: 0.3,
    top: 10,
    color: '#0CE8CA',
    fontWeight: '500',
    fontSize: 14,
  },
  inputText: {
    borderColor: '#0CE8CA',
    borderBottomWidth: 2,
    fontSize: 15,
  },
  contentDropdown: {
    top: 1,
    marginTop: 2,
  },
  wrapContent: {
    flexDirection: 'row',
    margin: 5,
    height: 40,
  },
  boxSelect: {
    left: -4,
    width: width - 34,
  },
  contentChecked: {
    height: '100%',
    flexDirection: 'row',
  },
  iconChecked: {
    top: 4,
    left: 230,
    width: 30,
    height: 30,
  },
  alignCenter: {
    lineHeight: 35,
    fontWeight: '400',
    fontSize: 15,
    left: 14,
  },
  title: {
    padding: 10,
  },
  activeText: {
    lineHeight: 35,
    fontWeight: '400',
    fontSize: 15,
    left: 14,
    color: '#0CE8CA',
  },
  bottomButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#0CE8CA',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -90,
    borderRadius: 5,
  },
  textBottom: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
});
