import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Colors from "../../../constants/Colors";

export default function Petinfo({ type, data }) {
  return (
    <View style={styles.information}>
      <View
        style={{
          width: 160,
          height: 80,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          gap: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {type == "age" ? (
            <AntDesign
              name="calendar"
              size={34}
              color={`${Colors.primary}`}
              style={{ backgroundColor: Colors.light_primary }}
            />
          ) : type == "breed" ? (
            <FontAwesome5
              name="bone"
              size={24}
              color={`${Colors.primary}`}
              style={{ backgroundColor: Colors.light_primary }}
            />
          ) : type == "sex" ? (
            <Fontisto
              name="intersex"
              size={24}
              color={`${Colors.primary}`}
              style={{ backgroundColor: Colors.light_primary }}
            />
          ) : type == "weight" ? (
            <FontAwesome5
              name="weight-hanging"
              size={24}
              color={`${Colors.primary}`}
              style={{ backgroundColor: Colors.light_primary }}
            />
          ) : null}
        </View>
        <View>
          <Text style={{ color: "gray", fontFamily: "outfit", fontSize: 15 }}>
            {type == "age"
              ? `${data?.age}`
              : type == "breed"
              ? `${data?.type}`
              : type == "sex"
              ? `${data?.sex}`
              : type == "weight"
              ? `${data?.weight}`
              : "null"}
          </Text>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>5 yrs</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  information: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
