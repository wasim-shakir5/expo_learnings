import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  iconColor = "#fff",
  backgroundColor = "#000",
}) {
  return (
    <View
      style={{ 
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
       }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
