import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Movie({movie,height=420,width=300}) {

    const navigation=useNavigation()

    const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <TouchableOpacity 
        onPress={()=>navigation.navigate("DetailScreen",movie)} 
        style={{width, 
        height, 
        marginHorizontal:2, 
        paddingBottom: 20, 
        paddingHorizontal:7}}>

        <View style={styles.imgContainer}>
            <Image source={{uri}} style={styles.image}/>
        </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({

    image:{
        flex:1,
        borderRadius:18,
    },

    imgContainer:{
        flex:1,
        borderRadius:15,
        shadowColor: "#F50900",
        shadowOpacity: 30.0,
        shadowRadius: 20.0,
        elevation: 30
    }

})