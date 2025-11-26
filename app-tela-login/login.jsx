import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import App from "./App";

export default function LoginWithRegister() {
  const [logged, setLogged] = useState(false);
  const [registerMode, setRegisterMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem("logged");
      if (user) setLogged(true);
    };
    checkLogin();
  }, []);

  const registerUser = async () => {
    if (!username || !password) {
      Alert.alert("Warning", "Fill in username and password");
      return;
    }

    const savedUsers = await AsyncStorage.getItem("users");
    const list = savedUsers ? JSON.parse(savedUsers) : [];

    if (list.find((u) => u.username === username)) {
      Alert.alert("Error", "User already exists");
      return;
    }

    const newUser = [...list, { username, password }];
    await AsyncStorage.setItem("users", JSON.stringify(newUser));

    Alert.alert("Success", "User registered successfully");
    setRegisterMode(false);
    setUsername("");
    setPassword("");
  };

  const login = async () => {
    const savedUsers = await AsyncStorage.getItem("users");
    const list = savedUsers ? JSON.parse(savedUsers) : [];

    const found = list.find(
      (u) => u.username === username && u.password === password
    );

    if (!found) {
      Alert.alert("Error", "Incorrect username or password");
      return;
    }

    await AsyncStorage.setItem("logged", username);
    setLogged(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("logged");
    setLogged(false);
    setUsername("");
    setPassword("");
  };

  if (!logged) {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>
            {registerMode ? "Create Account" : "Login"}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#777"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#777"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {!registerMode && (
            <TouchableOpacity style={styles.buttonPrimary} onPress={login}>
              <Text style={styles.buttonPrimaryText}>Login</Text>
            </TouchableOpacity>
          )}

          {registerMode && (
            <TouchableOpacity style={styles.buttonSuccess} onPress={registerUser}>
              <Text style={styles.buttonSuccessText}>Register</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => setRegisterMode(!registerMode)}
          >
            <Text style={styles.switchButtonText}>
              {registerMode ? "Already have an account? Login" : "Create new account"}
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.loggedContainer}>
      <App />
      <TouchableOpacity style={styles.buttonLogout} onPress={logout}>
        <Text style={styles.buttonLogoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  content: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 20,
    color: "#232946",
  },
  input: {
    width: "90%",
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    fontSize: 16,
    color: "#222",
  },
  buttonPrimary: {
    width: "90%",
    backgroundColor: "#007BFF",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonPrimaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonSuccess: {
    width: "90%",
    backgroundColor: "#28A745",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonSuccessText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  switchButton: {
    marginTop: 14,
    padding: 8,
  },
  switchButtonText: {
    color: "#007BFF",
    fontSize: 14,
    fontWeight: "600",
  },
  loggedContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#FFFFFF",
  },
  buttonLogout: {
    padding: 14,
    backgroundColor: "#D9534F",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonLogoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },
});
