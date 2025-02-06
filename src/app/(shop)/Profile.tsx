import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import Cart from '../../component/Cart/Cart';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Progress from 'react-native-progress';
import MapView from 'react-native-maps';

const Profile = () => {
  const { datalist } = useLocalSearchParams();
  const [mapType, setMapType] = useState("standard"); // Initial map type

  // Handle map type toggle
  const changeMapType = () => {
    setMapType(prevType => prevType === "standard" ? "satellite" : "standard");
  };

  return (
    <ScrollView>
      {datalist && datalist.length > 0 ? (
        <Cart />
      ) : (
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
            <Progress.Bar color="#E33342" indeterminate={true} style={{ marginTop: 7 }} />
            <Text>Your Order is Preparing</Text>

            {/* MapView */}
            <MapView
              style={{ width: "100%", height: 300 }}
              initialRegion={{
                latitude: 9.9152931,
                longitude: 78.1456437,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              mapType={mapType} // Dynamically change map type
              onMapReady={() => console.log("Map is ready!")} // Detect when the map is ready
            />
            
            {/* Add a button to change map type */}
            <TouchableOpacity
              style={{
                backgroundColor: '#E33342',
                padding: 10,
                marginTop: 10,
                borderRadius: 5,
              }}
              onPress={changeMapType} // Toggle map type when clicked
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>
                Toggle Map Type
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Profile;

