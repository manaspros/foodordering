import { View, Text, SafeAreaView, Platform, ScrollView, Animated, Pressable, Image, StyleSheet } from 'react-native'
import React, {useState, useRef} from 'react'

interface CategoryParams {
    details:{
        _id?:string;
        name?:string;
        image?:string
        onPress?:()=>void
    },

    catProps:{
        activeCat?:string;
        onPressCat?:()=>void
    }
}

const CategoryCard = ({details, catProps}:CategoryParams) => {

    let isActive = details._id == catProps.activeCat;
    let borderColor = isActive? "orange":"grey"
    let bgColor = isActive? "orange":"black"
    let textColor = isActive? "orange":"white"

  return (
    <View>
      <Pressable style={style.container} key={details._id} onPress={catProps.onPressCat}>
        <View
            style={[style.imageContainer, {backgroundColor:bgColor, borderColor:borderColor}]}
        >
            <Image 
                source={{uri:details?.image}}
                style={{width:55, height:55, resizeMode:"contain"}}            
            
            />
        </View>
        <Text style={[style.catName, {color:textColor}]}>{details.name}</Text>

      </Pressable>
    </View>
  )
}

export default CategoryCard


const style = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:3,
        margin:3
    },
    imageContainer:{
        borderRadius:20,
        padding:3
    },

    catName:{
        fontSize:15,
        fontWeight:"bold",
    }
})