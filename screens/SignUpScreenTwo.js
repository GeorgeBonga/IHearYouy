
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    TextInput,
  } from "react-native";
  import React, { useState } from "react";
  import { themeColors } from "../theme";
  import { useNavigation } from "@react-navigation/native";



export default function SignUpScreenTwo() {
    const navigation = useNavigation();

    const [userType, setUserType] = useState([]);
  
    const handleUserTypeChange = (type) => {
      if (userType.includes(type)) {
        setUserType(userType.filter((item) => item !== type));
      } else {
        setUserType([...userType, type]);
      }
    };
  
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex mt-5">
        <View className="flex-row justify-start">
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/u.png")}
            style={{ width: 165, height: 100 }}
          />
        </View>
      </View>
      <View
        className="flex-1 bg-white px-6 pt-6"
        style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-2">Username</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-700  mb-3"
            // value=""
            placeholder="Enter Username"
          />
          <Text className="text-gray-700 ml-2">Date of Birth</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-700  mb-3"
            // value=""
            placeholder="Enter Date of birth"
          />
           <Text className="text-gray-700 ml-2">Country</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-700  mb-3"
            // value=""
            placeholder="Enter Country"
          />
         
          <Text className="text-gray-700 ml-2">Confirm Password</Text>
          <TextInput
            className="p-2 bg-gray-100 text-gray-700  mb-3"
            secureTextEntry
            // value=""
            placeholder="Enter Password"
          />
       
          {/* <View
          
          >
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}
            >
              Which are you?{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ width: "45%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Checkbox.Android
                    status={
                      userType.includes("Music Artist")
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => handleUserTypeChange("Music Artist")}
                    color={themeColors.bg}
                  />
                  <Text style={{ marginLeft: 8 }}>Music Artist</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Checkbox.Android
                    status={
                      userType.includes("Producer") ? "checked" : "unchecked"
                    }
                    onPress={() => handleUserTypeChange("Producer")}
                                         color={themeColors.bg}

                  />
                  <Text style={{ marginLeft: 8 }}>Producer</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Checkbox.Android
                    status={
                      userType.includes("Engineer") ? "checked" : "unchecked"
                    }
                    onPress={() => handleUserTypeChange("Engineer")}
                    color={themeColors.bg}
                  />
                  <Text style={{ marginLeft: 8 }}>Engineer</Text>
                </View>
              </View>
              <View style={{ width: "45%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                
                 
                  <Text
                    style={{ fontSize: 17, fontWeight: "bold", marginLeft: 8 }}
                  >
                    Visual Media{" "}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Checkbox.Android
                    status={
                      userType.includes("Videographer")
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => handleUserTypeChange("Videographer")}
                    color={themeColors.bg}
                  />
                  <Text style={{ marginLeft: 8 }}>Videographer</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Checkbox.Android
                    status={
                      userType.includes("Photographer")
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => handleUserTypeChange("Photographer")}
                    color={themeColors.bg}
                  />
                  <Text style={{ marginLeft: 8 }}>Photographer</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Checkbox.Android
                    status={
                      userType.includes("Graphic artist")
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => handleUserTypeChange("Graphic artist")}
                    color={themeColors.bg}
                  />
                  <Text style={{ marginLeft: 8 }}>Graphic artist</Text>
                </View>
              </View>
            </View>
           
          </View> */}

          <TouchableOpacity   onPress={() => console.log("Selected User Types:", userType) || navigation.navigate("HomeMain")}
              style={{
                backgroundColor: themeColors.bg,
                padding: 10,
                borderRadius: 5,
                marginTop: 20,
              }} className="py-3 bg-yellow-400 ">
            <Text   style={{
                color: themeColors.slv,
              }}className="font-xl font-bold text-center">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-3">
          <Text style={{
                color: themeColors.slv,
              }} className="text-gray-500 font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{
                color: themeColors.bg,
              }} className="font-semibold text-yellow-500"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}