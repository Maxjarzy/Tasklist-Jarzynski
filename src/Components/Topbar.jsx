import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity
} from "react-native";
import React from "react";

const Topbar = ({
    input,
    setInput,
    onAddTask
}) => {
  return (
    <View style={styles.view1}>
      <TextInput
        placeholder="Nueva tarea"
        placeholderTextColor={"grey"}
        style={styles.input}
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={onAddTask}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "black",
    width: "100%",
  },
  input: {
    width: 200,
    borderBottomColor: "gray",
    borderBottomWidth: 3,
    marginBottom: 8,
    color: "azure",
  },
  addButton: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    width: 80,
    height: 30,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
  },
});
