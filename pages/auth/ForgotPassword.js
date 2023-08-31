import { View, Text, TextInput, Pressable } from 'react-native';

export default function ResetPasswordScreen() {
    return (
        <View className='flex-1 items-center justify-center bg-slate-50'>
            <View className='p-8 w-full max-w-sm'>
                <Text className='text-4xl font-bold mb-6 text-[#204887]'>Reset Your Password</Text>

                <Text className='text-slate-900 mb-8 text-base'>
                    Forgotten your account password? Enter your email address below and you'll recieve a link
                    to create a new one.
                </Text>

                <TextInput
                    className='w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4'
                    placeholderTextColor="#000"
                    placeholder="Enter email address"
                />

                <Pressable
                    className='h-12 bg-[#204887] rounded-md flex flex-row justify-center items-center px-6'
                >
                    <View className='flex-1 flex items-center'>
                        <Text className='text-white text-base font-medium'>Login</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}