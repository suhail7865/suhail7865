import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class RadioButton extends Component {
  state = {
    Value: null,
  };

  render() {
    const {PROP} = this.props;
    const {Value} = this.state;

    return (
      <View>
        {PROP.map(res => {
          return (
            <View key={res.key} style={styles.container}>
              <TouchableOpacity activeOpacity={0.8}
              style={{flexDirection:'row'}}
                onPress={() => {
                  this.setState({
                    Value: res.key,
                  });
                }}>
                <View
                  style={
                    Value === res.key
                      ? styles.setRadioCircle
                      : styles.radioCircle
                  }>
                  {Value === res.key && <View style={styles.selectedRb} />}
                </View>
                <Text
                  style={
                    Value === res.key ? styles.setRadioText : styles.radioText
                  }>
                  {res.text}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  radioText: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    fontSize: 14,
    color: '#97a1ad',
  },
  setRadioText: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
  radioCircle: {
    height: 16,
    width: 16,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#97a1ad',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setRadioCircle: {
    height: 16,
    width: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '09dca4',
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
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
});
