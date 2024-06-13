import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";
import authService from "../services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    try {
      const response = await authService.login({ email, password });
      await AsyncStorage.setItem("authToken", response.token);
      Alert.alert("Login Success", "You have successfully logged in");

      navigation.navigate("Category");
    } catch (error) {
      Alert.alert("Login Failed", "Incorrect email or password");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <View style={styles.inputBox}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputBox}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
      </View>
      <Pressable style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  contentBox: {
    width: "100%",
  },
  inputBox: {
    marginBottom: 16,
    width: "100%",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: colors.buttonPrimaryBackground,
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },
  buttonText: {
    color: colors.buttonPrimaryText,
    fontSize: 16,
  },
});
