import React, { useState } from 'react';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import BarcodeScanner from './components/BarcodeScanner.js'
import SignupScreen from './pages/auth/SignUp'
import ResetPasswordScreen from './pages/auth/ForgotPassword'

import { TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AntDesign } from '@expo/vector-icons';

// READUX
import { Provider } from 'react-redux';
import store from './utils/store';

const Stack = createStackNavigator();

export default function App() {

  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} showSideBar={showSideBar}
            options={({ navigation }) => ({
              title: '',
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => setShowSideBar(true)}
                  className="ml-3">
                  <AntDesign name="menufold" size={24} color="white" />
                  {/* <AntDesign name="close" size={24} color="black" /> */}
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                  className="mr-3">
                  {/* <Ionicons name="log-out-outline" size={30} color="white" /> */}
                  <AntDesign name="logout" size={24} color="white" />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#204887',
              },
              headerTintColor: '#ffffff',
            })} />
          <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} options={signUp} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={resetPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const resetPassword = {
  headerStyle: {
    backgroundColor: '#204887',
  },
  headerTintColor: '#333333',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerTitle: "Reset Passwoord"
};

const signUp = {
  headerStyle: {
    backgroundColor: '#204887',
  },
  headerTintColor: '#333333',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerTitle: "Sign Up"
};