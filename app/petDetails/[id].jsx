import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import dog1 from "../../assets/images/home/pet images/dog1.png";
import Petinfo from "../../components/Home/Petlist/Petinfo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { pets } from "../../assets/data/data";

export default function PetDetails() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  });
  const filtere_data = pets?.filter((item) => item?.id == id);
  const filtered_data = filtere_data[0];

  return (
    <View style={{ margin: 0 }}>
      <Image source={filtered_data?.imageUrl} style={styles.img} />
      <View style={styles.box}>
        <View>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
            {filtered_data?.name}
          </Text>
          <Text style={{ fontFamily: "outfit", color: "gray", fontSize: 15 }}>
            522 Tyron Street N
          </Text>
        </View>

        <AntDesign name="heart" size={24} color="black" />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        <Petinfo type="age" data={filtered_data} />
        <Petinfo type="breed" data={filtered_data} />
        <Petinfo type="sex" data={filtered_data} />
        <Petinfo type="weight" data={filtered_data} />
      </View>
      <View>
        <Text style={{ fontFamily: "outfit", fontSize: 25, marginTop: 4 }}>
          About {filtered_data?.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 15,
            marginTop: 4,
            color: "gray",
            textAlign: "justify",
            paddingHorizontal: 10,
          }}
        >
          The Best Dog Ever Exists Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem suscipit cum atque dolorum nulla aspernatur
          alias laudantium, iusto corrupti molestias eum expedita iure ullam
          reiciendis, sapiente quod temporibus tenetur optio aspernatur
          nostrum....
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: "90%",
          borderWidth: 1,
          borderColor: Colors.primary,
          height: 60,
          marginLeft: 20,
          borderRadius: 30,
          backgroundColor: "white",
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "black",
              borderWidth: 1,
              borderRadius: 50,
            }}
          />
          <View>
            <Text style={{ fontFamily: "outfit-bold" }}>
              {" "}
              {filtered_data?.owner_name}
            </Text>
            <Text style={{ fontFamily: "outfit", color: "gray" }}>
              Pet Owner
            </Text>
          </View>
        </View>
        <FontAwesome
          name="mail-forward"
          size={24}
          color={`${Colors.primary}`}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 400,
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
});
