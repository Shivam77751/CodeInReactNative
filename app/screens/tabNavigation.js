import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import SettingScreen from "./setting";
const Tab = createBottomTabNavigator();
export default class TabScreen extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarBadge: 5 }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{ tabBarBadge: 5 }}
        />
      </Tab.Navigator>
    );
  }
}
