

import React, { useState } from 'react';
import TrackPlayer from 'react-native-track-player';
import { StatusBar, View } from 'react-native';
import MainTabNavigator from './MainTabNavigator.jsx';
import FloatingMusicPlayer from '../components/FloatingMusicPlayer.jsx';
import SongPlayer from '../components/SongPlayer.jsx';
import { songsList } from '../constants/Songs';

function Navigation() {
  TrackPlayer.registerPlaybackService(() => require('./services/Service.js'));

  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="flex-1">
      <StatusBar />
      <MainTabNavigator />

     
    </View>
  );
}

export default Navigation;


