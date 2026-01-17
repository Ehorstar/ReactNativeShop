import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import CartProvider from "../contexts/CartContext";

const RootLayout = () => {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="product/[id]" options={{ title: "Опис товару" }} />
      </Stack>
    </CartProvider>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
