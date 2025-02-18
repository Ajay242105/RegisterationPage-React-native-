

// import React, { useState } from 'react';
// import TrackPlayer from 'react-native-track-player';
// import { StatusBar, View } from 'react-native';
// import MainTabNavigator from './MainTabNavigator.jsx';
// import FloatingMusicPlayer from '../components/FloatingMusicPlayer.jsx';
// import SongPlayer from '../components/SongPlayer.jsx';
// import { songsList } from '../constants/Songs';

// function Navigation() {
//   TrackPlayer.registerPlaybackService(() => require('./services/Service.js'));

//   const [isVisible, setIsVisible] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <View className="flex-1">
//       <StatusBar />
//       <MainTabNavigator />

     
//     </View>
//   );
// }

// export default Navigation;


import React, { useState, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import TrackPlayer, { usePlaybackState, useProgress, State } from 'react-native-track-player';
import FloatingMusicPlayer from '../components/FloatingMusicPlayer';
import SongPlayer from '../components/SongPlayer';
import { songsList } from '../constants/Songs';
import MainTabNavigator from './screens/MainTabNavigator';

function Navigation() {
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
    if (playbackState === State.Playing) {
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
    <View className="flex-1">
      <StatusBar />

       
                  <FloatingMusicPlayer
                    songsList={songsList}
                    currentIndex={currentIndex}
                    playbackState={playbackState}
                    onPressPlayPause={handlePlayPause}
                    onPressVisible={() => setIsVisible(true)}
                  />

      {/* Main Tab Navigator */}
      <MainTabNavigator />

      {/* Song Player */}
      <SongPlayer
          isVisible={isVisible}
          songsList={songsList}
          currentIndex={currentIndex}
          playbackState={playbackState}
          progress={progress}
          onChange={(index) => setCurrentIndex(index)}
          onClose={() => setIsVisible(false)}
        />
    </View>
  );
}

export default Navigation;