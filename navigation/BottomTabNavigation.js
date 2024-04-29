import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  EvilIcons,
  Ionicons,
  FontAwesome,
} from "react-native-vector-icons";
import CallsScreen from "../screens/CallsScreen";
import TopTabNavigator from "./TopTabNavigator";
import CompeteScreen from "../screens/CompeteScreen";
import { Image, View, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { themeColors } from "../theme";
import CameraScreen from "../screens/CameraScreen";
import { useNavigation } from "@react-navigation/native";
import GeneralNotifications from "../screens/GeneralNotifications";
const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const navigation = useNavigation();
  function CustomTitle() {
    return (
      <View className="flex">
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/u.png")}
        />
      </View>
    );
  }
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "silver" }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#C0C0C0",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="TopTab"
        component={TopTabNavigator}
        options={{
          headerTitle: (props) => (
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <CustomTitle {...props} />
              <Text style={{ fontSize: 20, fontWeight: "bold",color:themeColors.bg }}>IHEARYOU</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: 95,
                  left: 150,
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
              >
                 {/* <TouchableOpacity onPress={() => navigation.navigate("chat")}>
                 <Ionicons
                  style={{ margin: 2 }}
                  name="search"
                  color={themeColors.bg}
                  size={30}
                />
                 </TouchableOpacity> */}
                

                <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                  <FontAwesome
                    style={{ margin: 1 }}
                    name="user-circle"
                    color={themeColors.bg}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ),

          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Meetings"
        component={CallsScreen}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={36} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={GeneralNotifications}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Competition"
        component={CompeteScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <EvilIcons name="trophy" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
