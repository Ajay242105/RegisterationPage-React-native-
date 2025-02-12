

import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import React from 'react';

const CustomButtonHome = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  icon,
}) => {
  const dynamicBgColor = title === "Sign in with Spotify" ? "bg-green-700" : containerStyles;

  return (
    <View className="flex-1 justify-center items-center ">
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`border border-white rounded-2xl min-h-[52px] w-[350px] flex flex-row justify-start items-center ${dynamicBgColor} ${isLoading ? "opacity-50" : ""}`}
        disabled={isLoading}
      >
        {icon && <View className="ml-4">{icon}</View>}
        <Text className={`text-white font-semibold text-lg flex-1 text-center ${textStyles}`}>
          {title}
        </Text>

        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color="#fff"
            size="small"
            className="ml-2"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonHome;

