import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Featuredcategory from './featured Menu/Featuredcategory'
import client from '../Services/Sanity'
import Dishes from './Dishes/Dishes'


const HomeLayout = () => {
  const [Featured,setFeatured] = useState([]);
  //console.log(Featured);
  useEffect(()=>{
    const FetchQuery = async()=>{
      try{
            const query = `*[_type == "featured" ]`;
            const data = await client.fetch(query);
            setFeatured(data)
      }
      catch(error){
        console.error(error)
      }
    }    
    FetchQuery();
  })
  return (
    <View>
    {Featured.map((featured)=>(<Featuredcategory key={featured._id} id={featured._id} featured={featured}/>))}  
     {/* {Featured.map((Resta)=>(<Dishes key={Resta._id} id={Resta._id} Restar={Resta}  />))}   */}
    </View>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})