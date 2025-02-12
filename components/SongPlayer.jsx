import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity, View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import TrackPlayer, { State } from 'react-native-track-player';
import { images } from '../constants';


const SongPlayer = ({
  songsList,
  currentIndex,
  progress,
  playbackState,
  isVisible,
  onClose,
  onChange
}) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(currentIndex);

  useEffect(() => {
    setCurrentSongIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    console.log(playbackState); 
  }, [playbackState]);
  

  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };
  const handlePlayPause = async () => {
    if (playbackState.state === State.Playing) {
      await TrackPlayer.pause();
    } else {
      if (playbackState.state === State.Paused) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.skip(currentSongIndex);
        await TrackPlayer.play();
      }
    }
  };
  
  


  const handlePrevious = async () => {
    if (currentSongIndex > 0) {
      await TrackPlayer.skipToPrevious();
      setCurrentSongIndex(currentSongIndex - 1);
      onChange(currentSongIndex - 1);
    }
  };

  const handleNext = async () => {
    if (currentSongIndex < songsList.length - 1) {
      await TrackPlayer.skipToNext();
      setCurrentSongIndex(currentSongIndex + 1);
      onChange(currentSongIndex + 1);
    }
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">

      <LinearGradient colors={['#067a02', '#064f03', '#032901', '#000000']} className="flex-1">
        <TouchableOpacity className="mt-5 ml-5" onPress={onClose}>
          <Image source={images.arrowdown} style={{ width: 30, height: 30, tintColor: 'white' }} />
        </TouchableOpacity>

        <Image
          source={{ uri: songsList[currentSongIndex].artwork }}
          style={{ width: '80%', height: '35%', alignSelf: 'center', marginTop: 20, borderRadius: 5 }}
        />
        <Text className="text-white text-3xl font-semibold ml-5 mt-5">
          {songsList[currentSongIndex].title}
        </Text>
        <Text className="text-white text-lg font-semibold ml-5">
          {songsList[currentSongIndex].artist}
        </Text>

        <Slider
          style={{ width: '90%', height: 40, alignSelf: 'center' }}
          minimumValue={0}
          maximumValue={progress.duration}
          value={progress.position}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#fff"
        />

        <View className="w-[90%] flex-row justify-between self-center">
          <Text className="text-white">{format(progress.position)}</Text>
          <Text className="text-white">{format(progress.duration)}</Text>
        </View>

        <View className="w-full flex-row justify-evenly items-center self-center mt-7">
          <TouchableOpacity onPress={handlePrevious}>
            <Image source={images.previous} style={{ width: 35, height: 35, tintColor: 'white' }} />
          </TouchableOpacity>
         
          <TouchableOpacity
            onPress={handlePlayPause}
            className="flex items-center justify-center"
          >
            {playbackState.state === State.Playing ? (
              <Image
                source={images.pause}
                style={{
                  width: 45,
                  height: 45,
                  marginLeft: 10,
                  marginRight: 10,
                  tintColor: '#3ad934',
                }}
              />
            ) : (
              <Image
                source={images.playbutton}
                style={{
                  width: 45,
                  height: 45,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext}>
            <Image source={images.next} style={{ width: 35, height: 35, tintColor: 'white' }} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Modal>
  );
};


export default SongPlayer;