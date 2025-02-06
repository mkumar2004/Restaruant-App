import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const TabsLayout = () => {
  return (
   <Tabs
     screenOptions={{
    
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'grey',
      tabBarLabelStyle:{fontSize:10},   
     }}>
      
       <Tabs.Screen name='Home' options={{
        headerShown:false,
        tabBarLabel:'Home',
        tabBarIcon:({color,size})=>(<Entypo name="home" size={24} color={color}  />)
       }}/>



       <Tabs.Screen name='index' options={{
        headerShown:false,
        tabBarLabel:'Restaurant',
        tabBarIcon:({color,size})=>(<Ionicons name="restaurant" size={24} color={color} />)
       }}/>
        <Tabs.Screen name='Order' options={{
        headerShown:false,
        tabBarLabel:'Order',
        tabBarIcon:({color,size})=>(<Entypo name="shopping-bag" size={24} color={color}  />)
      
       }}/>
        <Tabs.Screen name='Profile' options={{
        headerShown:false,
        tabBarLabel:'Map',
        tabBarIcon:({color,size})=>(<MaterialIcons name="maps-ugc" size={24} color={color}/>)
       }}/>

   </Tabs>

  )
}

export default TabsLayout