import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { getAccount } from '../lib/appwrite';

const Home = () => {
  // Check if the user is signed in
  useEffect(() => {
    const checkSession = async () => {
      try {
        const currentAccount = await getAccount();
        if (!currentAccount) {
          router.replace('/sign-in'); // Redirect to sign-in if not signed in
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkSession();
  }, []);

  return (
    <SafeAreaView className="bg-black h-full">
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-2xl">Welcome to the Home Screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;