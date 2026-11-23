import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FavoritesProvider } from "../context/FavoritesContext";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#F6F8F7" } }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="property/[id]" options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="sell" options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="inspections" options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="agent" options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="login" options={{ animation: "slide_from_right" }} />
      </Stack>
    </FavoritesProvider>
  );
}
