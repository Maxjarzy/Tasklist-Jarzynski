import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const RenderItemTask = ({ item, onPressTask }) => {
  return (
    <Pressable onPress={() => onPressTask(item)}>
        <View style={
            item.completed ? 
            styles.taskCompleted : 
            styles.task} key={item.id}>
            <Text style={
              item.completed ? 
              styles.taskTextCompleted : 
              styles.taskText}>{item.task}</Text>
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
    fontSize: 20,
  },
  taskTextCompleted: {
    textAlign: "center",
    fontSize: 20,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  taskCompleted: {
    width: 250,
    backgroundColor: "#34dbeb",
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
  }
});
