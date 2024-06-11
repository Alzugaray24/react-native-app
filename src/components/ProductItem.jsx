import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";

const ProductItem = ({ product, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Detail", { product });
      }}
    >
      <Card style={styles.card}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{product.title}</Text>
          </View>
        </View>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
      </Card>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    height: 150,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.green900,
  },
  detailButton: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  image: {
    width: 100,
    height: 130,
    borderRadius: 10,
  },
});
