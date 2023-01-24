import { View, Text, ImageBackground } from "react-native";
import React, { Component } from "react";

var bg = require("./assets/ntitle.png");

export default class Splash extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate("Login");
    },5000);
  }
  render() {
    return (
      <ImageBackground source={bg} style={{ height: "100%", width: "100%" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 26,
              width: "90%",
              fontWeight: "bold",
            }}
          >
            Person Detection & Tracking in Crowd Environment
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginBottom: 10,
              color: "white",
              marginHorizontal: 70,
              fontSize: 20
            }}
          >
            You can reach us 24/7 via {"\n"}
            ausafiqbal00@gmail.com
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
