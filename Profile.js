import React, { Component } from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, Platform, TextInput, TouchableOpacity} from "react-native";
import db from "../config";

export default class ProfileScreen extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      location: "",
    };
  }

assignLocation = async (location) => {
  db.collection("user_location").add({
      location: location,
    });
}

  render () {
    return (
      <View style={styles.container}> 
        <SafeAreaView style={styles.droidSafeArea} />
      <View style = {styles.titleBar}> 
            <Text style={styles.titleText}> Profile Screen </Text>
      </View>

      <View style = {styles.imageBar}> 
        <Image 
        source={require("../assets/profilepic.png")} 
        style={styles.profileImage}> 
        </Image>
      </View>

      <View style = {styles.contentBar}> 
        <Text style = {styles.infoText}> Name: {this.state.name}
        </Text>  
        <TextInput
          style={styles.inputBox}
          placeholder="Enter text here"
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
         value={this.state.name}
        /> 

        <Text style = {styles.infoText}> Age: {this.state.age}
        </Text>
       <TextInput
          style={styles.inputBox}
          placeholder="Enter text here"
          onChangeText={(text) => {
            this.setState({ age: text });
          }}
         value={this.state.age}
        /> 
  
         
        <Text style = {styles.infoText}> Location: {this.state.location}
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter text here"
          onChangeText={(text) => {
            this.setState({ location: text });
          }}
         value={location}
        /> 
    
      </View>
      <View> 
      <TouchableOpacity onPress={() => this.assignLocation()}> </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  titleText: {
    fontSize: 45,
    color: "#FE7F9C",
    fontWeight: "bold",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  titleBar: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
 infoText : {
      fontSize: 20,
      fontWeight:"bold",
      color: "#376C8A",
      alignSelf: "center"
 },
 contentBar : {
        flex: 0.3,    
 },
 imageBar : {
        justifyContent: "center",
        alignItems: "center"
 },
 profileImage :{
    width: 100, 
    height: 100, 
    alignSelf: "center"
 },
 inputBox : {
    marginTop: 15,
    width: '50%',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: "#97b4c6",
    fontSize: 15,
    color: "#376C8A",
    alignSelf: 'center',
  },
  button : {
    backgroundColor: "#FADADD",
    borderRadius: 50,
    width: '20%',
    textAlign: 'center',
  },
  buttonText : {
    fontSize: 15,
    fontWeight: "bold",
    color: "#376C8A"
  }
})