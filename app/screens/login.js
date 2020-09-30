import React from "react";
import { Button, StyleSheet, TextInput, View, Text, Image } from "react-native";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/loginlogo.jpg")}
        ></Image>
        <View>
          <Text style={styles.heading}>User Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
          ></TextInput>
        </View>
        <View style={{ height: 90 }}>
          <Text style={styles.heading}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
          ></TextInput>
        </View>
        <View>
          <Button
            title="Login"
            style={styles.loginButton}
            onPress={() => alert("Clicked")}
          ></Button>
        </View>
        <View>
          <Button
            title="Signup"
            style={styles.signupButton}
            onPress={() => alert("Clicked Signup")}
          ></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  logo: {
    top: 25,
    width: 100,
    height: 60,
    position: "absolute",
    left: 150,
  },
  heading: {
    color: "black",
    fontStyle: "normal",
    fontWeight: "bold",
    left: 10,
    fontSize: 20,
    width: "100%",
  },
  input: {
    width: "95%",
    height: 50,
    left: 10,
    fontSize: 15,
    fontWeight: "normal",
    // borderWidth: 1,
  },
  loginButton: {
    fontSize: 15,
    height: 50,
    color: "blue",
  },
  signupButton: {
    fontSize: 15,
    height: 50,
    marginTop: 20,
    color: "red",
  },
});
