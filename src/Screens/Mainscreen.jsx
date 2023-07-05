import { Button, StyleSheet, TextInput,Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Mainscreen = ({tasklist}) => {
  return (
    <View style={styles.container}>
        <View style = {styles.view1}>
            <TextInput style = {styles.input}/>
            <TouchableOpacity
                style = {styles.button}
            >
                <Text>Agregar tarea</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.view2}>
            {
                tasklist.map( item => 
                        <View style = {styles.task} key = {item.id}>
                            {<Text style = {styles.taskText}>{item.task}</Text>}
                        </View>
                    )
                }
        </View>
    </View>
  );
};

export default Mainscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
  },
  view1: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    width: '100%',
  },
  view2: {
    flex: 8,
    backgroundColor: "black",
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15
  },
  input: {
    width: 150,
    borderBottomColor: 'gray',
    borderBottomWidth: 3,
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 10,
    width: 150,
    backgroundColor: 'gray'
  },
  task: {
    width: '80%',
    backgroundColor: 'lime',
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  taskText:{
    textAlign: 'center',
    fontSize: 16,
  }
});
