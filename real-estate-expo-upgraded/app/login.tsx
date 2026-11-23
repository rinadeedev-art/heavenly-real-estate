import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, Pressable, View } from "react-native";

export default function LoginScreen() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const submit = () => {
    if (!email.trim() || !password.trim() || (mode === "register" && !fullName.trim())) {
      Alert.alert("Complete the form", "Please fill in all required fields.");
      return;
    }
    Alert.alert("Authentication not connected", "The form is ready for UI testing. Connect Supabase Auth or Firebase Authentication before using real accounts.");
  };
  return <ScrollView style={styles.page} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
    <Pressable style={styles.back} onPress={() => router.back()}><Ionicons name="arrow-back" size={20} color="#26332D" /><Text style={styles.backText}>Back</Text></Pressable>
    <View style={styles.logo}><Ionicons name="home" size={28} color="#FFF" /></View><Text style={styles.title}>{mode === "login" ? "Welcome back" : "Create your account"}</Text><Text style={styles.subtitle}>Sign in to keep your property journey organized.</Text>
    <View style={styles.switch}><Pressable onPress={() => setMode("login")} style={[styles.switchOption, mode === "login" && styles.switchActive]}><Text style={[styles.switchText, mode === "login" && styles.switchTextActive]}>Log in</Text></Pressable><Pressable onPress={() => setMode("register")} style={[styles.switchOption, mode === "register" && styles.switchActive]}><Text style={[styles.switchText, mode === "register" && styles.switchTextActive]}>Register</Text></Pressable></View>
    {mode === "register" && <><Text style={styles.label}>Full name</Text><TextInput style={styles.input} value={fullName} onChangeText={setFullName} placeholder="Your name" placeholderTextColor="#9AA49E" /></>}
    <Text style={styles.label}>Email address</Text><TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" placeholder="you@example.com" placeholderTextColor="#9AA49E" />
    <Text style={styles.label}>Password</Text><TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="Enter password" placeholderTextColor="#9AA49E" />
    <Pressable style={styles.submit} onPress={submit}><Text style={styles.submitText}>{mode === "login" ? "Log in" : "Create account"}</Text><Ionicons name="arrow-forward" size={17} color="#FFF" /></Pressable>
    <Text style={styles.note}>Demo interface only. No password is sent or stored. Configure a real authentication provider before launch.</Text>
  </ScrollView>;
}
const styles = StyleSheet.create({ page: { flex: 1, backgroundColor: "#F6F8F7" }, content: { padding: 22, paddingBottom: 40 }, back: { flexDirection: "row", gap: 8, alignItems: "center", marginTop: 8 }, backText: { color: "#526158", fontWeight: "700", fontSize: 12 }, logo: { width: 64, height: 64, borderRadius: 21, backgroundColor: "#167D62", alignItems: "center", justifyContent: "center", marginTop: 55 }, title: { color: "#202B26", fontSize: 28, fontWeight: "800", marginTop: 22 }, subtitle: { color: "#78877F", fontSize: 13, lineHeight: 20, marginTop: 7, marginBottom: 23 }, switch: { flexDirection: "row", padding: 4, borderRadius: 13, backgroundColor: "#E9EFEC", marginBottom: 12 }, switchOption: { flex: 1, padding: 12, borderRadius: 10, alignItems: "center" }, switchActive: { backgroundColor: "#FFF" }, switchText: { color: "#78877F", fontWeight: "700", fontSize: 12 }, switchTextActive: { color: "#167D62" }, label: { color: "#34443B", fontSize: 12, fontWeight: "800", marginTop: 16, marginBottom: 8 }, input: { backgroundColor: "#FFF", borderColor: "#E3EAE6", borderWidth: 1, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 14, fontSize: 12, color: "#26332D" }, submit: { marginTop: 24, backgroundColor: "#167D62", padding: 16, borderRadius: 13, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 10 }, submitText: { color: "#FFF", fontWeight: "800", fontSize: 12 }, note: { color: "#9AA49E", fontSize: 10, lineHeight: 17, marginTop: 17, textAlign: "center" } });
