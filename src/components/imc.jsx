import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/style";

export default function HealthIndex() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  function calculateIndex() {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (w > 0 && h > 0) {
      const res = w / (h * h);
      setResult(res.toFixed(2));
    } else {
      setResult("Invalid input");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tituloWhite}>Calculate IMC</Text>

      <TextInput
        placeholder="Weight (kg)"
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        placeholder="Height (meters)"
        style={styles.input}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <TouchableOpacity style={styles.botao} onPress={calculateIndex}>
        <Text style={styles.botaoTexto}>Calculate</Text>
      </TouchableOpacity>

      {result && (
        <Text style={styles.resultado}>Result: {result}</Text>
      )}
    </View>
  );
}
