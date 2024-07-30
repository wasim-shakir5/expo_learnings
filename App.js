import { View, Text } from 'react-native';
import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';

export default function App() {
  return (

    <WelcomeScreen />
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',

    //   }}
    // >
    //   <AppButton title="Login" onPress={() => console.log('tapped')} />
    // </View>
  )
}