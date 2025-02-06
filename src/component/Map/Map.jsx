import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as Progress from 'react-native-progress';
import { useLocalSearchParams } from "expo-router";

const Map = () => {

       
  return (
    <View style={{ backgroundColor: "#FF3800", height: 1000 }}>
      <View
        style={{
          flexDirection: "row",
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={34} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 17 }}>Order Help</Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          width: 340,
          marginLeft: 10,
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row", gap: 15 }}>
          <View>
            <Text style={{ color: "grey", fontSize: 17 }}>
              Estimated Arrival{" "}
            </Text>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>
              30-35 Mins{" "}
            </Text>
          </View>
          <Image
            source={require("../../../assets/image/del.jpeg")}
            style={{ width: 60, height: 60 }}
          />
        </View>
        <Progress.Bar
          color="#E33342"
          indeterminate={true}
          style={{marginTop:7}}
        />
        <Text>Your Order be Prepared By </Text>
      </View>
    </View>
  );
};

export default Map;
