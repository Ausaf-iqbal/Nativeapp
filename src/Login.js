import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Background from "./Background";
import { Grey } from "./Constant";
import Field from "./Field";
import Btn from "./Btn";

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 66,
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Login
          
        </Text>

        <View
          style={{
            opacity:0.6,
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: "#3399FF", fontWeight: "Bold" }}>
            Welcome Back
          </Text>

          <Text
            style={{
              color: "red",
              fontSize: 19,
              fontWeight: "Bold",
              marginBottom: 20,
            }}
          >
            Login to Your Account
          </Text>

          <Field placeholder="Email / Usermame" keyboardType={"email-address"} />

          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{ alignItems: "flex-end", width: "78%", paddingRight: 35, marginBottom: 100 }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Forget Password?
            </Text>
          </View>
          <Btn textColor="white" bgColor={Grey} btnLabel="Login" Press={() => alert("Logged In")} />
          <View style={{display:"flex", flexDirection: "row", justifyContent:"center"}}>
            <Text style = {{color: "white"}}>Don't have an Account?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
              <Text style= {{color: "red", fontWeight: "bold", fontSize:16 }}> Signup</Text>
              </TouchableOpacity>
          </View>
        </View>

      </View>
    </Background>
  );
};

export default Login;
