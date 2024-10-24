import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../../components/Home/Input";
import Colors from "../../constants/Colors";

export default function AddPet() {
  return (
    <View
      style={{
        margin: 20,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
        Add A New Pet For Adoption
      </Text>
      <Input type="name" />
      <Input type="age" />
      <Input type="breed" />
      <Input type="weight" />
      <Input type="Type" />
      <Input type="sex" />
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.primary,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", textAlign: "center" }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
