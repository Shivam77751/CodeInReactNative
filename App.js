import { StatusBar } from "expo-status-bar";
import React from "react";
import LoginScreen from "./app/screens/login";
import RegisterScreen from "./app/screens/registerScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabScreen from "./app/screens/tabNavigation";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Tab" component={TabScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    // return <LoginScreen />;
  }
}
