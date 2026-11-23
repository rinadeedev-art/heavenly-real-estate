import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, Pressable, View } from "react-native";

export default function SellPropertyScreen() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("House");
  const [purpose, setPurpose] = useState("Buy");
  const [beds, setBeds] = useState("3");
  const [description, setDescription] = useState("");
  const submit = () => {
    if (!title.trim() || !location.trim() || !price.trim()) {
      Alert.alert("Missing details", "Please enter a property title, location, and price.");
      return;
    }
    Alert.alert("Demo listing submitted", "Your listing form is working. Connect Supabase or your API to save listings permanently and send them for review.", [{ text: "OK", onPress: () => router.back() }]);
  };
  return <ScrollView style={styles.page} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
    <Pressable onPress={() => router.back()} style={styles.back}><Ionicons name="arrow-back" size={20} color="#26332D" /><Text style={styles.backText}>Back</Text></Pressable>
    <Text style={styles.kicker}>FOR OWNERS & AGENTS</Text><Text style={styles.title}>List your property</Text><Text style={styles.subtitle}>Share the key details so people can discover your space.</Text>
    <View style={styles.notice}><Ionicons name="shield-checkmark-outline" size={20} color="#167D62" /><Text style={styles.noticeText}>Listings should be reviewed and ownership details verified before going live.</Text></View>
    <Text style={styles.label}>Listing title *</Text><TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="e.g. Spacious 3-bedroom apartment" placeholderTextColor="#9AA49E" />
    <Text style={styles.label}>Location *</Text><TextInput style={styles.input} value={location} onChangeText={setLocation} placeholder="e.g. Lekki Phase 1, Lagos" placeholderTextColor="#9AA49E" />
    <Text style={styles.label}>Price (₦) *</Text><TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" placeholder="e.g. 85000000" placeholderTextColor="#9AA49E" />
    <Text style={styles.label}>Listing purpose</Text><View style={styles.row}>{["Buy", "Rent"].map(x => <Pressable key={x} onPress={() => setPurpose(x)} style={[styles.option, purpose === x && styles.optionActive]}><Text style={[styles.optionText, purpose === x && styles.optionTextActive]}>{x === "Buy" ? "For sale" : "For rent"}</Text></Pressable>)}</View>
    <Text style={styles.label}>Property type</Text><View style={styles.row}>{["House", "Apartment", "Land"].map(x => <Pressable key={x} onPress={() => setType(x)} style={[styles.option, type === x && styles.optionActive]}><Text style={[styles.optionText, type === x && styles.optionTextActive]}>{x}</Text></Pressable>)}</View>
    <Text style={styles.label}>Bedrooms</Text><TextInput style={styles.input} value={beds} onChangeText={setBeds} keyboardType="number-pad" placeholder="3" placeholderTextColor="#9AA49E" />
    <Text style={styles.label}>Description</Text><TextInput style={[styles.input, styles.multiline]} value={description} onChangeText={setDescription} multiline placeholder="Describe the property, amenities, and nearby services..." placeholderTextColor="#9AA49E" />
    <Pressable style={styles.upload} onPress={() => Alert.alert("Photo upload", "Connect Expo Image Picker and cloud storage to upload listing photos.")}><Ionicons name="images-outline" size={22} color="#167D62" /><Text style={styles.uploadTitle}>Add property photos</Text><Text style={styles.uploadSub}>Photo upload connects to storage in the backend stage.</Text></Pressable>
    <Pressable style={styles.submit} onPress={submit}><Text style={styles.submitText}>Submit listing for review</Text><Ionicons name="arrow-forward" size={17} color="#FFF" /></Pressable>
    <Text style={styles.footer}>Demo form · Not yet saved to a live database</Text>
  </ScrollView>;
}
const styles = StyleSheet.create({ page: { flex: 1, backgroundColor: "#F6F8F7" }, content: { padding: 20, paddingBottom: 40 }, back: { flexDirection: "row", gap: 8, alignItems: "center", marginTop: 8 }, backText: { color: "#526158", fontWeight: "700", fontSize: 12 }, kicker: { color: "#167D62", fontSize: 9, fontWeight: "800", letterSpacing: 1.4, marginTop: 25 }, title: { fontSize: 29, fontWeight: "800", color: "#202B26", marginTop: 8 }, subtitle: { color: "#78877F", fontSize: 13, lineHeight: 20, marginTop: 7, marginBottom: 18 }, notice: { flexDirection: "row", gap: 9, backgroundColor: "#E3F2EB", padding: 13, borderRadius: 13, marginBottom: 12, alignItems: "center" }, noticeText: { color: "#416154", fontSize: 11, lineHeight: 17, flex: 1 }, label: { color: "#34443B", fontSize: 12, fontWeight: "800", marginTop: 16, marginBottom: 8 }, input: { backgroundColor: "#FFF", borderColor: "#E3EAE6", borderWidth: 1, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 14, fontSize: 12, color: "#26332D" }, multiline: { minHeight: 100, textAlignVertical: "top" }, row: { flexDirection: "row", gap: 9 }, option: { flex: 1, alignItems: "center", padding: 12, backgroundColor: "#FFF", borderColor: "#E3EAE6", borderWidth: 1, borderRadius: 11 }, optionActive: { backgroundColor: "#E1F1E9", borderColor: "#167D62" }, optionText: { color: "#627168", fontSize: 12, fontWeight: "700" }, optionTextActive: { color: "#167D62" }, upload: { alignItems: "center", borderStyle: "dashed", borderWidth: 1, borderColor: "#A9C9BA", backgroundColor: "#F0F7F3", borderRadius: 14, padding: 20, marginTop: 20 }, uploadTitle: { color: "#167D62", fontSize: 13, fontWeight: "800", marginTop: 8 }, uploadSub: { color: "#849088", fontSize: 10, marginTop: 5, textAlign: "center" }, submit: { marginTop: 20, backgroundColor: "#167D62", padding: 16, borderRadius: 13, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 10 }, submitText: { color: "#FFF", fontWeight: "800", fontSize: 12 }, footer: { color: "#9AA49E", fontSize: 10, textAlign: "center", marginTop: 16 } });
