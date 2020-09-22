import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';

export default function useUserStatus(visible, options) {
  const {allowGuest, allowStatus, denyStatus} = options || {};
  const navigation = useNavigation();

  const getApplicableScreen = useCallback(() => {
    return {
      index: 0,
      routes: [
        {
          name: 'Second',
        },
      ],
    };
  }, []);

  const showScreen = useCallback(() => {
    const root = getApplicableScreen();
    if (root) {
      // setTimeout(() => navigation.reset(root), 100);
      console.log('starting reset');
      navigation.reset(root);
      console.log('reset done');
    } else {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'First',
          },
        ],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getApplicableScreen, navigation]);

  useEffect(() => {
    if (visible) {
      showScreen();
    }
  }, [visible, showScreen]);

  return {
    getApplicableScreen,
  };
}
