import Colors from "@/constants/Colors";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function LandingPage() {
  const router = useRouter();

  return (
    <View style={styles.main}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
          Ready To Make New Friends?
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 20,
            color: "gray",
            padding: 10,
            textAlign: "center",
          }}
        >
          Let's Adopt The Pet Which U Like And Make Their Life Happy
        </Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/Register");
          }}
          style={styles.btn}
        >
          <Text style={{ textAlign: "center", fontFamily: "outfit-bold" }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  image: {
    width: 450,
    height: 500,

    borderWidth: 2,
  },
  container: {
    width: "100%",
    backgroundColor: "white",
    height: 400,
    marginTop: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 2,
    borderColor: "white",
    display: "flex",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    width: "100%",
    padding: 14,
  },
});
