import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";
import { useFavorites } from "../../context/FavoritesContext";

export default function SavedScreen() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const saved = properties.filter(p => favoriteIds.includes(p.id));
  return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
    <Text style={styles.title}>Saved properties</Text><Text style={styles.subtitle}>Your shortlist, all in one place.</Text>
    {saved.length ? saved.map(p => <PropertyCard key={p.id} property={p} saved onToggleSaved={() => toggleFavorite(p.id)} onPress={() => router.push(`/property/${p.id}`)} />) :
      <View style={styles.empty}><View style={styles.icon}><Ionicons name="heart" size={30} color="#167D62" /></View><Text style={styles.emptyTitle}>Your shortlist starts here</Text><Text style={styles.emptyText}>Tap the heart on any property to save it. Your favourites stay saved on this device.</Text><Text onPress={() => router.push("/explore")} style={styles.button}>Explore properties  →</Text></View>}
  </ScrollView>;
}
const styles = StyleSheet.create({ page: { flex: 1, backgroundColor: "#F6F8F7" }, content: { padding: 20, paddingBottom: 30 }, title: { fontSize: 29, color: "#202B26", fontWeight: "800", marginTop: 12 }, subtitle: { color: "#78877F", marginTop: 6, fontSize: 13, marginBottom: 20 }, empty: { alignItems: "center", paddingTop: 60 }, icon: { width: 70, height: 70, borderRadius: 24, backgroundColor: "#E1F1E9", alignItems: "center", justifyContent: "center" }, emptyTitle: { color: "#202B26", fontSize: 21, fontWeight: "800", marginTop: 20 }, emptyText: { color: "#78877F", textAlign: "center", lineHeight: 21, marginTop: 9, maxWidth: 300 }, button: { marginTop: 22, backgroundColor: "#167D62", color: "#FFF", fontSize: 13, fontWeight: "800", paddingHorizontal: 24, paddingVertical: 15, borderRadius: 13, overflow: "hidden" } });
