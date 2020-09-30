import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super();
    this.state = { email: null, password: null };
  }
  loginFunc() {
    const { email, password } = this.state;
    console.log("login click", `${email},${password}`);
  }

  signupFunc() {
    console.log("signup click");
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.mainHeading}>Login Screen</Text>
        </View>
        <View>
          <Text style={styles.heading}>User Email:</Text>
          <TextInput
            style={styles.input}
            placeholder={"Enter your email"}
            value={this.state.email}
            onChangeText={(value) => this.setState({ email: value })}
          ></TextInput>
        </View>
        <View>
          <Text style={styles.heading}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder={"Enter your password"}
            onChangeText={(value) => this.setState({ password: value })}
            value={this.state.password}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View>
          <View
            style={styles.loginButton}
            onStartShouldSetResponder={this.loginFunc.bind(this)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </View>
          <View
            title="Signup"
            style={styles.signupButton}
            onStartShouldSetResponder={this.signupFunc.bind(this)}
          >
            <Text style={styles.buttonText}>Signup</Text>
          </View>
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
  mainHeading: {
    color: "white",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 25,
    width: "100%",
    marginBottom: 10,
    left: 120,
  },
  input: {
    width: "95%",
    height: 50,
    left: 10,
    fontSize: 15,
    fontWeight: "normal",
  },
  loginButton: {
    height: 50,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    backgroundColor: "blue",
  },
  signupButton: {
    height: 50,
    marginTop: 20,
    backgroundColor: "red",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 2,
  },
});
