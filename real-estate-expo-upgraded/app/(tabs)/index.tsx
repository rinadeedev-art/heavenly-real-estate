import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../data/properties";
import { useFavorites } from "../../context/FavoritesContext";

const categories = ["All", "House", "Apartment", "Land"];
export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [purpose, setPurpose] = useState<"All" | "Buy" | "Rent">("All");
  const { favoriteIds, toggleFavorite } = useFavorites();
  const featured = useMemo(() => properties.filter(p =>
    (category === "All" || p.type === category) &&
    (purpose === "All" || p.purpose === purpose) &&
    `${p.title} ${p.location}`.toLowerCase().includes(query.toLowerCase())
  ), [query, category, purpose]);
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.topbar}>
        <View style={styles.brandIcon}><Ionicons name="home" color="#FFF" size={21} /></View>
        <View style={{ flex: 1 }}><Text style={styles.brand}>Havenly</Text><Text style={styles.brandSub}>FIND YOUR PLACE</Text></View>
        <Pressable style={styles.bell} onPress={() => router.push("/messages")}><Ionicons name="chatbubble-ellipses-outline" size={21} color="#26332D" /></Pressable>
      </View>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>YOUR NEXT CHAPTER STARTS HERE</Text>
        <Text style={styles.heroTitle}>Find a place{"\n"}to call <Text style={styles.heroAccent}>home.</Text></Text>
        <Text style={styles.heroText}>Discover homes and spaces you'll love living in.</Text>
        <View style={styles.search}>
          <Ionicons name="search-outline" size={20} color="#738078" />
          <TextInput value={query} onChangeText={setQuery} placeholder="Location, property name..." placeholderTextColor="#97A29C" style={styles.searchInput} returnKeyType="search" />
          <Pressable style={styles.filterButton} onPress={() => router.push("/explore")}><Ionicons name="options-outline" size={19} color="#FFF" /></Pressable>
        </View>
        <View style={styles.heroPills}><Text style={styles.heroPillText}>✓  Verified listings</Text><Text style={styles.heroPillText}>✓  Local expertise</Text></View>
      </View>
      <View style={styles.sectionHead}><View><Text style={styles.sectionTitle}>What are you looking for?</Text><Text style={styles.sectionHint}>Choose your property goal</Text></View></View>
      <View style={styles.purposeRow}>
        {(["All", "Buy", "Rent"] as const).map(item => <Pressable key={item} onPress={() => setPurpose(item)} style={[styles.purpose, purpose === item && styles.purposeActive]}><Text style={[styles.purposeText, purpose === item && styles.purposeTextActive]}>{item === "All" ? "All listings" : item === "Buy" ? "Buy a home" : "Rent a home"}</Text></Pressable>)}
      </View>
      <View style={styles.sectionHead}><Text style={styles.sectionTitle}>Property type</Text><Text style={styles.sectionHint}>Explore your options</Text></View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
        {categories.map((item) => <Pressable key={item} onPress={() => setCategory(item)} style={[styles.category, category === item && styles.categoryActive]}>
          <Ionicons name={item === "All" ? "grid-outline" : item === "House" ? "home-outline" : item === "Apartment" ? "business-outline" : "map-outline"} size={17} color={category === item ? "#FFF" : "#627168"} />
          <Text style={[styles.categoryText, category === item && styles.categoryTextActive]}>{item}</Text>
        </Pressable>)}
      </ScrollView>
      <View style={styles.sectionHead}><View><Text style={styles.sectionTitle}>Featured properties</Text><Text style={styles.sectionHint}>Handpicked homes for you</Text></View><Pressable onPress={() => router.push("/explore")}><Text style={styles.seeAll}>See all  ↗</Text></Pressable></View>
      {featured.length ? <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.featured}>
        {featured.map(p => <PropertyCard key={p.id} property={p} compact saved={favoriteIds.includes(p.id)} onToggleSaved={() => toggleFavorite(p.id)} onPress={() => router.push(`/property/${p.id}`)} />)}
      </ScrollView> : <Text style={styles.empty}>No properties match your search.</Text>}
      <View style={styles.banner}>
        <View style={{ flex: 1 }}><Text style={styles.bannerKicker}>OWN A PROPERTY?</Text><Text style={styles.bannerTitle}>List your property and connect with people looking for a home.</Text><Pressable onPress={() => router.push("/sell")} style={styles.bannerButton}><Text style={styles.bannerButtonText}>List a property</Text><Ionicons name="arrow-forward" size={15} color="#167D62" /></Pressable></View>
        <Ionicons name="key-outline" size={52} color="#A7D8C4" />
      </View>
      <View style={styles.quickLinks}><Pressable onPress={() => router.push("/inspections")} style={styles.quickLink}><Ionicons name="calendar-outline" size={20} color="#167D62" /><Text style={styles.quickText}>My inspections</Text></Pressable><Pressable onPress={() => router.push("/agent")} style={styles.quickLink}><Ionicons name="briefcase-outline" size={20} color="#167D62" /><Text style={styles.quickText}>Agent dashboard</Text></Pressable></View>
      <Text style={styles.footer}>Havenly · Find somewhere you belong.</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#F6F8F7" }, content: { paddingBottom: 28 },
  topbar: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 18, flexDirection: "row", alignItems: "center", gap: 11 },
  brandIcon: { width: 42, height: 42, borderRadius: 14, backgroundColor: "#167D62", alignItems: "center", justifyContent: "center" },
  brand: { color: "#203129", fontSize: 20, fontWeight: "800", letterSpacing: -0.5 }, brandSub: { color: "#829088", fontSize: 8, letterSpacing: 2, marginTop: 1, fontWeight: "700" },
  bell: { height: 42, width: 42, borderRadius: 14, backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#E8EEEB" },
  hero: { marginHorizontal: 16, padding: 23, borderRadius: 26, backgroundColor: "#173E32", overflow: "hidden" },
  eyebrow: { color: "#A8DCC7", fontSize: 9, letterSpacing: 1.5, fontWeight: "800", marginBottom: 12 },
  heroTitle: { color: "#FFF", fontSize: 35, lineHeight: 39, letterSpacing: -1.3, fontWeight: "800" }, heroAccent: { color: "#A8DCC7" },
  heroText: { color: "#D0E0D8", fontSize: 13, lineHeight: 20, marginTop: 11, marginBottom: 20 },
  search: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", borderRadius: 15, paddingLeft: 13, paddingRight: 6, height: 54, gap: 8 },
  searchInput: { flex: 1, fontSize: 12, color: "#24332B" },
  filterButton: { width: 42, height: 42, borderRadius: 12, backgroundColor: "#167D62", alignItems: "center", justifyContent: "center" },
  heroPills: { flexDirection: "row", gap: 17, marginTop: 15 }, heroPillText: { color: "#D5E6DE", fontSize: 10, fontWeight: "600" },
  sectionHead: { paddingHorizontal: 20, marginTop: 25, marginBottom: 13 }, sectionTitle: { color: "#202B26", fontSize: 18, fontWeight: "800", letterSpacing: -0.4 }, sectionHint: { color: "#849088", fontSize: 11, marginTop: 4 },
  purposeRow: { flexDirection: "row", paddingHorizontal: 20, gap: 9 }, purpose: { flex: 1, backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E6ECE8", borderRadius: 12, paddingVertical: 12, alignItems: "center" }, purposeActive: { backgroundColor: "#E1F1E9", borderColor: "#167D62" }, purposeText: { color: "#627168", fontSize: 11, fontWeight: "700" }, purposeTextActive: { color: "#167D62" },
  categories: { paddingHorizontal: 20, gap: 9 }, category: { flexDirection: "row", alignItems: "center", gap: 7, paddingHorizontal: 15, paddingVertical: 12, borderRadius: 13, backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E6ECE8" },
  categoryActive: { backgroundColor: "#167D62", borderColor: "#167D62" }, categoryText: { color: "#627168", fontSize: 12, fontWeight: "700" }, categoryTextActive: { color: "#FFF" },
  seeAll: { color: "#167D62", fontWeight: "700", fontSize: 12 }, featured: { paddingHorizontal: 16, paddingBottom: 2 }, empty: { paddingHorizontal: 20, color: "#718078" },
  banner: { marginHorizontal: 16, marginTop: 25, borderRadius: 22, backgroundColor: "#E3F2EB", padding: 20, flexDirection: "row", alignItems: "center", gap: 12 },
  bannerKicker: { color: "#167D62", fontSize: 9, fontWeight: "800", letterSpacing: 1.3 }, bannerTitle: { color: "#203129", fontSize: 16, lineHeight: 22, fontWeight: "800", marginTop: 7, maxWidth: 260 },
  bannerButton: { flexDirection: "row", alignItems: "center", gap: 7, alignSelf: "flex-start", marginTop: 13, backgroundColor: "#FFF", paddingHorizontal: 13, paddingVertical: 10, borderRadius: 10 },
  bannerButtonText: { color: "#167D62", fontWeight: "800", fontSize: 11 }, quickLinks: { flexDirection: "row", gap: 10, marginHorizontal: 16, marginTop: 12 }, quickLink: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8, padding: 14, borderRadius: 14, backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E6ECE8" }, quickText: { color: "#33433B", fontSize: 11, fontWeight: "700" }, footer: { textAlign: "center", marginTop: 25, color: "#A1AAA5", fontSize: 10 }
});
