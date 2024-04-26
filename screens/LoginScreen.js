import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex ">
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/u.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
        className="flex-1 bg-white px-8 pt-8"
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-2">Email Address</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-700  mb-3"
            placeholder="email"
            value=""
          />
          <Text className="text-gray-700 ml-2">Password</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-700 "
            secureTextEntry
            placeholder="password"
            value=""
          />
          <TouchableOpacity className="flex items-end">
            <Text style={{
                color: themeColors.bg,
              }} className="text-gray-700 mb-5">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: themeColors.bg,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            className="py-2 bg-yellow-400 "
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{
                color: themeColors.slv,
              }}
              className="text-xl font-bold text-center text-gray-700"
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text  style={{
                color: themeColors.bg,
              }} className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
