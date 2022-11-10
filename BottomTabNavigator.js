import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/Profile";
import OppScreen from "../screens/Opportunities";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Profile") {
                iconName = "person";
              } else if (route.name === "Volunteer") {
                iconName = "heart";
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: "#FADADD",
            inactiveTintColor: "#97b4c6",
            style: {
              height: 80,
              borderTopWidth: 0,
              backgroundColor: "#376C8A"
            },
            labelStyle: {
              fontSize: 17,
              fontWeight: "bold",
            },
            labelPosition: "below-icon",
            tabStyle: {
              alignItems: "center",
              justifyContent: "center"
            }
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Volunteer" component={OppScreen} />

          
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}