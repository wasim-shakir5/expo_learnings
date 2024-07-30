import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/shirt.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Shirt for sale !!!</AppText>
        <AppText style={styles.price}>$200</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/W_dark.png")}
            title="Wasim Shakir"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 35,
  }
});

export default ListingDetailsScreen;
