// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
// import { icons } from "../constants";

// const FormField = ({
//   title,
//   value,
//   placeholder,
//   handleChangeText,
//   otherStyles,
//   ...props
// }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <View className={`space-y-4 ${otherStyles}`}>
//       <Text className="text-base text-gray-900 font-pmedium">{title}</Text>

//       <View className="w-full h-16 px-4 bg-gray-800 rounded-2xl border-2 border-gray-700 flex flex-row items-center">
//         {title === "Username" && (
//           <Image
//             source={icons.profile}
//             style={{
//               width: 20,
//               height: 20,
//               resizeMode: "contain",
//               marginRight: 10,
//               tintColor: "#9CA3AF",
//             }}
//           />
//         )}

//         {title === "Email" && (
//           <Image
//             source={icons.mail}
//             style={{
//               width: 20,
//               height: 20,
//               resizeMode: "contain",
//               marginRight: 10,
//               tintColor: "#9CA3AF",
//             }}
//           />
//         )}

//         <TextInput
//           className="flex-1 text-white font-psemibold text-base"
//           value={value}
//           placeholder={placeholder}
//           placeholderTextColor="#9CA3AF"
//           onChangeText={handleChangeText}
//           secureTextEntry={title === "Password" ? !showPassword : false}
//           style={{ outlineStyle: "none" }} 
//           {...props}
//         />

//         {title === "Password" && (
//           <TouchableOpacity onPress={() => setShowPassword((prevState) => !prevState)}>
//             <Image
//               source={showPassword ? icons.eye : icons.eyeHide}
              
//               style={{
//                 width: 20,
//                 height: 20,
//                 resizeMode: "contain",
//                 tintColor: "#9CA3AF",
//               }}
//             />
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// export default FormField;

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  console.log("Title:", title); // Debugging
  console.log("Show Password State:", showPassword); // Debugging
  console.log("Secure Text Entry:", title === "Password" ? !showPassword : false); // Debugging

  return (
    <View className={`space-y-4 ${otherStyles}`}>
      <Text className="text-base text-gray-900 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-gray-800 rounded-2xl border-2 border-gray-700 flex flex-row items-center">
        {title === "Username" && (
          <Image
            source={icons.profile}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginRight: 10,
              tintColor: "#9CA3AF",
            }}
          />
        )}

        {title === "Email" && (
          <Image
            source={icons.mail}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              marginRight: 10,
              tintColor: "#9CA3AF",
            }}
          />
        )}

        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" ? !showPassword : false}
          style={{ outlineStyle: "none" }}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword((prevState) => !prevState);
              console.log("Show Password After Click:", !showPassword); // Debugging
            }}
          >
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                tintColor: "#9CA3AF",
              }}
              />
            

          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
