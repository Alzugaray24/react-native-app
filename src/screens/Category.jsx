import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import categories from "../data/categories.json";

const Category = ({ navigation }) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        keyExtractor={(category) => category}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
