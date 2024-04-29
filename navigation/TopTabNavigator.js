import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "react-native-vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen ";
import SearchArtists from "../screens/SearchArtists";
import ArtistsScreen from "../screens/ArtistsScreen";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (

      <Tab.Navigator >
        <Tab.Screen
          options={{
            title: ({ color, focused }) => (
              <Ionicons
                size={25}
                name={focused ? "home" : "home-outline"}
                color={focused ? "blue" : "#272727"}
              />
            ),
          }}
          component={HomeScreen}
          name="Home"
        />
        <Tab.Screen
          options={{
            title: ({ color, focused }) => (
              <Ionicons
                size={25}
                name={focused ? "people-sharp" : "people-outline"}
                color={focused ? "blue" : "#272727"}
              />
            ),
          }}
          component={ArtistsScreen}
          name="friends"
        />
        <Tab.Screen
          options={{
            title: ({ color, focused }) => (
              <Ionicons
                size={25}
                name={focused ? "search" : "search-outline"}
                color={focused ? "blue" : "#272727"}
              />
            ),
          }}
          component={SearchArtists}
          name="search"
        />
        <Tab.Screen
          options={{
            title: ({ color, focused }) => (
              <Ionicons
                size={25}
                name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
                color={focused ? "blue" : "#272727"}
              />
            ),
          }}
          component={ChatScreen}
          name="chat"
        />
      </Tab.Navigator>

  );
};

export default TopTabNavigator;
