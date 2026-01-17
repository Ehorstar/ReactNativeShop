import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ProductCard = ({ product, onProductPress }) => {
  return (
    <Pressable onPress={onProductPress} style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 3, // Android shadow
  },
  image: {
    width: "100%",
    height: 160,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#5fa35f",
  },
});

export default ProductCard;
