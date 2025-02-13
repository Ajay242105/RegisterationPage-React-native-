import { songsList } from '../constants/Songs';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

const getRandomItems = (arr, numItems) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
};

const RowList = () => {
  const randomSongs = getRandomItems(songsList, 6);

  return (
    <View className="flex-1 p-4">
      <View className="">
        <Text className="text-white text-2xl font-semibold mb-5">RowList</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row justify-start items-center mt-4">
            {randomSongs.map((item, index) => (
              <View key={index} className="flex-row items-center mx-2">
                <TouchableOpacity className="flex flex-col items-center">
                  <Image
                    source={{ uri: item.artwork }}
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: 10,
                    }}
                  />
                  <View className="ml-3">
                    <Text className="text-white font-semibold">{item.title}</Text>
                    <Text className="text-white text-xs">{item.artist}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RowList;
