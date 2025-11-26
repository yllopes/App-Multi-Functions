// components/phrase.jsx
import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

const phrases = [
  "You are stronger than you think!",
  "Every day is a new opportunity.",
  "Keep pushing forward!",
  "Believe in yourself!",
  "Small steps lead to big changes.",
];

export default function MotivationalModal({ visible, onClose }) {
  const [phrase, setPhrase] = useState("");

  const generatePhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[randomIndex]);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalWindow}>
          <Text style={styles.phraseText}>
            {phrase || "Press the button for motivation!"}
          </Text>

          <TouchableOpacity style={styles.button} onPress={generatePhrase}>
            <Text style={styles.buttonText}>Get Phrase</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalWindow: {
    backgroundColor: "#f5f5f5",
    borderRadius: 24,
    padding: 24,
    width: "80%",
    alignItems: "center",
  },
  phraseText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4f7cff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#e63946",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  closeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
