// import React from 'react';
import { songsList } from '../constants/Songs';
import { Text, TouchableOpacity, View, Image } from 'react-native';

const getRandomItems = (arr, numItems) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
};

const PlayList = () => {
    const randomSongs = getRandomItems(songsList, 6);

    return (
        <View className="flex-1 p-4">
            {/* <View className=" max-w-md w-full p-6 rounded-xl shadow-lg mx-auto"> */}
            <View>
                <Text className="text-white text-2xl font-semibold mb-5">PlayList</Text>

                <View className="flex-row flex-wrap justify-between">
                    {randomSongs.map((item, index) => (
                        <View key={index} className="w-[48%] mb-4 bg-black-200 p-2 rounded-lg">
                            <TouchableOpacity className="flex flex-row items-center">
                                <Image
                                    source={{ uri: item.artwork }}
                                    style={{ width: 50, height: 50, borderRadius: 5 }}
                                />
                                <View className="ml-2.5 align-center">
                                    <Text className="text-white font-psemibold">{item.title}</Text>
                                    <Text className="text-white text-xs">{item.artist}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default PlayList;
