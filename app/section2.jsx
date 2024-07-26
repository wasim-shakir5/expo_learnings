import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function section2() {
  console.log(Dimensions.get("window"));
  return (
    <View
      style={{ 
        backgroundColor: "dodgerblue",
        width: "100%",
        height: "30%",
       }}
    >
    </View>
  )
}

const styles = StyleSheet.create({})