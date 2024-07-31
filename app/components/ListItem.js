import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.details}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "900",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
