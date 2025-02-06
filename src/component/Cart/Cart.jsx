import { View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useLocalSearchParams, useRouter } from 'expo-router';

const Cart = () => {
    
  const [progress, setProgress] = useState(0);
  const route= useRouter();

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 1) return 0; // Reset after reaching 100%
        return oldProgress + 0.1; // Increase progress
      });
      route.replace('Profile')
    }, 5000); // Update every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ alignItems: 'center', backgroundColor: '#fd5c63', justifyContent: 'center'}}>
      <View style={{marginTop:120,padding:20}}>
      <Animatable.Image
        source={require("../../../assets/image/ol.gif")}
        style={{ width: 250, height: 250}}
        animation="slideInUp"
        iterationCount={4}
      />
      </View>
     
     <View >
     <Animatable.Text
        animation="slideInUp"
        style={{ color: 'white',fontSize: 16 }}
      >
        Waiting for order book in a Restaurant
      </Animatable.Text>

      {/* Progress Circle */}
      <Progress.Circle 
        size={50} 
        progress={progress} 
        color="white" 
        borderWidth={3}
        indeterminate={false}
        style={{ marginTop: 10,alignItems:'center' }}
      />
      <View style={{padding:120}}></View>
     </View>
      
      
    </View>
  );
};

export default Cart;
