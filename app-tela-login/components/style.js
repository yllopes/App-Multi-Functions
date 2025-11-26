import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", 
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },

  label: {
    alignSelf: "flex-start",
    color: "#cbd5e1",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },

  picker: {
    width: "100%",
    backgroundColor: "#1e293b",
    color: "#fff",
    borderRadius: 10,
    marginBottom: 12,
  },

  input: {
    width: "100%",
    backgroundColor: "#1e293b",
    padding: 12,
    borderRadius: 10,
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#ffff",
    padding: 14,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },

  botaoTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
  },

  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
