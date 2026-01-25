import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import ProductCard from "../../components/ProductCard";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products.services";
import { RefreshControl } from "react-native-gesture-handler";

const HomeScreen = () => {
  const router = useRouter();

  const obj = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const { data: products = [], isLoading: loading, isRefetching, refetch } = obj;

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ padding: 12, gap: 12 }}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onProductPress={() => router.push(`/product/${item.id}`)}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default HomeScreen;
