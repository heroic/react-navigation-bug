import React from 'react';
import {Text} from 'react-native';
import useScreen from '../hooks/useScreen';
import useUserStatus from '../hooks/useUserStatus';

const userStatusOptions = {
  allowStatus: ['approved'],
};

export default function FirstScreen() {
  const {visible} = useScreen();

  const {getApplicableScreen, applicationStatus, user} = useUserStatus(
    visible,
    userStatusOptions,
  );

  return <Text>First</Text>;
}
