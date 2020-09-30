import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: null,
      email: null,
      mobile: null,
      password: null,
      confirmPassword: null,
    };
  }

  signupFunc() {
    console.log("User Detail--->", this.state);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Registeration :</Text>
        <View>
          <Text style={styles.label}>Name :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onChangeText={(value) => this.setState({ name: value })}
            type="text"
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Email :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(value) => this.setState({ email: value })}
            type="text"
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Mobile No:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            onChangeText={(value) => this.setState({ mobile: value })}
            type="number"
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Password :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={(value) => this.setState({ password: value })}
            type="password"
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Confirm Password :</Text>
          <TextInput
            style={styles.input}
            placeholder="Re-enter your password"
            onChangeText={(value) => this.setState({ confirmPassword: value })}
            type="password"
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View>
          <Button title="Signup" onPress={this.signupFunc.bind(this)}></Button>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    left: 10,
    top: 20,
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    width: "100%",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
  },
});
