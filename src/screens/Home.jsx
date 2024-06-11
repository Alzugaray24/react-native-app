import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { colors } from "../global/colors";
import Category from "./Category";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Category navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.green300,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
