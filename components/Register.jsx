import Colors from "@/constants/Colors";
import { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();
  const [items, setItems] = useState({
    email: "",
    username: "",
    password: "",
  });
  const API_URL = process.env.EXPO_PUBLIC_API_URL;

  const handleSubmit = () => {
    if (!items.email || !items.password || !items.username) {
      ToastAndroid.show("All Fields Are Required", ToastAndroid.BOTTOM);
    } else {
      axios
        .post(`${API_URL}/user/register`, items)
        .then((res) => {
          console.log("Registration successful:", res.data);
          ToastAndroid.show("User Registered", ToastAndroid.LONG);
          router.push("/Login");
        })
        .catch((error) => {
          console.error(
            "Error during registration:",
            error.response ? error.response.data : error.message
          );
        });
    }
  };

  return (
    <View style={{ margin: 20 }}>
      <Text style={styles.heading}>Register 🐶</Text>
      <Text style={styles.heading}>Let's Get Started</Text>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          marginTop: 80,
        }}
      >
        <TextInput
          value={items.username}
          placeholder="Username"
          style={styles.input}
          onChangeText={(value) => {
            setItems({
              ...items,
              username: value,
            });
          }}
        />
        <TextInput
          value={items.email}
          placeholder="Email"
          style={styles.input}
          onChangeText={(value) => {
            setItems({
              ...items,
              email: value,
            });
          }}
        />
        <TextInput
          value={items.password}
          secureTextEntry={true}
          onChangeText={(value) => {
            setItems({
              ...items,
              password: value,
            });
          }}
          placeholder="Password"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text
            style={{
              fontFamily: "outfit-semibold",
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: Colors.primary,
              color: "white",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/Login");
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-semibold",
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 10,
              borderColor: Colors.primary,
              borderWidth: 2,
              color: Colors.primary,
            }}
          >
            Already Have An Account ? Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 4,
    width: 250,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 40,
    margin: 20,
  },
});
