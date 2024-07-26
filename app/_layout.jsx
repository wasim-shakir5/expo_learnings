import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="alert" options={{ title: 'Alert' }} />
      <Stack.Screen name="section2" options={{ title: 'Dimension' }} />
    </Stack>
  );
}
