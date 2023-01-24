import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn({bgColor, btnLabel, textColor }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: 290,
        marginVertical: 10
      }}>
      <Text style={{ color: textColor, fontSize: 22, fontWeight: "bold" }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
} 
