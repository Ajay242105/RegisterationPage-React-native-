// import { songsList } from '../constants/Songs';
// import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

// const getRandomItems = (arr, numItems) => {
//   const shuffled = [...arr].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, numItems);
// };

// const ShowList = ({title}) => {
//   const randomSongs = getRandomItems(songsList, 6);

//   return (
//     <View className="flex-1 p-4">
//       <View className="">
//         <Text className="text-white text-2xl font-semibold mb-5">{title}</Text>

//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View className="flex-row justify-start items-center mt-4">
//             {randomSongs.map((item, index) => (
//               <View key={index} className="flex-row items-center mx-2">
//                 <TouchableOpacity className="flex flex-col items-center">
//                   <Image
//                     source={{ uri: item.artwork }}
//                     style={{
//                       width: 150,
//                       height: 150,
//                       borderRadius: 10,
//                     }}
//                   />
//                   <View className="ml-3">
//                     <Text className="text-white font-semibold">{item.title}</Text>
//                     <Text className="text-white text-xs">{item.artist}</Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// export default ShowList;

import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { songsList } from '../constants/Songs';

const getRandomItems = (arr, numItems) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
};

const ShowList = ({ title }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const navigation = useNavigation();
  
  const randomSongs = getRandomItems(songsList, 6);

  const handleSongClick = (song) => {
    setSelectedSong(song);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedSong(null);
  };

  return (
    <View className="flex-1 p-4">
      <View className="">
        <Text className="text-white text-2xl font-semibold mb-5">{title}</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row justify-start items-center mt-4">
            {randomSongs.map((item, index) => (
              <View key={index} className="flex-row items-center mx-2">
                <TouchableOpacity className="flex flex-col items-center" onPress={() => handleSongClick(item)}>
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

      {selectedSong && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-60">
            <View className="bg-white p-5 rounded-lg w-80">
              <Image
                source={{ uri: selectedSong.artwork }}
                style={{ width: '100%', height: 200, borderRadius: 10 }}
              />
              <Text className="text-center text-xl mt-4">{selectedSong.title}</Text>
              <Text className="text-center text-lg">{selectedSong.artist}</Text>
              <Text className="text-center text-sm mt-2">{selectedSong.album}</Text>
              <View className="flex-row justify-between mt-4">
                <Button title="Go to Library" onPress={() => navigation.navigate('LibraryScreen')} />
                <Button title="Close" onPress={closeModal} />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default ShowList;
