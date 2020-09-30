import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Registeration :</Text>
        <View>
          <Text style={styles.label}>Name :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            type="text"
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Email :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            type="text"
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Mobile No:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            type="text"
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Password :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            type="password"
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Confirm Password :</Text>
          <TextInput
            style={styles.input}
            placeholder="Re-enter your password"
            type="password"
          ></TextInput>
        </View>
        <View>
          <Button
            title="Signup"
            onPress={() => {
              Alert.alert("Signup Successful");
            }}
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    left: 10,
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
