import { FlatList, StyleSheet, Text, View } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const CartScreen = () => {
  const { items } = useContext(CartContext);
  return (
    <View>
      <Text>Cart</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
