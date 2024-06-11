import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { colors } from "../global/colors";

import products from "../data/products.json";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem.jsx";

const ItemListCategory = ({ route, navigation }) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  const { category } = route.params;

  useEffect(() => {
    const regex = /\d/;
    const Digits = regex.test(keyWord);

    if (Digits) {
      setError("Don't use digits");
      return;
    } else {
      setError("");
    }

    const productsPreFiltered = products.filter(
      (product) => product.category === category
    );
    const productsFiter = productsPreFiltered.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    );

    setProductsFiltered(productsFiter);
  }, [keyWord, category]);

  // const handleProdSelected = (id) => {
  //   const productFound = productsFiltered.find((prod) => prod.id === id);
  //   setProductSelected(productFound);
  // };

  return (
    <View style={styles.flatListContainer}>
      {/* Search */}
      <View style={styles.searchContainer}>
        <Search onSearch={setKeyword} />
      </View>

      {/* FlatList --> ProductItem */}
      <Text>{error}</Text>
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.green300,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  searchContainer: {},
});
