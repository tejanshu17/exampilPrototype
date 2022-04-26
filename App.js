/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect, useState} from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image, ImageBackground } from "react-native";

const App = () =>
{
  const [modalVisible, setModalVisible] = React.useState(false);

  useEffect(()=>{
    const checkForSubscription = setTimeout(() => {
      setModalVisible(() => !modalVisible);
    }, 10);
    return () => clearTimeout(checkForSubscription);

  },[])
  return(
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        nRequestClose={()=> setModalVisible(!modalVisible)}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageBackground style={styles.img} 
             source={require("../exampilPrototype/assets/banner.jpg")}/>
          {/* </View> */}
          </View>
        </View>
      </Modal>
      </View>

  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#ffe5b4"
  },
  modalView: {
    backgroundColor: "#ffe91e63",
    borderRadius: 20,
    padding: 22,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, 
    width:'90%',
    height: '60%',
    left: "0%",
    top:"1%",
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  img:{
    width:'103%',
    height: '102%',  
    bottom: '1%',
    borderRadius: 21,
    overflow: 'hidden',
     }
});

export default App;
