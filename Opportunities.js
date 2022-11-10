import React, { Component } from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, Platform, FlatList, ScrollView} from "react-native";
import OppCard from "./OppCard";
import Profile from "./Profile";

let opportunities = require("./opportunities.json");


export default class OppScreen extends Component {

constructor(props) {
    super(props);
  }

renderItem = ({ item: opportunity }) => {
    return <OppCard opportunity={opportunity} />;
  };

keyExtractor = (item, index) => index.toString();

  render () {
    return (
      <View style={styles.container}> 
        <SafeAreaView style={styles.droidSafeArea} />
            <Text style={styles.titleText}>  </Text>
            <Text style={styles.titleText}> Opportunities </Text>
            <Text style={styles.titleText}>  </Text>
     {<FlatList
              keyExtractor={this.keyExtractor}
              data={opportunities}
              scrollEnabled
              renderItem={this.renderItem}
              vertical= {true}

            />}
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
    justifyContent: "center",
    alignItems: "center"
  },
   titleBar: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    /*infoText : {
      fontSize: 20,
      fontWeight:"bold",
      color: "#376C8A"
    },*/
})