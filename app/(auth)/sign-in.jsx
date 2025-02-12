
import { Alert, Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { icons, images } from '../../constants';
import axios from 'axios';

const SignIn = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const submit = async () => {
        if (!form.email || !form.password) {
            setError('Both email and password are required!');
            return;
        }
        const userData = {
            email: form.email,
            password: form.password
        };

        try {
            setSubmitting(true);
            const res = await axios.post("http://localhost:5002/sign-in", userData);
            console.log(res.data);
            if (res.data.status === "ok") {
                alert("Sign-in successful!", "Welcome back to P & D.");
                router.replace('/HomeScreen');
            }
        } catch (error) {
            console.log(error);
            if (error.response?.data?.error === "User does not exist") {
                alert("User does not exist", "Please sign up.");
                router.push('/sign-up');
            } else {
                alert("Error during sign-in", error.response?.data?.error || "Unknown error");
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="w-full h-full">
            <ImageBackground
                source={images.bgimg}
                className="bg-black-100"
                style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View className="w-full flex justify-center h-full px-4 my-6 mt-14">
                        <View className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg mx-auto">
                            <Image
                                source={icons.login}
                                style={{ width: 70, height: 70, alignSelf: 'center', marginBottom: 20 }}
                                resizeMode="contain"
                            />
                            <Text className="text-2xl text-black text-center font-semibold bg-slate-100 border-">
                                Login to P & D
                            </Text>
                            <View className="flex justify-center pt-3 flex-row gap-2">
                                <Text className="text-sm text-gray-600 font-normal">
                                    Don't have an account?
                                </Text>
                                <Link href="/sign-up" className="text-sm font-semibold text-secondary">
                                    Signup
                                </Link>
                            </View>

                            <FormField
                                title="Email"
                                placeholder="Enter your email"
                                value={form.email}
                                handleChangeText={(e) => setForm({ ...form, email: e })}
                                otherStyles="mt-7"
                                keyboardType="email-address"
                            />

                            <FormField
                                title="Password"
                                placeholder="Enter your Password"
                                value={form.password}
                                handleChangeText={(e) => setForm({ ...form, password: e })}
                                otherStyles="mt-7"
                            />

                            <CustomButton
                                title="Sign In"
                                handlePress={() => submit()}
                                containerStyles="mt-5"
                                isLoading={isSubmitting}
                            />

                            {error && (
                                <Text className="text-red-500 text-center mt-4">{error}</Text>
                            )}
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default SignIn;