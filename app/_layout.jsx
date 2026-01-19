import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import CartProvider from "../contexts/Cart/CartContext";
import FavouritesProvider from "../contexts/Favourites/FavouritesContext";

const RootLayout = () => {
  return (
    <FavouritesProvider>
      <CartProvider>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, title: "Магазин" }}
          />
          <Stack.Screen
            name="product/[id]"
            options={{ title: "Опис товару" }}
          />
        </Stack>
      </CartProvider>
    </FavouritesProvider>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
