import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {SCREEN_WIDTH} from '../Helper/DeviceDimensions';

const CustomTextInput = ({
  Label,
  IconName,
  IconColor,
  IconSize,
  maxLength,
  TextInputProps,
  Input,
  keyboardType,
  onSubmitEditing,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <Text style={{color: isFocused ? '#09dca4' : '#1b1b1b'}}>{Label}</Text>
      <View
        style={[
          styles.Container,
          {borderColor: isFocused ? '#09dca4' : '#1b1b1b'},
        ]}>
            <MaterialCommunityIcons name={IconName} size={IconSize} color={isFocused? IconColor : '#1b1b1b'} />
        <TextInput
          onSubmitEditing={onSubmitEditing}
          ref={Input}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
          style={[styles.input,{color: isFocused ? '#1b1b1b' : '#cdd1d8'}]}
          {...TextInputProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    height: 50,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.9,
  },
  input:{
    width: SCREEN_WIDTH * 0.8,
    fontSize:15,
    fontFamily:'Poppins-Regular',
  }
});
export {CustomTextInput};
