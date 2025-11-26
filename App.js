import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import SaudeIndice from "./src/components/imc.jsx";
import ConversorClima from "./src/components/weather.jsx";
import ListaNotas from "./src/components/doList.jsx";
import About from "./src/components/about.jsx";
import MotivationalModal from "./src/components/phrase.jsx";
import { styles } from "./src/styles/style.js";


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const [motivationVisible, setMotivationVisible] = useState(false);

  const microApps = [
    { name: "IMC", component: SaudeIndice },
    { name: "Weather", component: ConversorClima },
    { name: "Notes", component: ListaNotas },
    { name: "Motivation", component: null },
    { name: "About", component: About },
  ];

  const openMicroApp = (Component, isMotivation) => {
    if (isMotivation) {
      setMotivationVisible(true);
    } else {
      setActiveComponent(() => Component);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setActiveComponent(null);
  };

  const ActiveComponent = activeComponent;

  return (
    <View style={[styles.container, { backgroundColor: "#ffffff" }]}>
      <Text style={styles.titulo}>My Apps</Text>

      <View style={localStyles.cardsPanel}>
        {microApps.map((app, index) => (
          <TouchableOpacity
            key={index}
            style={localStyles.card}
            onPress={() => openMicroApp(app.component, app.name === "Motivation")}
          >
            <Text style={localStyles.cardTitle}>{app.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={localStyles.modalBackground}>
          <View style={localStyles.modalWindow}>
            <TouchableOpacity
              style={localStyles.closeButton}
              onPress={closeModal}
            >
              <Text style={localStyles.closeText}>Voltar</Text>
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingVertical: 6 }}>
              {ActiveComponent && <ActiveComponent onClose={closeModal} />}
            </ScrollView>
          </View>
        </View>
      </Modal>

      <MotivationalModal
        visible={motivationVisible}
        onClose={() => setMotivationVisible(false)}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  cardsPanel: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#4f7cff",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 12,
    margin: 6,
    minWidth: 110,
    alignItems: "center",
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  modalWindow: {
    backgroundColor: "#f5f5f5",
    borderRadius: 18,
    padding: 12,
    minWidth: "65%",
    maxHeight: "90%",
  },
  closeButton: {
    backgroundColor: "#e63946",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  closeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
