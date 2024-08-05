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

function ListItem({ title, subTitle, image, ImageComponent, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.details}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
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
  details: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "900",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
