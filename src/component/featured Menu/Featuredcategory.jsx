import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import client,{urlFor} from '../../Services/Sanity';

import AntDesign from '@expo/vector-icons/AntDesign';
import FeaturedData from './FeaturedMenu';
import FeaturedMenu from './FeaturedMenu';
import Orders from '../../app/(shop)/Order';
import Restaurants from '../RestaurantDetail/Restaurants';
import Dishes from '../Dishes/Dishes';


 const Featuredcategory = ({id,featured}) => {
  // console.log(id)
 
   const [Featured,setFeatured]=useState([]);
   //console.log(Featured)
   const[ dish,setDish]=useState([]);
   useEffect(()=>{
         client.fetch(`*[_type == "featured" && _id=="${id}"] {
                          ...,
                          restaurants[]->{
                         ...,
                         type{name},
                         dishes[]->
                         },
                         }[0]`,{id}).then((data)=>
                          setFeatured(data?.restaurants))
   },[id]);
    
   return (
     <View >
      <View style={{justifyContent:'space-between',padding:10,marginTop:10}}>
        <View  style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
          
          <Text style={{fontWeight:'bold',fontSize:20}}>{featured.name}</Text>
          <AntDesign name="arrowright" size={34} color="black" />
        </View>
        <Text style={{color:'grey'}}>{featured.short_description}</Text>

      </View>
    
   
                {Featured.map((item)=>(<FeaturedMenu key={item._id} id={id} Restaurants={item} image={urlFor(item.image).url()} />))}
  
               
                
      </View>
   )
 }

export default Featuredcategory


