import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (password && username !== '') {
            navigation.navigate('Home');
        }
        else {
            alert("Please enter valid details to login")
        }
    };

    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };

    const handleSingUp = () => {
        navigation.navigate('SignupScreen')
    }
    const ResetPassword = () => {
        navigation.navigate('ResetPasswordScreen')
    }

    return (
        <View className='flex-1 items-center justify-center bg-slate-50 relative'>
            <View className='p-8 w-full max-w-sm mt-16'>
                <View className='flex items-center w-full mb-5'>
                    <Text className='text-5xl font-bold mb-6 text-[#204887]'>Arcs Login</Text>
                </View>


                <TextInput
                    className='w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4'
                    placeholderTextColor="#000"
                    placeholder="Enter email address"
                    keyboardType="email-address"
                    value={username}
                    onChangeText={setUsername}
                />

                <TouchableOpacity className='flex' onPress={ResetPassword}>
                    <Text className='text-[#204887] font-semibold ml-auto'>Forgot password?</Text>
                </TouchableOpacity >

                <TextInput
                    className='w-full bg-white border border-slate-200 mt-2 rounded-md h-12 px-4'
                    placeholderTextColor="#000"
                    placeholder="Enter password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <View className='flex flex-row justify-between items-center my-8'>
                    <View className='flex-row items-center'>
                        <TouchableOpacity
                            onPress={handleCheck}
                            className='bg-white border border-slate-200 h-6 w-6 rounded-sm mr-2 flex items-center justify-center'
                        >
                            {/* selected state */}
                            <View className={checked ? 'bg-[#204887] w-4 h-4 rounded-sm' : 'w-4 h-4 rounded-sm'} />
                        </TouchableOpacity >
                        <TouchableOpacity onPress={handleCheck}>
                            <Text className='text-slate-900'>Remember me</Text>
                        </TouchableOpacity >
                    </View>
                </View>

                <TouchableOpacity onPress={handleLogin}
                    className='h-12 bg-[#204887] rounded-md flex flex-row justify-center items-center px-6'
                >
                    <View className='flex-1 flex items-center'>
                        <Text className='text-white text-base font-medium'>Login</Text>
                    </View>
                </TouchableOpacity >
                <View className='flex flex-row mt-4 justify-between '>
                    <Text className='text-slate-900'>Dont have an account?</Text>
                    <Text onPress={handleSingUp} className='underline font-semibold text-[#204887]'>
                        Sign Up
                    </Text>
                </View>
                <View className='items-center'>
                    <View className=' w-3/4 flex flex-row mt-8 justify-between items-center'>
                        <Text className='underline text-slate-900 font-semibold '>
                            Login With {'>'}
                        </Text>
                        <Image
                            source={require('../../Assets/images/icons8-google-240.png')}
                            className='w-[60] h-[60]'
                        />
                        <Image
                            source={require('../../Assets/images/icons8-facebook-circled-240.png')}
                            className='w-[60] h-[60]'
                        />
                    </View>
                </View>
            </View>
            <View className='flex-1 items-center justify-center bottom-2 left-0 right-0'>
                <Text className='text-sm mt-6 text-[#204887] italic'>
                    Shopping Simplified...
                </Text>
            </View>
        </View>
    );
};

export default Login