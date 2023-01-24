import React from "react";
import { View, Text } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen, green, Grey } from "./Constant";

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 60, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 50 }}>Lets Start</Text>
        <Text style={{ color: "white", fontSize: 50, marginBottom: 200}}>App</Text>
        <Btn bgColor={Grey} textColor="white" btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
        <Btn bgColor= "white" textColor="black" btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
  );
};

export default Home;
