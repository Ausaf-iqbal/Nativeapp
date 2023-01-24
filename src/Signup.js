import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Background from "./Background";
import { Grey } from "./Constant";
import Field from "./Field";
import Btn from "./Btn";

const Signup = (props) => {
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
          Register
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Create a new Account
        </Text>

        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          {/* <Text style={{ fontSize: 40, color: Grey, fontWeight: "Bold" }}>
            Welcome Back
          </Text>

          <Text
            style={{
              color: "blue",
              fontSize: 19,
              fontWeight: "Bold",
              marginBottom: 20,
            }}
          >
            Login to Your Account
          </Text> */}
          <Field
            placeholder="First Name"
          />
          <Field
            placeholder="Last Name"
          />
          <Field
            placeholder="Email / Usermame"
            keyboardType={"email-address"}
          />
          <Field
            placeholder="Contact Number"
            keyboardType={"number"}
          />
          
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Conform Password" secureTextEntry={true} />
          {/* <View
            style={{ alignItems: "flex-end", width: "78%", paddingRight: 35, marginBottom: 100 }}
          >
            <Text style={{ color: Grey, fontWeight: "bold", fontSize: 16 }}>
              Forget Password?
            </Text>
          </View> */}
          <Btn
            textColor="white"
            bgColor={Grey}
            btnLabel="Signup"
            Press={() => {
              alert("Account created");
              props.navigate.navigate("Login");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Already have an Account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: "blue" }}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
