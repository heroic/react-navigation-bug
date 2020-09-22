import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import FirstScreen from './components/First';
import LoginScreen from './components/Login';
import SecondScreen from './components/Second';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MemberStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0079f3',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontFamily: 'liberation-sans-regular',
        },
        headerBackTitleVisible: false,
        cardStyle: {
          backgroundColor: '#f3f3f3',
        },
      }}>
      <Stack.Screen component={FirstScreen} name="First" />
      <Stack.Screen component={SecondScreen} name="Second" />
    </Stack.Navigator>
  );
};

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setTimeout(() => setUser(1), 1000);
  });

  return (
    <NavigationContainer>
      {user === undefined ? (
        <Stack.Navigator
          initialRouteName="Login"
          headerMode="screen"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0079f3',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontFamily: 'liberation-sans-regular',
            },
            headerBackTitleVisible: false,
            cardStyle: {
              backgroundColor: '#f3f3f3',
            },
          }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <>
          <Drawer.Navigator screenOptions={{gestureEnabled: false}}>
            <Drawer.Screen name="LoggedIn" component={MemberStack} />
          </Drawer.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
