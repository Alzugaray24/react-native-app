import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import categoryService from "../services/categoryService";

const CategoryScreen = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setLoading(true);
    try {
      const response = await categoryService.getAllCategories();
      // Mapear la respuesta para obtener un array de objetos con name y description
      const categoryList = response.map((category) => ({
        id: category._id, // Asegúrate de tener un identificador único para cada categoría
        name: category.name,
        description: category.description,
      }));
      setCategories(categoryList);
    } catch (error) {
      console.error("Error fetching categories:", error);
      Alert.alert(
        "Error",
        "Failed to fetch categories. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id} // Utiliza el ID como key único
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryName}>{item.name}</Text>
            <Text style={styles.categoryDescription}>{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyListComponent}>
            <Text>No categories found.</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  categoryItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  categoryName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  categoryDescription: {
    fontSize: 16,
  },
  emptyListComponent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
