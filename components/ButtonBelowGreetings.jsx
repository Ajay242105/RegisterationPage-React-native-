import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const ButtonBelowGreetings = () => {
  return (
    <View className="flex-row mt-5">
      <TouchableOpacity className="py-2 px-4 mr-2 bg-gray-800 rounded-full">
        <Text className="text-white">Music</Text>
      </TouchableOpacity>
      <TouchableOpacity className="py-2 px-4 bg-gray-800 rounded-full">
        <Text className="text-white">Podcast & Shows</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBelowGreetings;
