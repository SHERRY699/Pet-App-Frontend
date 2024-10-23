import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={{ marginTop: 20, padding: 20 }}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
            Welcome,
          </Text>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
            Sherry
          </Text>
        </View>
        <View style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 40,
    backgroundColor: "black",
  },
});
