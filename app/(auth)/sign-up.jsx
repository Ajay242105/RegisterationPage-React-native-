import { Alert, Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';
import { icons, images } from '../../constants';
import axios from 'axios';

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const validateForm = () => {
    setError('');

    if (form.username === '') {
      setError("Please enter a username");
      return false;
    }
    else if (form.username.length < 2) {
      setError("Username must be more than 2 characters");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (form.email === '') {
      setError("Please enter an email address");
      return false;
    } else if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (form.password === '') {
      setError("Please enter a password");
      return false;
    } else if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
 
    return true;
  };

  
  function submit() {
    if (!validateForm()) {
      return; 
    }
    const userData = {
        username: form.username,
        email: form.email,
        password: form.password
    };

    axios
      .post("http://localhost:5002/sign-up", userData)
      .then((res) => {
        console.log(res.data); 
        if (res.data.status === "ok") {
          alert("User created successfully!");
          
          router.replace('/sign-in');   
             }
        else{
          alert("You are already signed  up!,signin please");
          router.push('/sign-in');

        }
      })
      .catch((error) => {
        console.log(error); 
        alert("Error during sign-up: " + error.response?.data?.message || "Unknown error");
      });
}


  return ( 
    <SafeAreaView className="bg-black h-full">
      <ImageBackground
        source={images.bgimg}
        className="bg-black-100"
        style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }}
      >
        <ScrollView>
          <View className="w-full flex justify-center h-full px-4 my-6">
            <View className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg mx-auto">
              <Image
                source={icons.login}
                style={{ width: 70, height: 70, alignSelf: 'center', marginBottom: 20 }}
                resizeMode="contain"
              />
              <Text className="text-2xl text-black font-bold text-center justify-center items-center text-semibold">
                Signup to P & D
              </Text>
              <View className="flex justify-center pt-5 flex-row gap-2">
                <Text className="text-sm text-gray-600 font-pregular">
                  Have an account already?
                </Text>
                <Link href="/sign-in" className="text-sm font-psemibold text-secondary">
                  Sign in
                </Link>
              </View>

              <FormField
                title="Username"
                placeholder="Enter your name"
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
                otherStyles="mt-10"
              />

              <FormField
                title="Email"
                placeholder="Enter your email "
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
              />

              <FormField
                title="Password"
                placeholder="Enter password"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-7"
                // secureTextEntry={true}
                keyboardType="password"

              />

              {error && (
                <Text className="text-red-500 text-center mt-4">{error}</Text>
              )}

              <CustomButton
                title="Sign Up"
                handlePress={() => submit()}
                containerStyles="mt-5"
                isLoading={isSubmitting}
              />

             
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;

