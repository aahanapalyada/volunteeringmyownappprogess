import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";

export default class OppCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.descriptionText}>
                {this.props.opportunity.break}
              </Text>
              <Text style={styles.titleText}>
                {this.props.opportunity.title}
              </Text>
              <Text style={styles.coordinatorText}>
                Coordinator: {this.props.opportunity.coordinator}
              </Text>
              <Text style={styles.descriptionText}>
                Time: {this.props.opportunity.time}
              </Text>
              <Text style={styles.descriptionText}>
                Location: {this.props.opportunity.location}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
  },
  titleContainer: {
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#376C8A"
  },
  coordinatorText: {
    fontSize: 18,
    color: "#376C8A"
  },
  descriptionText: {
    fontSize: 18,
    color: "#376C8A",
  },

});
