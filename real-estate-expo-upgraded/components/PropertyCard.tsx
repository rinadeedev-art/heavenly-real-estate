import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Property } from "../data/properties";

export default function PropertyCard({ property, onPress, saved, onToggleSaved, compact = false }: {
  property: Property; onPress: () => void; saved?: boolean; onToggleSaved?: () => void; compact?: boolean;
}) {
  return (
    <Pressable style={[styles.card, compact && styles.compact]} onPress={onPress}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: property.image }} style={styles.image} contentFit="cover" transition={250} />
        <View style={styles.tag}><Text style={styles.tagText}>{property.purpose} · {property.type}</Text></View>
        {onToggleSaved && <Pressable onPress={(e) => { e.stopPropagation(); onToggleSaved(); }} style={styles.heart}>
          <Ionicons name={saved ? "heart" : "heart-outline"} size={20} color={saved ? "#E45252" : "#25332D"} />
        </Pressable>}
      </View>
      <View style={styles.info}>
        <Text style={styles.price}>{property.price}</Text>
        <Text style={styles.title} numberOfLines={1}>{property.title}</Text>
        <View style={styles.locationRow}><Ionicons name="location-outline" size={14} color="#718078" /><Text style={styles.location} numberOfLines={1}>{property.location}</Text></View>
        <View style={styles.divider} />
        <View style={styles.meta}>
          <Text style={styles.metaText}>🛏 {property.beds} beds</Text>
          <Text style={styles.metaText}>♨ {property.baths} baths</Text>
          <Text style={styles.metaText}>↔ {property.area}</Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: "#FFF", borderRadius: 20, overflow: "hidden", borderWidth: 1, borderColor: "#E9EFEC", marginBottom: 16 },
  compact: { width: 285, marginRight: 14, marginBottom: 0 },
  imageWrap: { height: 180, position: "relative" },
  image: { width: "100%", height: "100%", backgroundColor: "#DDE7E2" },
  tag: { position: "absolute", top: 12, left: 12, backgroundColor: "rgba(255,255,255,0.94)", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6 },
  tagText: { color: "#167D62", fontSize: 10, fontWeight: "700" },
  heart: { position: "absolute", top: 10, right: 10, width: 38, height: 38, borderRadius: 19, backgroundColor: "#FFFFFFF0", alignItems: "center", justifyContent: "center" },
  info: { padding: 15 }, price: { fontSize: 17, fontWeight: "800", color: "#167D62", marginBottom: 6 },
  title: { fontSize: 16, fontWeight: "700", color: "#202B26", marginBottom: 5 },
  locationRow: { flexDirection: "row", alignItems: "center", gap: 3 }, location: { fontSize: 12, color: "#718078", flex: 1 },
  divider: { height: 1, backgroundColor: "#EDF1EF", marginVertical: 12 },
  meta: { flexDirection: "row", justifyContent: "space-between", gap: 8 }, metaText: { color: "#66736C", fontSize: 11 }
});
