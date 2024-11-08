import { View, Text, Image, StyleSheet, Pressable, Animated, TextInput} from 'react-native'
import React from 'react'
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons"

interface RestaurantProps {
    info:{
        restaurantName?: string;
        like?:number;
        deliveryTimeFrom?:number;
        deliveryTimeTo?:number;
        deliveryPrice?:number;
        deliveryFee?:string;
        Prime?:string
    }

    imageUrl:string;
    displayText?:string;
    index?:number
}

const RestaurantInfo = ({info, imageUrl, displayText, index}:RestaurantProps) => {
  return (
    <>
        <View
            style={{
                marginHorizontal:25, gap:20, flexDirection:"row", justifyContent:"space-between"
            }}
        >
            <View style={{paddingVertical:5}}>
                <View 
                    style={{
                        justifyContent:"center", alignItems:"center",
                        backgroundColor:"rgba(100,100,200,0.7)", width:40, height:40, borderRadius:20
                    }}
                >
                    <MaterialIcons name="thumb-down-off-alt" color="#FFF" Size={25} />

                </View>

                {
                    info?.like !== undefined ? (
                        <View style={{alignItems:"center", paddingVertical:5}}>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color:"#fff", fontSize:13, fontWeight:"bold", alignItems:"center"
                                }}
                            >
                                {info?.like}%

                            </Text>

                        </View>
                    ):(
                        <View style={{alignItems:"center", paddingVertical:5}}>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color:"#fff", fontSize:13, fontWeight:"bold", alignItems:"center"
                                }}
                            >
                                --

                            </Text>

                        </View>
                    )
                }

            </View>

            <View style={{paddingVertical:5}}>
                <View
                    style={{
                        justifyContent:"center", alignItems:"center",
                        backgroundColor:"rgba(100,100,200,0.7)", width:40, height:40, borderRadius:20
                    }}
                >
                    <MaterialIcons name="alarm" color="#FFF" Size={25} />
                </View>
                {info?.deliveryTimeFrom && info?.deliveryTimeTo !== undefined ?
                    (
                        <View style={{alignItems:"center", paddingVertical:5}}>
                            <Text
                            numberOfLines={1}
                            style={{
                                color:"#fff", fontSize:13, fontWeight:"bold", alignItems:"center"
                            }}
                            >
                               {info?.deliveryTimeFrom}-{info?.deliveryTimeTo}

                            </Text>

                        </View>
                    ):(
                        <View style={{alignItems:"center", paddingVertical:5}}>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color:"#fff", fontSize:13, fontWeight:"bold", alignItems:"center"
                                }}
                            >
                                --

                            </Text>

                        </View>
                    )
                
                }

            </View>

            <View style={{alignItems:"center", paddingVertical:5}}>
                <View
                    style={{
                        justifyContent:"center", alignItems:"center",
                        backgroundColor:"rgba(100,100,200,0.7)", width:40, height:40, borderRadius:20
                    }}
                >
                    <Ionicons name="bicycle-outline" color="#FFF" Size={25} />
                </View>
                {info?.deliveryPrice !== undefined ?
                    (
                        <View style={{alignItems:"center", paddingVertical:5}}>
                            
                               {info?.deliveryFee === 'Free' ? (
                                <View style={{alignItems:"center"}}>
                                    <View
                                        style={{
                                            flexDirection:"row", alignItems:"center", justifyContent:"center"
                                        }}
                                    >
                                        <Text numberOfLines={1}
                                            style={{
                                                color:"#fff", fontSize:13, fontWeight:"bold"
                                            }}
                                        >
                                            &#8358;
                                        </Text>
                                        <Text
                                            style={{
                                                color:"#fff", fontSize:13, fontWeight:"bold",
                                                textDecorationLine:"line-through"
                                            }}
                                        >
                                            {info?.deliveryPrice}.00

                                        </Text>
                                    </View>
                                    <View 
                                        style={{
                                            backgroundColor:"orange", borderWidth:1, borderRadius:7,
                                            padding:3, flexDirection:"row"
                                        }}
                                    >
                                        <Text
                                            numberOfLines={1} 
                                            style={{color:"#000", fontSize:13, fontWeight:"bold"}}>
                                            {info?.deliveryFee}
                                        </Text>

                                    </View>


                                </View>
                               ):(
                                <Text
                                numberOfLines={1}
                                style={{
                                    color:"#fff", fontSize:13, fontWeight:"bold"
                                }}
                                >

                                    &#8358;{info?.deliveryPrice}
                                </Text>
                               )}


                        </View>
                    ):(
                        <View style={{alignItems:"center", paddingVertical:5}}>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color:"#fff", fontSize:13, fontWeight:"bold", alignItems:"center"
                                }}
                            >
                                --

                            </Text>

                        </View>
                    )
                
                }

            </View>

            <View style={{alignItems:"center", paddingVertical:5}}>
                <View 
                    style={{
                        justifyContent:"center", alignItems:"center",
                        backgroundColor:"rgba(100,100,200,0.7)", width:40, height:40, borderRadius:20
                    }}
                >
                    <MaterialIcons name="settings" color="#FFF" Size={25} />

                </View>       
                    <View style={{alignItems:"center", paddingVertical:5}}>
                        <Text
                            numberOfLines={1}
                            style={{
                                color:"#fff", fontSize:13, fontWeight:"bold", alignItems:"center"
                            }}
                        >
                            Prime

                        </Text>

                    </View>
                   
            </View>

        </View>

        <Animated.View
            style={{
                flexDirection:"row", alignItems:"center", justifyContent:"center",
                backgroundColor:"rgba(255,255,255,0.7)", borderRadius:20, height:38,
                marginHorizontal:10, marginVertical:12, marginBottom:35
            }}
        >
            <Pressable
                style={{
                    position:"absolute", padding:10, flexDirection:"row", alignItems:"center",
                    justifyContent:"space-around"
                }}
                
            >
                <AntDesign name='search1' size={22} color="#eee" />
                <TextInput placeholder={`search in ${info?.restaurantName}`}
                    style={{
                        fontSize:20, color:"#fff"
                    }}
                />
            </Pressable>

        </Animated.View>
    </>
  )
}

export default RestaurantInfo