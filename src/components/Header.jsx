import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";
import { HeaderBackButton } from "@react-navigation/elements";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <HeaderBackButton
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.background,
    fontSize: 22,
    flex: 1,
    textAlign: "center",
  },

  backButton: {
    position: "absolute",
  },
});
