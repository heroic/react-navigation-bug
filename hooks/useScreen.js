import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {AppState} from 'react-native';

export default function useScreen() {
  const [visible, setVisible] = useState(true);
  const focussed = useIsFocused();

  useEffect(() => {
    setVisible(focussed);
  }, [focussed]);

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        // do whatever needs to be done
        setVisible(true);
      } else if (nextAppState === 'inactive' || nextAppState === 'background') {
        setVisible(false);
      }
    };
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return {
    visible,
  };
}
