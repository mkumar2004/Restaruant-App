import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import client from '../../Services/Sanity'
import DishesData from './DishesData';


const Dishes = ({id , Restar}) => {
  //console.log(id)
  const[ disheses,setDished]=useState([]);
  //console.log(disheses);
  
  
  
  
  
     useEffect(()=>{
           client.fetch(`*[_type == "featured" && _id=="${id}"] {
                            ...,
                            restaurants[]->{
                           ...,
                           type{name},
                           dishes[]->
                           },
                           }[0]`,{id}).then((data)=>
                            setDished(data?.restaurants))
     },[id]);
  return (
    <View>
     {disheses.map((item,id)=>(<DishesData id={id} key={item._id}  Restaurants={item} />))}
    </View>
  )
}

export default Dishes