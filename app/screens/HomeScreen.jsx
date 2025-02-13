import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonBelowGreetings from '../../components/ButtonBelowGreetings';
import PlayList from '../../components/PlayList';
import RowList from '../../components/RowList';
import { LinearGradient } from 'expo-linear-gradient';
import ShowList from '../../components/ShowList';
import SongPlayer from '../../components/SongPlayer';

const HomeScreen = () => {
  return (
    <LinearGradient
          colors={['#a34c0d', '#592804', '#241001', '#000000']}
          style={{ flex: 1 }}
        >
    <View className="flex-1 px-4">
      <ScrollView className="w-full h-full" showsVerticalScrollIndicator={false}>
        <View className="w-full flex justify-center h-full px-4 my-6 mt-15">

          <View className="flex-row items-center">
            <Text className="flex-1 text-white font-bold text-2xl">Ajay Kumar Jaiswal</Text>

            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>

            <View className="w-5" />

            <TouchableOpacity>
              <AntDesign name="clockcircleo" size={24} color="white" />
            </TouchableOpacity>

            <View className="w-5" />

            <TouchableOpacity>
              <AntDesign name="setting" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <ButtonBelowGreetings />
          </View>

          <View className="flex-col justify-between mt-6">
            <View>
              <PlayList />
            </View>

            <View style={{ flex: 1, marginLeft: 10 }}>
              <RowList title="RowList" />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <ShowList title="ShowList" />
            </View>
            <View className="flex-1 ml-10">
              <ShowList title="Recent Played" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
    </LinearGradient>
  );
};

export default HomeScreen;


