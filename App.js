/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useEffect} from 'react';
 import { Modal, StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView } from "react-native";
 
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

     <SafeAreaView style={styles.scrollview}>
      <ScrollView style = {styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.scrollable}>
        <Text style={styles.scrolltext} onPress={()=>alert("Quiz will start")}>Take the quiz</Text>
        </View>
        <View style={styles.scrollable}>
        <Text style={styles.scrolltext} onPress={()=>alert("Quiz will start")}>Take the quiz</Text>
        </View>
        <View style={styles.scrollable}>
        <Text style={styles.scrolltext} onPress={()=>alert("Quiz will start")}>Take the quiz</Text>
        </View>
        <View style={styles.scrollable}>
        <Text style={styles.scrolltext} onPress={()=>alert("Quiz will start")}>Take the quiz</Text>
        </View>
      </ScrollView>
       
       <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible}
         nRequestClose={()=> setModalVisible(!modalVisible)}
         onRequestClose={() => {
           setModalVisible(!modalVisible);
         }}
       >

         <View style={styles.centeredView} onStartShouldSetResponder={()=>setModalVisible(false)}>
           <View style={styles.modalView}>
             <ImageBackground style={styles.img} 
              source={require("../exampilPrototype/assets/banner.jpg")}/>
              <View style={styles.bannerButton}>
                <Text style={styles.bannerText} onPress={()=>setModalVisible(!modalVisible)}>Take the quiz</Text>
                </View>
           </View>
         </View>
         
       </Modal>
       
       </SafeAreaView>
 
   );
 };
 
 const styles = StyleSheet.create({
     centeredView: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     marginTop: 22,
     backgroundColor: "#ffe5b4",
     borderColor: 'black',
     flexDirection: "row"
     },

     scrollview: {
     flex:3,
     marginTop: 22,
     top:'3%',
     flexDirection: 'row',
     backgroundColor: "#ffe5b4"      
     },

      scroll: {
      flex:2,
      height:"50%",
      width:"100%",
      flexDirection: 'row',
      top:"40%",
      },

      modalView: {
      backgroundColor: "#E389B9",
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

      scrolltext:{
      top:"40%",
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      },
 
        img:{
        width:'103%',
        height: '95%',  
        bottom: '1%',
        borderRadius: 21,
        overflow: 'hidden',
        },
 
         bannerButton:{
         width: '36%',
         height: '9%',
         borderRadius: 30,
         backgroundColor: 'black',
         bottom: '2%',
         },

        scrollable:{
        flex: 1,
        borderColor:"black",
        width: 200,
        height: '32%',
        borderRadius: 30,
        backgroundColor: '#7EC8E3',
        marginLeft:10,
        marginRight:10,
        shadowColor: "red",
        elevation: 25,
        }, 


        bannerText: {
        color:'white',
        left:'12%',
        top: '19%',
       }
 });
 
 export default App;