import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {SCREEN_WIDTH} from '../Helper/DeviceDimensions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const CustomPasswordInput = ({
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
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  return (
    <View>
      <Text style={{color: isFocused ? '#09dca4' : '#191919'}}>{Label}</Text>
      <View
        style={[
          styles.Container,
          {borderColor: isFocused ? '#09dca4' : '#191919'},
        ]}>
        <MaterialCommunityIcons
          name={IconName}
          size={IconSize}
          color={isFocused ? IconColor : '#191919'}
        />
        <TextInput
          onSubmitEditing={onSubmitEditing}
          ref={Input}
          secureTextEntry={isSecureTextEntry}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
          style={[styles.input, {color: isFocused ? '#1b1b1b' : '#191919'}]}
          {...TextInputProps}
        />
        <TouchableOpacity onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}>
          <FeatherIcons size={20} name={isSecureTextEntry? 'eye' : 'eye-off'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.9,
  },
  input: {
    width: SCREEN_WIDTH * 0.7,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
});

