import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import {icons} from '../constants'

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-4 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-50 rounded-2xl border-2 border-yellow-200 flex flex-row items-center">
      {title === 'Username' && (
          <Image
            source={icons.profile}  
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              marginRight: 10, 
               }}
          />
        )}

{title === 'Email' && (
          <Image 
            source={icons.mail}  
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              marginRight: 10, 
               }}
               className="opacity-30"
          />
        )}
        <TextInput
          className="flex-1 text-black-100 font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />
      

        
               {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={{
                width: 20,  
                height: 20, 
                resizeMode: 'contain',  
                borderRadius: 10,  
                padding: 4, 
              }}
            />
          </TouchableOpacity>
        )}


      </View>
    </View>
  );
};

export default FormField;
