import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { colors } from "../global/colors";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
        navigation={navigation}
      >
        <Text style={styles.content}>Ir al login</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.disabledBackground,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: colors.buttonPrimaryBackground,
    borderRadius: 10,
    shadowOpacity: 0.5,
    padding: 20,
  },

  content: {
    color: colors.buttonPrimaryText,
    fontSize: 16,
    shadowColor: colors.shadowColor,
  },
});
