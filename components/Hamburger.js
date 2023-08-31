import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={tw`w-6 h-6 relative`}>
        <View
          style={[
            tw`w-full h-1 bg-black absolute left-0 rounded-full transition-all duration-300`,
            isOpen && tw`transform rotate-45 translate-y-1.5`,
          ]}
        />
        <View
          style={[
            tw`w-full h-1 bg-black absolute left-0 rounded-full transition-all duration-300`,
            isOpen && tw`opacity-0`,
          ]}
        />
        <View
          style={[
            tw`w-full h-1 bg-black absolute left-0 rounded-full transition-all duration-300`,
            isOpen && tw`transform -rotate-45 -translate-y-1.5`,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Hamburger;