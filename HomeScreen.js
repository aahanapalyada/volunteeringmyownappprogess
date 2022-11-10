import React, { Component } from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, Platform,} from "react-native";

export default class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}> 
        <SafeAreaView style={styles.droidSafeArea} />
      <View style = {styles.titleBar}> 
            <Text style={styles.titleText}> Volunteering</Text>
            <Text style={styles.titleText}> App</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  titleText: {
    fontSize: 45,
    color: "#FE7F9C",
    fontWeight: "bold",
  },
   titleBar: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
    },
})