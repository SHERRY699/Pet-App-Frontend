import { View, Text } from "react-native";
import React from "react";
import PetList from "../../components/Home/PetList";

export default function index() {
  category = "Dogs";
  return (
    <View style={{ margin: 20 }}>
      <PetList category={category} />
    </View>
  );
}
