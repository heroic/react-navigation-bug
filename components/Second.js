import React from 'react';
import {Text} from 'react-native';
import useScreen from '../hooks/useScreen';

export default function SecondScreen() {
  const {visible} = useScreen();

  return <Text>Second</Text>;
}
