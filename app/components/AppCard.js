import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";

function AppCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
    // borderRadius: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 6,
  }
});

export default AppCard;
