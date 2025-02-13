
// import React, { useEffect } from 'react';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Entypo, Ionicons, AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
// import { NavigationIndependentTree } from "@react-navigation/native";  // Update here
// import SearchScreen from "./screens/SearchScreen";
// import LibraryScreen from "./screens/LibraryScreen";
// import PremiumScreen from "./screens/PremiumScreen";
// import HomeScreen from "./screens/HomeScreen";
// import TrackPlayer from 'react-native-track-player';
// const Tab = createBottomTabNavigator();

// function BottomTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: "black",
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           elevation: 4,
//           shadowOffset: {
//             width: 0,
//             height: -4,
//           },
//           borderTopWidth: 0,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: "HomeScreen",
//           headerShown: false,
//           tabBarLabelStyle: { color: "white" },
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <Entypo name="home" size={24} color="white" />
//             ) : (
//               <AntDesign name="home" size={24} color="white" />
//             ),
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{
//           tabBarLabel: "Search",
//           headerShown: false,
//           tabBarLabelStyle: { color: "white" },
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <Ionicons name="search" size={24} color="white" />
//             ) : (
//               <Ionicons name="search-outline" size={24} color="white" />
//             ),
//         }}
//       />
//       <Tab.Screen
//         name="Library"
//         component={LibraryScreen}
//         options={{
//           tabBarLabel: "Your Library",
//           headerShown: false,
//           tabBarLabelStyle: { color: "white" },
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <MaterialIcons name="library-music" size={24} color="red" />
//             ) : (
//               <MaterialIcons name="library-music" size={24} color="white" />
//             ),
//         }}
//       />
//       <Tab.Screen
//         name="Premium"
//         component={PremiumScreen}
//         options={{
//           tabBarLabel: "Premium",
//           headerShown: false,
//           tabBarLabelStyle: { color: "white" },
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <FontAwesome5 name="spotify" size={24} color="green" />
//             ) : (
//               <FontAwesome5 name="spotify" size={24} color="white" />
//             ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function Navigation() {

//   TrackPlayer.registerPlaybackService(() => require('./services/Service.js'));



//   return (
//     <NavigationIndependentTree> 
//       {/* <FloatingMusicPlayer/> */}

//       <BottomTabs />
//     </NavigationIndependentTree>
//   );
// }

// export default Navigation;

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
    <View style={{ flex: 1 }}>
      <StatusBar />
      <MainTabNavigator />

      {/* Floating Music Player */}
      {/* <View style={{ position: 'absolute', bottom: 70, left: 0, right: 0 }}>
        <FloatingMusicPlayer
          songsList={songsList}
          currentIndex={currentIndex}
          playbackState={playbackState} // Pass playbackState
          onPressPlayPause={handlePlayPause}
          onPressVisible={() => setIsVisible(true)}
        />

      </View> */}

      {/* Song Player Modal */}
      {/* {isVisible && (
        <SongPlayer
          isVisible={isVisible}
          songsList={songsList}
          currentIndex={currentIndex}
          onChange={(index) => setCurrentIndex(index)}
          onClose={() => setIsVisible(false)}
        />
      )} */}
    </View>
  );
}

export default Navigation;


