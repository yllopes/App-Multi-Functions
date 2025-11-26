import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./style";

export default function WeatherConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("kelvin");

  function convertTemperature() {
    const value = parseFloat(input);
    if (isNaN(value)) {
      setOutput("Invalid number");
      return;
    }

    let base;
    switch (fromUnit) {
      case "celsius":
        base = value;
        break;
      case "kelvin":
        base = value - 273.15;
        break;
      case "fahrenheit":
        base = (value - 32) * 5 / 9;
        break;
    }

    let finalValue;
    switch (toUnit) {
      case "celsius":
        finalValue = base;
        break;
      case "kelvin":
        finalValue = base + 273.15;
        break;
      case "fahrenheit":
        finalValue = base * 9 / 5 + 32;
        break;
    }

    setOutput(finalValue.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Weather Converter</Text>

      <Text style={styles.label}>From:</Text>
      <Picker
        selectedValue={fromUnit}
        onValueChange={setFromUnit}
        style={styles.picker}
      >
        <Picker.Item label="Celsius" value="celsius" />
        <Picker.Item label="Kelvin" value="kelvin" />
        <Picker.Item label="Fahrenheit" value="fahrenheit" />
      </Picker>

      <Text style={styles.label}>To:</Text>
      <Picker
        selectedValue={toUnit}
        onValueChange={setToUnit}
        style={styles.picker}
      >
        <Picker.Item label="Celsius" value="celsius" />
        <Picker.Item label="Kelvin" value="kelvin" />
        <Picker.Item label="Fahrenheit" value="fahrenheit" />
      </Picker>

      <TextInput
        placeholder="Temperature"
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />

      <TouchableOpacity style={styles.botao} onPress={convertTemperature}>
        <Text style={styles.botaoTexto}>Convert</Text>
      </TouchableOpacity>

      {output && (
        <Text style={styles.resultado}>Converted value: {output}</Text>
      )}
    </View>
  );
}
