import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,

} from 'react-native';
import { images } from '../../constants';
import { songsList } from '../../constants/Songs';
import { LinearGradient } from 'expo-linear-gradient';
import TrackPlayer, { Capability, State, usePlaybackState, useProgress } from 'react-native-track-player';
import SongPlayer from '../../components/SongPlayer';
import FloatingMusicPlayer from '../../components/FloatingMusicPlayer';

const LibraryScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
        compactCapabilities: [Capability.Play, Capability.Pause],
      });
      await TrackPlayer.add(songsList);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePlayPause = async () => {
    if (playbackState.state === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.skip(currentIndex);
      await TrackPlayer.play();
    }
  };

  useEffect(() => {
    if (State.Playing === playbackState) {
      if (progress.position.toFixed(0) === progress.duration.toFixed(0)) {
        if (currentIndex < songsList.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }
    }
  }, [progress, currentIndex, playbackState]);

  return (
    // <Modal visible={isVisible} transparent={true} animationType="slide">

      <LinearGradient
        colors={['#a34c0d', '#592804', '#241001', '#000000']}
        style={{ flex: 1 }}
      >
        <ScrollView className="w-full h-full">
          <StatusBar translucent backgroundColor="transparent" />


          <TouchableOpacity className="mt-5 ml-5" onPress={() => navigation.navigate('HomeScreen')}>
            <Image
              source={images.left}
              style={{
                width: 24,
                height: 24,
                tintColor: 'white',
                marginTop: 40,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
          

          <View className="w-[90%] self-center mt-5 flex-row">
            <View className="w-[85%] h-9 bg-[#b06a41] rounded flex-row pl-4 items-center">
              <Image
                source={images.search2}
                style={{ width: 18, height: 18, tintColor: 'white' }}
              />
              <Text className="text-white ml-3">Find in Playlist</Text>
            </View>

            <View className="w-[15%] h-9 bg-[#b06a41] rounded items-center justify-center ml-1">
              <Text className="text-white font-semibold">Sort</Text>
            </View>
          </View>

          <Image
            source={{ uri: songsList[currentIndex].artwork }}
            style={{
              width: '80%',
              height: '35%',
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 5,
            }}
          />

          <Text className="text-white text-3xl font-semibold ml-5 mt-5">
            {songsList[currentIndex].title}
          </Text>

          <View className="flex-row pl-5 mt-5 items-center">
            <Image
              source={images.spotify}
              style={{ width: 18, height: 18 }}
            />
            <Text className="text-white text-sm ml-2.5">English Songs</Text>
          </View>

          <View className="flex-row pl-5 mt-2.5">
            <Text className="text-[#bababa] text-xs">20,169 saves</Text>
            <Text className="text-[#bababa] text-xs ml-2.5">4h 26m</Text>
          </View>

          <View className="w-[90%] self-center mt-2.5 flex-row justify-between">
            <View className="flex-row items-center">
              <Image
                source={images.plus}
                style={{ width: 17, height: 17, tintColor: '#bababa' }}
              />
              <Image
                source={images.arrowdown}
                style={{
                  width: 18,
                  height: 18,
                  tintColor: '#bababa',
                  marginLeft: 15,
                }}
              />
              <Image
                source={images.option}
                style={{
                  width: 18,
                  height: 18,
                  tintColor: '#bababa',
                  marginLeft: 15,
                }}
              />
            </View>

            <View className="flex-row items-center">
              <Image
                source={images.suffle}
                style={{ width: 25, height: 25, tintColor: '#bababa' }}
              />
              <TouchableOpacity
                onPress={handlePlayPause}
                className="flex items-center justify-center"
              >
                {playbackState.state === State.Playing ? (
                  <Image
                    source={images.pause}
                    style={{
                      width: 25,
                      height: 25,
                      marginLeft: 10,
                      marginRight: 10,
                      tintColor: '#3ad934',
                    }}
                  />
                ) : (
                  <Image
                    source={images.playbutton}
                    style={{
                      width: 25,
                      height: 25,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          {/* list of songs  */}
          <FlatList
            className="mt-2"
            data={songsList}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                className="w-full h-12 flex-row justify-between pl-5 pr-5 mt-2.5"
                onPress={async () => {
                  await TrackPlayer.pause();
                  await TrackPlayer.skip(index);
                  await TrackPlayer.play();
                  setCurrentIndex(index);
                }}
              >
                <View className="flex-row items-center">
                  <View>
                    <Image
                      source={{ uri: item.artwork }}
                      style={{ width: 30, height: 30, borderRadius: 5 }}
                    />
                    {index === currentIndex && playbackState.state === State.Playing && (
                      <Image
                        source={images.playing}
                        style={{ width: 20, height: 20, tintColor: 'orange', marginTop: -23, marginLeft: 6 }}
                      />
                    )}
                  </View>
                  <View className="ml-2.5">
                    <Text className="text-white">{item.title}</Text>
                    <Text className="text-white text-xs">{item.artist}</Text>
                  </View>
                </View>
                <Image
                  source={images.option}
                  style={{ width: 18, height: 18, tintColor: '#bababa' }}
                />
              </TouchableOpacity>
            )}
          />
        


        </ScrollView>


      
      </LinearGradient>
  );
};

export default LibraryScreen;