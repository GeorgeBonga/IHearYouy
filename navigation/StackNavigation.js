import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignUpScreenTwo from "../screens/SignUpScreenTwo";
import ProfileScreen from "../screens/ProfileScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import ChatScreen from "../screens/ChatScreen ";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="HomeMain"
        options={{ headerShown: false }}
        component={BottomTabNavigation}
      />
      
      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="profile"
        options={{ headerShown: true }}
        component={ProfileScreen}
      />
       <Stack.Screen
        name="chat"
        options={{ headerShown: true }}
        component={ChatScreen}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="SignUpTwo"
        options={{ headerShown: false }}
        component={SignUpScreenTwo}
      />
    </Stack.Navigator>
  );
}
