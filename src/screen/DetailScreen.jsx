import {  ActivityIndicator, Button, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation} from "@react-navigation/native"
import Ionicons from "@expo/vector-icons/Ionicons"
import axios from "axios"
import MovieDetails from '../components/MovieDetails'
import { useMovieDetails } from '../hooks/useMovieDetails.jsx'

const screenHeight=Dimensions.get("screen").height

export default function DetailsScreen({route}) {

  const navigation=useNavigation()
  const movie= route.params

  const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const {isLoading,cast,movieFull}=useMovieDetails(movie)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.image}/>
        </View>
      </View>


      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>

        <Text style={styles.title}>{movie.title}</Text>
      </View>

    {isLoading?
      (<ActivityIndicator color="red" size={60}/>): (<MovieDetails movieFull={movieFull} cast={cast}/>)
    }

      {/*button devolver*/}
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.goBack()}>
        <Ionicons name="chevron-back-outline" color="white" size={40}/>
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles=StyleSheet.create({
  imageContainer:{
    width:"100%",
    height: screenHeight*0.7,
    shadowColor: "#F50900",
    shadowOpacity: 30.0,
    shadowRadius: 20.0,
    elevation: 30,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },

  container:{
    backgroundColor: "#000000"
  },

  imageBorder:{
    flex:1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow:"hidden"
  },

  image:{
    flex:1,
    shadowColor: "#F50900",
    shadowOpacity: 30.0,
    shadowRadius: 20.0,
    elevation: 30
  },

  marginContainer:{
    marginHorizontal:20,
    marginTop:20
  },

  subtitle:{
    fontSize:16,
    opacity:0.8,
    color:"white",
    fontStyle:"italic"
  },

  title:{
    fontSize:20,
    fontWeight:"bold",
    color:"white",
    fontStyle:"italic"
  },

  backButton:{
    position:"absolute",
    top:30,
    left:5
  }

})