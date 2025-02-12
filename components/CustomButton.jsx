import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-orange-400 rounded-2xl hover:bg-orange-600 min-h-[52px] w-[250px] flex flex-row justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
        disabled={isLoading}
      >
        <Text className={`text-white font-psemibold text-lg ${textStyles}`}>
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

export default CustomButton;