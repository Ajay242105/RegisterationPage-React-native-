import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import CustomButton from '../components/CustomButton'
const index = () => {
    return (
        <SafeAreaView className="bg-black h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
            <View className="w-full flex justify-center items-center h-full px-4">
            <Text className="text-red-300 text-5xl bg-zinc-700 font-bold text-center" >Welcome to HomePage</Text>

            <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />


                </View>

            </ScrollView>
            <StatusBar className="bg-black" style="light"/>

        </SafeAreaView>
    )
}

export default index