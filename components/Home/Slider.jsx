import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import logo from "../../assets/images/home/slider2.png";

export default function Slider() {
  const data = [
    {
      imageUrl: logo,
    },
    {
      imageUrl: logo,
    },
  ];

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ borderRadius: 15, marginRight: 20, marginLeft: 20 }}
              source={item?.imageUrl}
            />
          </View>
        )}
      />
    </View>
  );
}
