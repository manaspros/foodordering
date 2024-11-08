import { View, Text, Pressable, Animated, Dimensions } from 'react-native'
import React from 'react'
import {Ionicons, AntDesign} from "@expo/vector-icons"

interface HomeHeaderParams {
    deliveryMethod?:boolean;
    setDeliveryMethod?: ()=>void
    scrollOffsetY: Animated.Value
}


const MaxHeaderHeight = 130
const MinHeaderHeight = 40;
const scrollDistance = 50
const {width}:any = Dimensions.get("window")

const HomeHeaders = ({deliveryMethod, setDeliveryMethod, scrollOffsetY}:HomeHeaderParams) => {

const animateSearchBar = {
    transform:[
        {
            translateX:scrollOffsetY.interpolate({
                inputRange:[0, 50],
                outputRange:[0, -23],
                extrapolate:"clamp"
            })
        },

        {
            translateY:scrollOffsetY.interpolate({
                inputRange:[0, 50],
                outputRange:[0, -85],
                extrapolate:"clamp"
            })
        },

        {
            scale:scrollOffsetY.interpolate({
                inputRange:[0, 42],
                outputRange:[1, 0.73],
                extrapolate:"clamp"
            })
        }
    ]
}

const animateTitle ={
    opacity:scrollOffsetY.interpolate({
        inputRange:[0, 20],
        outputRange:[1, 0],
        extrapolate:"clamp"
    })
}

const animateHeadersHeight = scrollOffsetY.interpolate({
    inputRange:[0, scrollDistance],
    outputRange:[MaxHeaderHeight, MinHeaderHeight],
    extrapolate:"clamp"
})
  return (
    <Animated.View style={{height:animateHeadersHeight}}>
        <View
            style={{
                flexDirection:"row", alignItems:"center", paddingHorizontal:7
            }}
        >
            <Pressable 
                style={{
                    flex:1, 
                }}
                // onPress={}
            >
                <Ionicons name='chevron-back' size={30} color="#fff" />

            </Pressable>

            <Pressable 
                style={{
                    flexDirection:"row", justifyContent:"space-between", alignItems:"center",
                    marginRight:10, backgroundColor:"grey", width:60, height:35, borderRadius:99,
                    opacity:0.8
                }}
            >
                <Pressable onPress={setDeliveryMethod}>
                    {deliveryMethod !== false ? (
                        <View style={{
                            backgroundColor:"orange", borderRadius:20, width:35, 
                            height:35, alignItems:"center"
                            }}
                        >
                            <Ionicons name="bicycle-outline" color="#fff" size={24} style={{padding:5}} />

                        </View>
                    ):(
                        <View style={{
                            backgroundColor:"gray", borderRadius:20, width:35, 
                            height:35, alignItems:"center"
                            }}
                        >
                            <Ionicons name="bicycle-outline" color="#fff" size={24} style={{padding:5}} />

                        </View>
                    )}
                </Pressable>

                <Pressable onPress={setDeliveryMethod} style={{alignItems:"center"}}>
                    {deliveryMethod !== true ? (
                        <View style={{
                            backgroundColor:"orange", borderRadius:20, width:35, 
                            height:35, alignItems:"center"
                            }}
                        >
                            <Ionicons name="walk-outline" color="#fff" size={24} style={{padding:5}} />

                        </View>
                    ):(
                        <View style={{
                            backgroundColor:"gray", borderRadius:20, width:35, 
                            height:35, alignItems:"center"
                            }}
                        >
                            <Ionicons name="walk-outline" color="#fff" size={24} style={{padding:5}} />

                        </View>
                    )}
                </Pressable>
            </Pressable>
        </View>

        <Animated.View 
            style={[{
                marginHorizontal:10,
            }, animateTitle]}
        >
            <Text style={{fontSize:30, fontWeight:"bold", color:"#fff", paddingHorizontal:5}}>Restaurant</Text>
        </Animated.View>

        <Animated.View
            style={[{
                flexDirection:"row", alignItems:"center", backgroundColor:"#fff", borderRadius:10,
                height:38, marginHorizontal:10, marginVertical:12
            }, animateSearchBar]}
        >
            <Pressable
                style={{
                    position:"absolute", padding:10, flexDirection:"row", alignItems:"center"
                }}
            >
                <AntDesign name='search1' size={20} color="#000" />
            </Pressable>

        </Animated.View>

    </Animated.View>
  )
}

export default HomeHeaders