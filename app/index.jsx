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

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/section2" asChild>
        <Pressable>
          <Text style={ styles.button }>Section 2 page</Text>
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
    paddingBottom: 20,
    
  }
});
