import { Animated, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect } from 'react';
import client, { urlFor } from '../../Services/Sanity';
import Header from '../../component/Header';
import Ads from '../../component/Ads/Ads'
import HomeLayout from '../../component/HomeLayout';




const Home = () => {
  const [Featured, setFeatured] = useState([]);
  const [Categorey, setCategory] = useState([]);
  // console.log(Featured);
  //const fe=Featured;
  

  useEffect(() => {

    const Fetchquery = async () => {

      try {
        const query = `  *[_type == "category"]`
        const data = await client.fetch(query);

        setCategory(data);
      }
      catch (error) {
        console.error(error);
      }
    };

    Fetchquery();



  }, [])



  return (
    <ScrollView>
          <View style={{backgroundColor:'	#A8A8A8',height:'100%'}} >
      <StatusBar style="auto" />
      <View style={{ padding: 15, backgroundColor: 'black' }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", }} >
          <View style={{ borderWidth: 1, borderRadius: 20, flexDirection: 'row', alignItems: 'center', width: 280, backgroundColor: "white", gap: 15 }} >
            <MaterialCommunityIcons style={{ marginLeft: 10 }} name="shopping-search" size={34} color="gray" />
            <TextInput style={{ fontSize: 15 }} placeholder='Search Delicious' />
          </View>
          <TouchableOpacity>
            <AntDesign name="shoppingcart" size={34} color="white" />

          </TouchableOpacity>

        </View>
      </View>

       <Ads/>
     
      <View style={{marginTop:20,gap:10}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Category</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
       
        >


          {Categorey.map((item) => (
            <Header key={item._id}
              title={item.name}
              imgUrl={urlFor(item.image).url()} />
          ))}
        </ScrollView>

      </View>
      
      <HomeLayout/>

    </View>
    
  </ScrollView>
  
  )
}

export default Home

const styles = StyleSheet.create({})