import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { showSidebar, hideSidebar } from '../utils/actions';

const Home = ({ showSideBar }) => {

    const sidebarVisible = useSelector(state => state?.sidebarReducer);
    const dispatch = useDispatch();  

    console.log(sidebarVisible)

    const handleToggleSidebar = () => {
        if (sidebarVisible) {
            dispatch(hideSidebar());
        } else {
            dispatch(showSidebar());
        }
    };

    return (
        <View className='relative'>
            {showSideBar && <View className='w-full h-full z-0 bg-slate-400'>
                <View className='absolute w-3/4 bg-[#204887] h-full z-10'>
                    <View className='ml-4 mt-2 mr-4'>
                        <Text className='text-white italic'>
                            Menu items
                        </Text>
                        <View className='border border-white rounded-lg pt-2 pb-2 mt-2 pl-2'>
                            <Text className='text-white'>
                                Make Payment
                            </Text>
                        </View>
                    </View>
                </View>
                <Text>Home Screen</Text>
            </View>}
        </View>

    );
};

export default Home;