import { useMemo, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";
import { useFavorites } from "../../context/FavoritesContext";

export default function ExploreScreen() {
  const [query, setQuery] = useState("");
  const [purpose, setPurpose] = useState("All");
  const [type, setType] = useState("All");
  const { favoriteIds, toggleFavorite } = useFavorites();
  const filtered = useMemo(() => properties.filter(p =>
    `${p.title} ${p.location} ${p.type}`.toLowerCase().includes(query.toLowerCase()) &&
    (purpose === "All" || p.purpose === purpose) &&
    (type === "All" || p.type === type)
  ), [query, purpose, type]);
  return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
    <Text style={styles.kicker}>DISCOVER YOUR NEXT ADDRESS</Text><Text style={styles.title}>Explore properties</Text><Text style={styles.subtitle}>Browse a curated collection of homes and spaces.</Text>
    <View style={styles.search}><Ionicons name="search-outline" size={19} color="#78877F" /><TextInput value={query} onChangeText={setQuery} placeholder="Search by name, area, or type" style={styles.input} placeholderTextColor="#9BA59F" /></View>
    <Text style={styles.filterLabel}>Listing purpose</Text><View style={styles.chips}>{["All", "Buy", "Rent"].map(x => <Pressable key={x} onPress={() => setPurpose(x)} style={[styles.chip, purpose === x && styles.chipActive]}><Text style={[styles.chipText, purpose === x && styles.chipTextActive]}>{x}</Text></Pressable>)}</View>
    <Text style={styles.filterLabel}>Property type</Text><View style={styles.chips}>{["All", "House", "Apartment", "Land"].map(x => <Pressable key={x} onPress={() => setType(x)} style={[styles.chip, type === x && styles.chipActive]}><Text style={[styles.chipText, type === x && styles.chipTextActive]}>{x}</Text></Pressable>)}</View>
    <Text style={styles.count}>{filtered.length} properties found</Text>
    {filtered.map(p => <PropertyCard key={p.id} property={p} saved={favoriteIds.includes(p.id)} onToggleSaved={() => toggleFavorite(p.id)} onPress={() => router.push(`/property/${p.id}`)} />)}
    {!filtered.length && <Text style={styles.empty}>No properties found. Try another search.</Text>}
  </ScrollView>;
}
const styles = StyleSheet.create({ page: { flex: 1, backgroundColor: "#F6F8F7" }, content: { padding: 20, paddingBottom: 30 }, kicker: { color: "#167D62", fontSize: 9, fontWeight: "800", letterSpacing: 1.4, marginTop: 12 }, title: { fontSize: 29, fontWeight: "800", color: "#202B26", marginTop: 8 }, subtitle: { color: "#78877F", fontSize: 13, lineHeight: 20, marginTop: 7, marginBottom: 20 }, search: { height: 52, backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E6ECE8", borderRadius: 14, flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 14 }, input: { flex: 1, color: "#26332D", fontSize: 12 }, filterLabel: { color: "#4F6057", fontWeight: "800", fontSize: 11, marginTop: 18, marginBottom: 9 }, chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, chip: { paddingVertical: 9, paddingHorizontal: 13, backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E6ECE8", borderRadius: 10 }, chipActive: { backgroundColor: "#167D62", borderColor: "#167D62" }, chipText: { color: "#627168", fontSize: 11, fontWeight: "700" }, chipTextActive: { color: "#FFF" }, count: { color: "#718078", fontSize: 12, fontWeight: "600", marginVertical: 17 }, empty: { color: "#718078", textAlign: "center", padding: 25 } });
