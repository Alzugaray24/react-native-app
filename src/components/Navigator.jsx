import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ItemListCategory from "../screens/ItemListCategory";
import Detail from "../screens/Detail";
import Home from "../screens/Home";
import Header from "./Header";

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          header: () => {
            const title =
              route.name === "Home"
                ? "Home"
                : route.name === "ItemListCategory"
                ? route.params?.category || "Item List"
                : route.name === "Detail"
                ? route.params?.product.title
                : "App";
            return <Header navigation={navigation} title={title} />;
          },
        })}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="ItemListCategory"
          component={ItemListCategory}
          options={({ route }) => ({
            title: route.params?.category || "Item List",
          })}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: "Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
