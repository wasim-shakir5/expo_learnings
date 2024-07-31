import { View, StyleSheet } from "react-native";
import React from "react";
import colors from '../config/colors';

function ListItemSeperator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    alignSelf: "center",
    width: "90%",
    height: 1,
    backgroundColor: colors.black,
  },
});

export default ListItemSeperator;
