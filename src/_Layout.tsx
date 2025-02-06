import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Restaurants from './component/RestaurantDetail/Restaurants'
import HomeLayout from './component/HomeLayout'

const RootLayout = () => {
    const Stack= createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Screen name='Restaurants' component={Restaurants} />
        <Stack.Screen name='Home' component={HomeLayout}/>
        
    </NavigationContainer>
  )
}

export default RootLayout