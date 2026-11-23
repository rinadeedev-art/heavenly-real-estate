import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import { properties } from "../data/properties";

export default function InspectionsScreen() {
  const params = useLocalSearchParams<{ propertyId?: string }>();
  const selected = properties.find(p => p.id === params.propertyId);
  const [propertyName, setPropertyName] = useState(selected?.title ?? "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const submit = () => {
    if (!propertyName.trim() || !date.trim() || !name.trim() || !phone.trim()) {
      Alert.alert("Complete the form", "Property, preferred date, your name, and phone number are required.");
      return;
    }
    Alert.alert("Request prepared", "Your inspection request has been validated. Connect a backend to send it to the agent and track confirmation.", [{ text: "OK", onPress: () => router.back() }]);
  };
  return <ScrollView style={styles.page} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
    <Pressable style={styles.back} onPress={() => router.back()}><Ionicons name="arrow-back" size={20} color="#26332D" /><Text style={styles.backText}>Back</Text></Pressable>
    <Text style={styles.kicker}>TAKE A CLOSER LOOK</Text><Text style={styles.title}>Book an inspection</Text><Text style={styles.subtitle}>Choose a convenient time to visit the property.</Text>
    <View style={styles.notice}><Ionicons name="calendar-outline" size={21} color="#167D62" /><Text style={styles.noticeText}>This form collects a request only. An agent must confirm the appointment.</Text></View>
    <Text style={styles.label}>Property *</Text><TextInput style={styles.input} value={propertyName} onChangeText={setPropertyName} placeholder="Property name or listing ID" placeholderTextColor="#9AA49E" />
    <Text style={styles.label}>Preferred date * (e.g. 2026-11-05)</Text><TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="YYYY-MM-DD" placeholderTextColor="#9AA49E" />
    <Text style={styles.label}>Preferred time</Text><View style={styles.row}>{["10:00 AM", "1:00 PM", "4:00 PM"].map(t => <Pressable key={t} onPress={() => setTime(t)} style={[styles.option, time === t && styles.optionActive]}><Text style={[styles.optionText, time === t && styles.optionTextActive]}>{t}</Text></Pressable>)}</View>
    <Text style={styles.label}>Your full name *</Text><TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter your name" placeholderTextColor="#9AA49E" />
    <Text style={styles.label}>Phone number *</Text><TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholder="+234..." placeholderTextColor="#9AA49E" />
    <Text style={styles.label}>Additional notes</Text><TextInput style={[styles.input, styles.multiline]} value={notes} onChangeText={setNotes} multiline placeholder="Any questions or access requirements?" placeholderTextColor="#9AA49E" />
    <Pressable style={styles.submit} onPress={submit}><Text style={styles.submitText}>Request inspection</Text><Ionicons name="arrow-forward" size={17} color="#FFF" /></Pressable>
  </ScrollView>;
}
const styles = StyleSheet.create({ page: { flex: 1, backgroundColor: "#F6F8F7" }, content: { padding: 20, paddingBottom: 40 }, back: { flexDirection: "row", gap: 8, alignItems: "center", marginTop: 8 }, backText: { color: "#526158", fontWeight: "700", fontSize: 12 }, kicker: { color: "#167D62", fontSize: 9, fontWeight: "800", letterSpacing: 1.4, marginTop: 25 }, title: { fontSize: 29, fontWeight: "800", color: "#202B26", marginTop: 8 }, subtitle: { color: "#78877F", fontSize: 13, lineHeight: 20, marginTop: 7, marginBottom: 18 }, notice: { flexDirection: "row", gap: 9, backgroundColor: "#E3F2EB", padding: 13, borderRadius: 13, marginBottom: 12, alignItems: "center" }, noticeText: { color: "#416154", fontSize: 11, lineHeight: 17, flex: 1 }, label: { color: "#34443B", fontSize: 12, fontWeight: "800", marginTop: 16, marginBottom: 8 }, input: { backgroundColor: "#FFF", borderColor: "#E3EAE6", borderWidth: 1, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 14, fontSize: 12, color: "#26332D" }, multiline: { minHeight: 90, textAlignVertical: "top" }, row: { flexDirection: "row", gap: 8 }, option: { flex: 1, alignItems: "center", paddingVertical: 12, paddingHorizontal: 6, backgroundColor: "#FFF", borderColor: "#E3EAE6", borderWidth: 1, borderRadius: 10 }, optionActive: { backgroundColor: "#E1F1E9", borderColor: "#167D62" }, optionText: { color: "#627168", fontSize: 10, fontWeight: "700" }, optionTextActive: { color: "#167D62" }, submit: { marginTop: 22, backgroundColor: "#167D62", padding: 16, borderRadius: 13, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 10 }, submitText: { color: "#FFF", fontWeight: "800", fontSize: 12 } });
