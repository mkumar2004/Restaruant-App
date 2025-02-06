import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../../Services/Sanity';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Redirect, useNavigation, useRouter } from 'expo-router';
import { Route } from 'expo-router/build/Route';
import Dishes from '../Dishes/Dishes';

const FeaturedMenu = ({ id, Restaurants, image }) => {
  //console.log(Restaurants)
  //console.log(id)

 
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <View style={{ backgroundColor: "" }} >



      {/* dishes */}
      <FlatList
        horizontal
        data={Restaurants.dishes}
        keyExtractor={(dish) => dish._id}
        showsHorizontalScrollIndicator={false}
        
        renderItem={({ item }) => (

          <View key={item._id}  style={{}} >

            <TouchableOpacity
              onPress={()=>{
                router.replace({
                  pathname:'Order',
                  params:{
                    id:item.id,
                    name:item.name,
                    dishesimage: urlFor(item.image).url(),
                    price: item.price,
                    rating:Restaurants.rating,
                    address:Restaurants.address,
                    Restaurantsimage: image,
                    descripition:item.short_description,
                    long:Restaurants.long,
                    lat:Restaurants.lat,
                    Restaurantname:Restaurants.name,
                    des:Restaurants.short_description,
                    Rest_id:id
                   
                  }
                })
              
              }}
            >
              <View style={{ padding: 10, }}>

                <Image

                  source={{ uri: urlFor(item.image).url() }}
                  style={{ width: 400, height: 200 }}
                />


                <View style={{ backgroundColor: 'white', padding: 15 }} >
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>{item.name}</Text>

                  <View style={{ flexDirection: 'row', gap: 7, backgroundColor: 'yellow', width: 60, marginTop: 2 }}>

                    <AntDesign name="star" size={20} color="green" />
                    <Text style={{ fontWeight: 'bold', color: "green" }}>{Restaurants.rating}</Text>
                  </View>

                  <View style={{ flexDirection: 'row', gap: 6, marginTop: 3 }}>
                    <Entypo name="location" size={20} color="grey" />
                    <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'grey' }}>NearBy: {Restaurants.address}</Text>

                  </View>

                </View>
              </View>
            </TouchableOpacity>

                
          </View>
        )}
      />

      


      
     
    </View>
  )
}

export default FeaturedMenu