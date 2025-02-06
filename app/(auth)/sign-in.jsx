import { Alert, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { signIn } from '../../lib/appwrite';

const SignIn = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(''); // New state for error handling

    const submit = async () => {
        if (form.email === "" || form.password === "") {
            setError("Please fill in all fields"); // Set error state instead of alert
            return;
        }

        setSubmitting(true);
        setError(""); // Clear previous errors

        try {
            await signIn(form.email, form.password);
            Alert.alert('Sign in successful!');
            router.replace('/Home'); // Navigate to home or another screen after successful sign-in
        } catch (error) {
            setSubmitting(false);
            if (error.message === 'User is already signed in.') {
                setError('You are already signed in!'); // Show error in UI instead of alert
                router.replace('/sign-up');  // Redirect to home or another page if signed in
            } else {
                setError(`Error during sign-in: ${error.message || error}`); // Display detailed error in UI
            }
        }
    };

    return (
        <SafeAreaView className="bg-black h-full">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="w-full flex justify-center h-full px-4 my-6">
                    <View className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg mx-auto">
                        <Text className="text-2xl text-black text-center font-semibold">
                            Log in to P & D
                        </Text>

                        <FormField
                            title="Email"
                            value={form.email}
                            handleChangeText={(e) => setForm({ ...form, email: e })}
                            otherStyles="mt-7"
                            keyboardType="email-address"
                        />

                        <FormField
                            title="Password"
                            value={form.password}
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                            otherStyles="mt-7"
                            secureTextEntry
                        />

                        <CustomButton
                            title="Sign In"
                            handlePress={submit}
                            containerStyles="mt-5"
                            isLoading={isSubmitting}
                        />

                        {error && (
                            <Text className="text-red-500 text-center mt-4">{error}</Text>
                        )}

                        <View className="flex justify-center pt-5 flex-row gap-2">
                            <Text className="text-lg text-gray-700 font-normal">
                                Don't have an account?
                            </Text>
                            <Link href="/sign-up" className="text-lg font-semibold text-orange-600">
                                Signup
                            </Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;