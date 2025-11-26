import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";

export default function DoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (!task.trim()) return;
    setList([...list, { id: Date.now().toString(), name: task }]);
    setTask("");
  }

  function removeTask(id) {
    setList(list.filter(item => item.id !== id));
  }

  return (
    <View style={[styles.container, { backgroundColor: "#ffffff" }]}>
      
      <Text style={[styles.titulo, { color: "#000" }]}>To-Do List</Text>

      <TextInput
        style={[styles.input, { color: "#000", backgroundColor: "#e2e8f0" }]}
        placeholder="New task"
        placeholderTextColor="#555"
        value={task}
        onChangeText={setTask}
      />

      <TouchableOpacity style={styles.botao} onPress={addTask}>
        <Text style={styles.botaoTexto}>Add</Text>
      </TouchableOpacity>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ width: "100%", marginTop: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#e2e8f0",
              padding: 14,
              borderRadius: 10,
              marginBottom: 10,
            }}
            onPress={() => removeTask(item.id)}
          >
            <Text style={{ color: "#000", fontSize: 16 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
