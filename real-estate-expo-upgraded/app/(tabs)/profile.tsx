import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

const rows = [
  { icon: "person-outline" as const, title: "Sign in or create account", sub: "Connect your profile", route: "/login" },
  { icon: "add-circle-outline" as const, title: "List a property", sub: "Publish a listing", route: "/sell" },
  { icon: "briefcase-outline" as const, title: "Agent dashboard", sub: "Manage enquiries and listings", route: "/agent" },
  { icon: "calendar-outline" as const, title: "Property inspections", sub: "View or request a visit", route: "/inspections" },
  { icon: "shield-checkmark-outline" as const, title: "Safety & verification", sub: "Tips for safer property search", route: "/agent" }
];
export default function ProfileScreen() {
  return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
    <Text style={styles.title}>My profile</Text><Text style={styles.subtitle}>Make your home search feel personal.</Text>
    <View style={styles.profileCard}><View style={styles.avatar}><Ionicons name="person" size={30} color="#167D62" /></View><Text style={styles.name}>Welcome to Havenly</Text><Text style={styles.email}>Sign in to connect your account</Text><View style={styles.badge}><Text style={styles.badgeText}>GUEST MODE</Text></View></View>
    <Text style={styles.section}>ACCOUNT & SERVICES</Text>
    <View style={styles.list}>{rows.map(row => <Pressable key={row.title} style={styles.row} onPress={() => router.push(row.route as any)}><View style={styles.rowIcon}><Ionicons name={row.icon} size={20} color="#167D62" /></View><View style={{ flex: 1 }}><Text style={styles.rowTitle}>{row.title}</Text><Text style={styles.rowSub}>{row.sub}</Text></View><Ionicons name="chevron-forward" size={18} color="#A0AAA4" /></Pressable>)}</View>
    <Text style={styles.footer}>Havenly Real Estate · Version 2.0.0</Text>
  </ScrollView>;
}
const styles = StyleSheet.create({ page: { flex: 1, backgroundColor: "#F6F8F7" }, content: { padding: 20, paddingBottom: 30 }, title: { fontSize: 29, color: "#202B26", fontWeight: "800", marginTop: 12 }, subtitle: { color: "#78877F", marginTop: 6, fontSize: 13 }, profileCard: { backgroundColor: "#FFF", borderRadius: 22, alignItems: "center", padding: 24, marginTop: 24, borderWidth: 1, borderColor: "#E6ECE8" }, avatar: { width: 66, height: 66, borderRadius: 23, backgroundColor: "#E1F1E9", alignItems: "center", justifyContent: "center" }, name: { color: "#26332D", fontSize: 17, fontWeight: "800", marginTop: 12 }, email: { color: "#849088", fontSize: 11, marginTop: 5 }, badge: { backgroundColor: "#F0F7F3", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 7, marginTop: 13 }, badgeText: { color: "#167D62", fontSize: 9, fontWeight: "800", letterSpacing: 1 }, section: { color: "#849088", fontSize: 10, letterSpacing: 1.4, fontWeight: "800", marginTop: 27, marginBottom: 12 }, list: { backgroundColor: "#FFF", borderRadius: 19, borderWidth: 1, borderColor: "#E6ECE8", paddingHorizontal: 15 }, row: { flexDirection: "row", alignItems: "center", paddingVertical: 16, gap: 12, borderBottomWidth: 1, borderBottomColor: "#F0F3F1" }, rowIcon: { width: 40, height: 40, borderRadius: 13, backgroundColor: "#EFF7F3", alignItems: "center", justifyContent: "center" }, rowTitle: { color: "#26332D", fontWeight: "700", fontSize: 12 }, rowSub: { color: "#8A9690", fontSize: 10, marginTop: 4 }, footer: { textAlign: "center", color: "#A3ACA7", fontSize: 10, marginTop: 25 } });
