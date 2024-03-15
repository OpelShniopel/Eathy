import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Link, Stack } from 'expo-router';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // TODO: Handle sign up action here
  };

  return (
    <ImageBackground source={require('../../assets/images/backgroundImage2.png')} className='bg-white flex-1 justify-center resize-y'>
      <View className="flex-1 p-5 justify-center">
        <Stack.Screen options={{ title: 'Sign up', headerTitleAlign: 'center' }} />
        <View className="bg-white p-8 rounded-xl shadow-md">
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Name"
            className="border-2 border-black p-3 mt-1 mb-4 bg-white rounded-md text-lg"
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            className="border-2 border-black p-3 mt-1 mb-4 bg-white rounded-md text-lg"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            className="border-2 border-black p-3 mt-1 mb-6 bg-white rounded-md text-lg"
            secureTextEntry
          />
          <TouchableOpacity onPress={handleSignUp} className="bg-yellow-400 py-3 rounded-full border-2 border-black mb-4">
            <Text className="text-black font-bold text-lg text-center">Create account</Text>
          </TouchableOpacity>
          <Link href="/sign-in" className="self-center font-bold text-black text-lg">
            Sign in
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUpScreen;