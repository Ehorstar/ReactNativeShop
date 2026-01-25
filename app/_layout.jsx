import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import CartProvider from "../contexts/Cart/CartContext";
import FavouritesProvider from "../contexts/Favourites/FavouritesContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../contexts/Auth/AuthContext";

const queryClient = new QueryClient();

const NavigationLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "Магазин" }}
      />
      <Stack.Screen name="product/[id]" options={{ title: "Опис товару" }} />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <AuthProvider>
          <FavouritesProvider>
            <CartProvider>
              <NavigationLayout />
            </CartProvider>
          </FavouritesProvider>
        </AuthProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
