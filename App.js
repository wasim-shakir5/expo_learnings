import { View, Text } from 'react-native';
import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import colors from './app/config/colors';
import AppCard from './app/components/AppCard';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return (
    <MessagesScreen />
  )
}