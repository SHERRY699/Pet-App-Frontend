import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View>
      <Header />
      <Slider />
      <Category />
      <TouchableOpacity
        onPress={() => {
          router.push("/Addpet");
        }}
        style={styles.btn}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            color: Colors.primary,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Add New Pet
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "80%",
    height: 60,
    backgroundColor: Colors.light_primary,
    marginTop: 10,
    marginLeft: 40,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderStyle: "dashed",
    borderRadius: 20,
  },
});
