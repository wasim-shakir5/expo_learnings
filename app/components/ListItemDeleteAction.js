import { View, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
