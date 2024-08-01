import { View, Text } from "react-native";
import React from "react";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={24} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}
