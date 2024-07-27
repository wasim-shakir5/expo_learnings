import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  SafeAreaView, 
  Button, 
  Alert,
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image, 
  Text,
  Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function home() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/flexbox" asChild>
        <Pressable>
          <Text style={ styles.button }>Flex box</Text>
        </Pressable>
      </Link>

      <Link href="/dimension" asChild>
        <Pressable>
          <Text style={ styles.button }>Dimension</Text>
        </Pressable>
      </Link>
      <Button
        title="Click me!"
        onPress={() => Alert.alert("Title of my prompt", "message of this prompt")}
      />
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
          />
      <TouchableNativeFeedback onPress={() => console.log('image tapped ')}>
          <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View>
      </TouchableNativeFeedback>
      <Link href="/alert"> alert</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingBottom: 5,
    margin: 5,
  }
});
