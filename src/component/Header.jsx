import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Header = ({imgUrl,title}) => {
  //console.log(imgUrl)
  return (
    <View >
      
     <TouchableOpacity
       style={{alignItems:'center'}}
     >
      <Image
         source={{
          uri:imgUrl

         }}
         style={{width:150,height:150}}
      />
     <Text style={{bottom:40,fontWeight:'bold',color:'white',fontSize:17}}>{title}</Text>
     </TouchableOpacity>

    </View>
  )
}

export default Header