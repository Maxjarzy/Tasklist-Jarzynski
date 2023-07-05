import { 
  StyleSheet, 
  TextInput,
  Text, 
  TouchableOpacity, 
  View, 
  Modal, 
  Pressable 
} from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";

const Mainscreen = ({tasklist}) => {

  const [list, setList] = useState(tasklist)
  const [input, setInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false);


  const onAddTask = () => {
    setList([
        ...list,
        {
            id: list.length + 1,
            task: input,
            completed : false
        }
    ])
    setInput("")
  }

  const renderItemTask = ({item}) => {
    return (
          <View style = {styles.task} key = {item.id}>
              <Text style = {styles.taskText}>{item.task}</Text>
          </View>
    )
  }

  return (
    <View style={styles.container}>
        <View style = {styles.view1}>
            <TextInput 
                placeholder="Nueva tarea"
                placeholderTextColor={'grey'}
                style = {styles.input}
                value={input}
                onChangeText={setInput}
            />
            <TouchableOpacity
                style = {styles.addButton}
                onPress={onAddTask}
            >
                <Text style = {styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.view2}>
            <FlatList
              data={list}
              keyExtractor={item => item.id}
              renderItem={renderItemTask}
              showsVerticalScrollIndicator={false}
            />
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
          </View>
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                      <Text style={styles.modalText}>Hello World!</Text>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                      </Pressable>
                  </View>
              </View>
          </Modal>
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
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
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
    width: 200,
    borderBottomColor: 'gray',
    borderBottomWidth: 3,
    marginBottom: 8,
    color: 'azure',
  },
  addButton: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    width: 80,
    height: 30,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign:'center',
  },
  task: {
    width: 250,
    backgroundColor: 'lime',
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  taskText:{
    textAlign: 'center',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'black',
    fontWeight: 400,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
