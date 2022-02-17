import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {Colors} from '../Helper/Colors';

import {FontFamily} from '../Helper/FontFamily';

const editableTextInputColor = Colors.Mostly_Black_Dark;
const disabledTextInputColor = Colors.Black;
const focusedInputColor = Colors.LimeGreen;
export function InputText({length, placeholderName, keyType, labelName, onChangeText, TextInputProp}) {
  const [value, setValue] = useState('');
  const [editable, setEditable] = useState(true);
  const [isFocused, setFocus] = useState(false);
  const textInputColor = editable
    ? editableTextInputColor
    : disabledTextInputColor;
  const styles = StyleSheet.create({
    label: {
      fontSize: 13,
      top: 20,
      fontFamily: FontFamily.medium,
      color: isFocused ? focusedInputColor : textInputColor,
    },
    input: {
      top: 14,
      fontSize: 13,
      fontFamily: FontFamily.medium,
      width: 200,
      left: 29,
    },
    ViewBorder: {
      borderColor: isFocused ? focusedInputColor : Colors.Light_Grayish_Blue,
      borderBottomWidth: isFocused ? 1.5 : 1.5,
      top: 8,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{labelName}</Text>
        <View style={{}}>
          <TextInput
          Text
            maxLength={length}
            keyboardType={keyType}
            style={styles.input}
            placeholder={placeholderName}
            placeholderTextColor={textInputColor}
            color={Colors.Mostly_Black_Dark}
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            {...TextInputProp}
          />
        </View>
        <View style={styles.ViewBorder}></View>
      </View>
    </View>
  );
}
