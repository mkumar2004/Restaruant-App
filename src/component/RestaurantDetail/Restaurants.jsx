import { View, Text, Image, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { urlFor } from '../../Services/Sanity';
import Dishes from '../Dishes/Dishes';
const Restaurants = ()=> {
  const screenWidth = Dimensions.get('window').width;
  const { name, dishesimage, price, rating, address, Restaurantsimage, descripition, long, lat, Restaurantname, des,dish,Rest_id, Rest } = useLocalSearchParams();
 //console.log(Rest)
 

  
  return (
    
    <>
  
      <View>
        <Image

          source={{ uri: urlFor(Restaurantsimage).url() }}
          style={{ width: screenWidth, height: 200 }}
        />
        <View style={{ backgroundColor: 'white', padding: 15 }}>

          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#002244' }}>{Restaurantname}</Text>

          <View style={{ flexDirection: "row", gap: 5 }}>
            <View style={{ flexDirection: "row", backgroundColor: "#FF033E", padding: 3, width: 70, gap: 12, borderRadius: 15 }}>
              <AntDesign name="star" size={20} color="yellow" />
              <Text style={{ fontWeight: 'bold', color: 'yellow' }} >{rating}</Text>
            </View>
            <Text style={{ color: '#5F9EA0' }} >.Special Offers </Text>
          </View>

          <Text style={{ color: 'grey', fontSize: 16 }}>{des}</Text>


        </View>
      </View>


      <View style={{ padding: 15, backgroundColor: 'white' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 28 ,color:"#FEBE10"}}>Your Order</Text>



        <View style={{ flexDirection: 'row', justifyContent: "space-between",backgroundColor: 'white',marginTop:10,}}>
          <View style={{gap:10}}>
            <Text style={{fontSize:25,color:'#FF00BF'}}>{name}</Text>
            <Text  style={{fontSize:15,color:'grey'}}>Price : ${price}</Text>

          </View>
          <View>
            <Image
              source={{ uri: urlFor(dishesimage).url() }}
              style={{ width: 100, height: 100, borderRadius: 20 }}
            />
          </View>
        </View>
        <Text style={{color:'#EF0107'}}>{descripition}</Text>
        
      </View>

      {/* cart */}


      <View style={{backgroundColor:'white',padding:10}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Restaurants Menu</Text>
        <Dishes id={Rest_id}  />
      </View>

        <ScrollView
                
                
        />
    </>
  
  )
}

export default Restaurants