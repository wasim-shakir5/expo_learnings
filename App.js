import { View, Text } from 'react-native';
import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import colors from './app/config/colors';
import AppCard from './app/components/AppCard';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
      }}
    >
      <AppCard 
        title="T-Shirts for sale"
        subTitle="$250"
        image={require("./app/assets/shirt.jpg")}
      />
    </View>
  )
}