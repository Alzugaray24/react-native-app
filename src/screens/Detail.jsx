import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { colors } from "../global/colors";
import Icon from "react-native-vector-icons/Ionicons";

const Detail = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: product.thumbnail }} />
          <View style={styles.content}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.rating}>Rating: {product.rating}</Text>
            <Text style={styles.stock}>Stock: {product.stock}</Text>
            <Text style={styles.brand}>Brand: {product.brand}</Text>
            <Text style={styles.category}>Category: {product.category}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Icon name="cart" size={24} color={colors.white} />
          <Text style={styles.cartButtonText}>Agregar al carrito</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    alignContent: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    height: "auto",
    minHeight: 150,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    width: "100%",
    maxWidth: 600,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
    maxWidth: "65%",
  },
  image: {
    width: 100,
    height: 130,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.green900,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    flexShrink: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.green900,
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  stock: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  brand: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green900,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    alignSelf: "center",
  },
  cartButtonText: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 8,
  },
});
