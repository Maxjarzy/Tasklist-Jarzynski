import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

const ModalTask = ({ modalVisible, setModalVisible, taskActive, onPressStatus }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{taskActive.task}</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.buttonDone]}
              onPress={() => onPressStatus(true)}
            >
              <Text style={styles.textStyle}>Hecho</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonNotYet]}
              onPress={() => onPressStatus(false)}
            >
              <Text style={styles.textStyle}>Pendiente</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalTask;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "black",
  },
  modalView: {
    width: "90%",
    height: "30%",
    margin: 20,
    backgroundColor: "#D3D1D1",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    columnGap: 8,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonDone: {
    backgroundColor: "#00CC14",
    flex: 1,
  },
  buttonNotYet: {
    backgroundColor: "#D8381C",
    flex: 1,
  },
  buttonCancel: {
    backgroundColor: "gray",
    flex: 1,
  },
  textStyle: {
    color: "black",
    fontWeight: 400,
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 26,
  },
});
