import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "../../../constants/Colors";

export default function Petinfo() {
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
          <AntDesign
            name="calendar"
            size={34}
            color={`${Colors.primary}`}
            style={{ backgroundColor: Colors.light_primary }}
          />
        </View>
        <View>
          <Text style={{ color: "gray", fontFamily: "outfit", fontSize: 15 }}>
            Age
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
