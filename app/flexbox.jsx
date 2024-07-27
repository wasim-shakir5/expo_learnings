import { View } from 'react-native'
import React from 'react'

export default function flexbox() {
  return (
    <View
        style={{ 
            backgroundColor: "white",
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center', 
         }}
    >
      {/* <View 
        style={{ 
          backgroundColor: "black",
          width: 100,
          height: 100,
         }}
      /> */}
      <View 
        style={{ 
          backgroundColor: "red",
          width: 100,
          height: 100,
         }}
      />
      <View 
        style={{ 
          backgroundColor: "#696969",
          width: 150,
          height: 150,
         }}
      />
      <View 
        style={{ 
          backgroundColor: "black",
          width: 200,
          height: 200,
          alignSelf: "flex-start"
         }}
      />
    </View>

  );
}
