import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const RenderItemTask = ({ item, onPressTask }) => {
  return (
    <Pressable onPress={() => onPressTask(item)}>
      <View style={styles.task} key={item.id}>
        <Text style={styles.taskText}>{item.task}</Text>
      </View>
    </Pressable>
  );
};

export default RenderItemTask;

const styles = StyleSheet.create({
  task: {
    width: 250,
    backgroundColor: "lime",
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  taskText: {
    textAlign: "center",
    fontSize: 16,
  },
});
