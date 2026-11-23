import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

const threads = [
  { id: "1", name: "Havenly Property Team", message: "Hello! How can we help with this property?", time: "Demo", initials: "H" },
  { id: "2", name: "Property viewing enquiries", message: "Your inspection request can be managed here.", time: "Demo", initials: "P" }
];
export default function MessagesScreen() {
  return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
    <Text style={styles.title}>Messages</Text><Text style={styles.subtitle}>Keep your property conversations together.</Text>
    {threads.map(t => <Pressable key={t.id} style={styles.thread} onPress={() => router.push("/login")}>
      <View style={styles.avatar}><Text style={styles.initials}>{t.initials}</Text></View><View style={{ flex: 1 }}><Text style={styles.name}>{t.name}</Text><Text style={styles.message}>{t.message}</Text></View><Text style={styles.time}>{t.time}</Text>
    </Pressable>)}
    <View style={styles.notice}><Ionicons name="information-circle-outline" size={20} color="#167D62" /><Text style={styles.noticeText}>Messaging screens are ready for integration. Real-time delivery needs a backend and signed-in accounts.</Text></View>
  </ScrollView>;
}
const styles = StyleSheet.create({ page: { flex: 1, backgroundColor: "#F6F8F7" }, content: { padding: 20, paddingBottom: 30 }, title: { fontSize: 29, color: "#202B26", fontWeight: "800", marginTop: 12 }, subtitle: { color: "#78877F", marginTop: 6, fontSize: 13, marginBottom: 22 }, thread: { backgroundColor: "#FFF", borderRadius: 17, padding: 14, marginBottom: 11, borderWidth: 1, borderColor: "#E6ECE8", flexDirection: "row", alignItems: "center", gap: 12 }, avatar: { width: 48, height: 48, borderRadius: 17, backgroundColor: "#E1F1E9", alignItems: "center", justifyContent: "center" }, initials: { color: "#167D62", fontWeight: "800", fontSize: 17 }, name: { color: "#26332D", fontSize: 12, fontWeight: "800" }, message: { color: "#78877F", fontSize: 11, marginTop: 5 }, time: { color: "#9AA49E", fontSize: 10 }, notice: { marginTop: 14, backgroundColor: "#E3F2EB", borderRadius: 14, padding: 14, flexDirection: "row", gap: 9, alignItems: "flex-start" }, noticeText: { color: "#416154", fontSize: 11, lineHeight: 18, flex: 1 } });
