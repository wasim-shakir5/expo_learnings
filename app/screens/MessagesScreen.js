/* so in order to display safearea on android, using platform, statusBar
that ternary but simple use Constants and everything will be simple VOILA */

import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
// console.log(Constants);

const initMsg = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/W_dark.png"),
  },
  {
    id: 2,
    title: "test 2",
    description: "test 2 description",
    image: require("../assets/logo-red.png"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initMsg);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message: ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          setTimeout(() => {
            setRefreshing(false);
          }, 1000);
        }}
        ItemSeparatorComponent={ListItemSeperator}
        // ListFooterComponent={() => <Text> {JSON.stringify(lulu, null, 2)}</Text>}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
  },
});

export default MessagesScreen;
