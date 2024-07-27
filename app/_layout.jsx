import { Stack } from 'expo-router';

export default function Layout() {
  return ( 
    <Stack initialRouteName='flexbox'>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="alert" options={{ title: 'Alert' }} />
      <Stack.Screen name="dimension" options={{ title: 'Dimension' }} />
      <Stack.Screen name="flexbox" options={{ title: 'Flex box' }} />
    </Stack>
  );
}
