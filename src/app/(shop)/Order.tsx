import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import Restaurants from '../../component/RestaurantDetail/Restaurants';
import { useLocalSearchParams } from 'expo-router';
import { urlFor } from '../../Services/Sanity';
import Dishes from '../../component/Dishes/Dishes';
import OrderScreen from '../../component/OrderScreen';


const Orders = () => {
     const { name, dishesimage, price, rating, address, Restaurantsimage, descripition, long, lat, Restaurantname, des,  dishes} = useLocalSearchParams();
   
     
   return (
    <ScrollView>
    <View>
     
      {
        name?.length>0?(
       
          <Restaurants />
          
        ):(
           <OrderScreen/>
        )
      }
      

    </View>
    </ScrollView>  
  )
}

export default Orders