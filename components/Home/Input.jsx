import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input({ type }) {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontFamily: "outfit" }}>
        {type == "name"
          ? "Name"
          : type == "age"
          ? "Age"
          : type == "breed"
          ? "Breed"
          : type == "weight"
          ? "Weight"
          : type == "sex"
          ? "Gender"
          : type == "Type"
          ? "Category"
          : "null"}
        *
      </Text>
      <TextInput placeholder="Name" style={styles.intput} />
    </View>
  );
}

const styles = StyleSheet.create({
  intput: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 2,
  },
});
