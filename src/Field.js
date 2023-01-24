import React from "react";
import { View, Text, TextInput } from "react-native";
import { Grey } from "./Constant";
const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: Grey,
        paddingHorizontal: 10,
        width: "65%",
        marginBottom: 20,
        marginTop: 2,
        height: 40,
        backgroundColor: 'rgb(220,220,220)'}}
      placeholderTextColor= "black"
    ></TextInput>
  );
};

export default Field;
