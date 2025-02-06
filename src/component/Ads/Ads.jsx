import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Image, Dimensions } from 'react-native';

export default function Adsitem() {
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex,setactiveIndex]=useState(0);
  const flatListref=useRef();
 // Image data
  const Ads = [
    {
      id: '1',
      image:
        'https://upfront.scholastic.com/content/dam/classroom-magazines/upfront/pages/promotion/010421/p10-11-jun-junkfood/M1-UPF010421-JUN.jpg',
    },
    {
      id: '2',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qEbKaJIX_BJgLLCBSrX8Drqyzgs4xOE9kA&s',
    },
    {
      id: '3',
      image:
        'https://www.menutiger.com/_next/image?url=http%3A%2F%2Fcms.menutiger.com%2Fwp-content%2Fuploads%2F2024%2F06%2Fqr-code-for-food-advertisements.webp&w=2048&q=75',
    },
    {
      id: '4',
      image:
        'https://i.pinimg.com/550x/32/c0/54/32c05405e98bf5f4e8c3a7d2e213dade.jpg',
    },
    {
      id: '5',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxr2o0MoBTIV5yJarJeWGEBzckX8pG1UmDQ&s',
    },
  ];

  // Rendering image items
  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item.image }}
          style={{ width: screenWidth, height: 200 }}
        />
      </View>
    );
  };

  // Handle Scroll
  const handleScroll = (event) => {
    //Position
    const scrollPosition = event.nativeEvent.contentOffset.x;
    //console.log({ scrollPosition });
     
    //Index Position

    const indexposition=scrollPosition / screenWidth; //{"indexposition": 1} {"scrollPosition": 360} {"screenWidth": 360}
    /*calculation
        screenWidth :360+360=720 
        scrollPosition :360 =720 {when it goes index 1 to 2}
        720/360=2 */
    // console.log({indexposition},{scrollPosition},{screenWidth})
    
    //Upadate Index
     setactiveIndex(indexposition)
  };

  // Dot Indicator
  const DotIndicator = () => {
    return Ads.map((dot, index) => {
      if(activeIndex===index){
         return(
            <View
            key={index}
            style={{
            backgroundColor: 'red',
            height: 6,
            width: 16,
            borderRadius: 5,
            marginHorizontal: 6,
          }}
        />
         )
     
      }  
      else{
        return (
            <View
              key={index}
              style={{
                backgroundColor: 'black',
                height: 6,
                width: 16,
                borderRadius: 5,
                marginHorizontal: 6,
              }}
            />
          );
        }
     
    });
  };

  //Automatic Scroll
  useEffect(()=>{
    
    let interval= setInterval(()=>{
        if(activeIndex=== Ads.length-1){    //if activeindex === Last index --.jump back to first index
           flatListref.current.scrollToIndex({
            index:0,
            animation:true
           })

        }else{  //else activeinde+1
            flatListref.current.scrollToIndex({
                index:activeIndex+1,
                animation:true
               })
        }
    },2000)
    return ()=>clearInterval(interval);
  })

  return (
    <View >
      <FlatList
        data={Ads}
        horizontal
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
        renderItem={renderItem}
        onScroll={handleScroll}
        ref={flatListref}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'center',
        }}
      >
        {DotIndicator()}
      </View>
    </View>
  );
}

