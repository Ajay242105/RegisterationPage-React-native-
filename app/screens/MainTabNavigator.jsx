import React, { useEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from './HomeScreen';
import LibraryScreen from './LibraryScreen';
import SearchScreen from './SearchScreen';
import PremiumScreen from './PremiumScreen';



const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 4,
          shadowOffset: {
            width: 0,
            height: -4,
          },
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "HomeScreen",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="white" />
            ) : (
              <AntDesign name="home" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search" size={24} color="white" />
            ) : (
              <Ionicons name="search-outline" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          tabBarLabel: "Your Library",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="library-music" size={24} color="red" />
            ) : (
              <MaterialIcons name="library-music" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          tabBarLabel: "Premium",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="spotify" size={24} color="green" />
            ) : (
              <FontAwesome5 name="spotify" size={24} color="white" />
            ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
