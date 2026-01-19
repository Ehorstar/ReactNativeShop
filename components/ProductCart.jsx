import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../UI/Button/Button";
import { useContext } from "react";
import { CartContext } from "../contexts/Cart/CartContext";
import { useRouter } from "expo-router";

const ProductCart = ({ item }) => {
  const { incrementQuantity, decrementQuantity } = useContext(CartContext);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push(`/product/${item.id}`)}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </Pressable>

      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            text="-"
            variant="secondary"
            style={styles.btn}
            onPress={() => decrementQuantity(item.id)}
          />
          <Text style={styles.qty}>{item.quantity}</Text>
          <Button
            text="+"
            variant="secondary"
            style={styles.btn}
            onPress={() => incrementQuantity(item.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    marginHorizontal: 12,
    marginVertical: 6,
    alignItems: "center",
    elevation: 2,
  },
  image: {
    borderRadius: 12,
    width: 50,
    height: 50,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    flexShrink: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    color: "#5fa35f",
    marginTop: 4,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  qty: {
    textAlign: "center",
    fontWeight: "500",
  },
});

export default ProductCart;
