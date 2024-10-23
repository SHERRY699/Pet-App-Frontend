import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { pets } from "../../assets/data/data";
import dog from "../../assets/images/home/pet images/dog1.png";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function PetList(props) {
  const { category } = props;
  const router = useRouter();
  const filteredData = pets.filter((items) => items.category == category);

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {filteredData?.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              router.push(`/petDetails/${item?.id}`);
            }}
            key={index}
            style={style.container}
          >
            <Image source={item?.imageUrl} style={style.img} />
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 18,
                textAlign: "left",
              }}
            >
              {item?.name}
            </Text>
            <View style={style.innercontainer}>
              <Text style={{ color: "gray", fontFamily: "outfit" }}>
                {item?.type}
              </Text>
              <Text
                style={{
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  backgroundColor: Colors.primary,
                  color: Colors.light_primary,
                }}
              >
                {item?.age} YRS
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 180,
    height: 220,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    marginLeft: 2,
  },
  img: {
    width: "90%",
    height: 150,
    borderRadius: 20,
  },
  innercontainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
