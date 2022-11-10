import * as React from 'react';
import 'react-native-gesture-handler';
import HomeScreen from "./screens/HomeScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator";


export default function App() {
  return (
    <HomeScreen/>,
    <BottomTabNavigator/>
  );
}
