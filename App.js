import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Navigator from "./src/components/Navigator";
import { colors } from "./src/global/colors";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
