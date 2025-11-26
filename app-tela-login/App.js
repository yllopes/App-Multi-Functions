import { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import SaudeIndice from "./components/imc.jsx";
import ConversorClima from "./components/weather.jsx";
import ListaNotas from "./components/doList.jsx";
import { styles } from "./components/style.js";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const microApps = [
    { name: "IMC", component: SaudeIndice },
    { name: "Weather", component: ConversorClima },
    { name: "Notes", component: ListaNotas },
  ];

  const openMicroApp = (Component) => {
    setActiveComponent(() => Component);
    setModalVisible(true);
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
            onPress={() => openMicroApp(app.component)}
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
              <Text style={localStyles.closeText}>Close</Text>
            </TouchableOpacity>

            {ActiveComponent && <ActiveComponent />}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const localStyles = StyleSheet.create({
  cardsPanel: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 18,
    marginTop: 10,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#4f7cff", 
    borderRadius: 18,
    paddingVertical: 28,
    paddingHorizontal: 22,
    margin: 8,
    minWidth: 140,
    alignItems: "center",
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

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
    minWidth: "80%",
  },

  closeButton: {
    backgroundColor: "#e63946",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignSelf: "flex-end",
    marginBottom: 14,
  },
  closeText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});