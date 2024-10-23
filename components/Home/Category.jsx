import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import logo from "../../assets/images/home/dog.png";
import logo1 from "../../assets/images/home/cat.png";
import logo2 from "../../assets/images/home/bird.png";
import logo3 from "../../assets/images/home/fish.png";
import PetList from "../../components/Home/PetList";

export default function Category() {
  const [category, setCategory] = useState("Dogs");
  const data = [
    {
      name: "Dogs",
      imageUrl: logo,
    },
    {
      name: "Cats",
      imageUrl: logo1,
    },
    {
      name: "Birds",
      imageUrl: logo2,
    },
    {
      name: "Fish",
      imageUrl: logo3,
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <View style={styles.category}>
        <FlatList
          horizontal={true}
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setCategory(item?.name);
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 30,
              }}
            >
              <View
                style={[
                  styles.categoryBox,
                  {
                    backgroundColor:
                      category == item?.name
                        ? Colors.secondary
                        : Colors.light_primary,
                  },
                ]}
              >
                <Image
                  source={item?.imageUrl}
                  style={{ width: 60, height: 60 }}
                />
              </View>
              <Text style={{ fontFamily: "outfit", fontSize: 18 }}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <PetList category={category} />
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    width: "100%",
    height: 120,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryBox: {
    height: 80,
    width: 80,
    backgroundColor: Colors.light_primary,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: "center",
  },
});
