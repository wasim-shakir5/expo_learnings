import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function section2() {
  console.log(Dimensions.get("window"));
  
  console.log("landscape: ", useDeviceOrientation());

  return (
    <View
      style={{
        backgroundColor: "dodgerblue",
        width: "100%",
        height: useDeviceOrientation() == "landscape" ? '100%' : '30%',
      }}
    >

    </View>
  )
}

const styles = StyleSheet.create({})