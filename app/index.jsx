import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title="Click me!"
        onPress={() => Alert.prompt("Title of my prompt", "message of this prompt", (text) => console.log(text))}
      />
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
});
