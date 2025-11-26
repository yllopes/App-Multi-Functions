import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/style";

export default function About({ onClose }) {
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { padding: 12, backgroundColor: "#f8fafc", alignItems: "center" }
      ]}
    >
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: 14,
          borderRadius: 10,
          marginBottom: 12,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 3,
          shadowOffset: { width: 0, height: 2 },
          elevation: 2,
        }}
      >
        <Image
          source={require("../assets/eu.png")} // ajuste o caminho
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 10,
            borderWidth: 2,
            borderColor: "#4f7cff",
          }}
          resizeMode="cover"
        />
        <Text style={{ fontSize: 18, fontWeight: "900", color: "#1e293b", marginBottom: 4 }}>
          Ygor Lopes
        </Text>
        <Text style={{ color: "#475569", fontSize: 13, textAlign: "center", lineHeight: 18 }}>
          Developer & student focused on backend and mobile. Passionate about
          creating small apps, APIs, and learning new technologies every day.
        </Text>
      </View>

      <View style={localStyles.section}>
        <Text style={localStyles.sectionTitle}>Skills</Text>
        <Text style={localStyles.sectionText}>
          • Backend: PHP, Java, Python{'\n'}
          • Databases: SQLite, MySQL, MongoDB
        </Text>
      </View>

      <View style={localStyles.section}>
        <Text style={localStyles.sectionTitle}>Education</Text>
        <Text style={localStyles.sectionText}>
          Studying Development of Multiplatform Software. Additional training in
          Cyber Security and Python.
        </Text>
      </View>

      <View style={localStyles.section}>
        <Text style={localStyles.sectionTitle}>Contact</Text>
        <Text style={localStyles.sectionText}>Email: ygorlopesm@hotmail.com</Text>
      </View>

      {onClose && (
        <TouchableOpacity onPress={onClose} style={localStyles.closeButton}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>Voltar</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const localStyles = {
  section: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#1e293b", marginBottom: 4 },
  sectionText: { color: "#334155", lineHeight: 18 },
  closeButton: {
    backgroundColor: "#4f7cff",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
};