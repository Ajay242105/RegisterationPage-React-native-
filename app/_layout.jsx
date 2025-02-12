import { Text, View } from 'react-native';
import { Stack } from 'expo-router';
import "../global.css";
import GlobalProvider from '../context/GlobalProvider';
// import Layout from './screens/_layout'; 

const RootLayout = () => {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="screens" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
      {/* <Layout /> Use the layout component if needed */}
    </GlobalProvider>
  );
};

export default RootLayout;

