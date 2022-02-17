import React from 'react';
import {ActivityIndicator} from 'react-native';
import { Colors } from '../Helper/Colors';

export default function Loader() {
  return <ActivityIndicator size={60} color="#0000ff" />
}
