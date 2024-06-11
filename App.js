import { StyleSheet } from "react-native";

import Navigator from "./src/components/Navigator";

import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  });

  return <Navigator />;
}

const styles = StyleSheet.create({});
