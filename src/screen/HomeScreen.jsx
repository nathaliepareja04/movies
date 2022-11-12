import { Button, ActivityIndicator, Dimensions, ScrollView, StyleSheet, View, FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation} from "@react-navigation/native"
import axios from "axios"
import Carousel from 'react-native-snap-carousel-v4'
import Movie from '../components/Movie.jsx'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HorizontalSlider from '../components/HorizontalSlider.jsx'
import { useMovies } from '../hooks/useMovies.jsx'

const {width:windowWidth}=Dimensions.get("window")

export default function HomeScreen() {

  const {top}=useSafeAreaInsets()

  const navigation= useNavigation()

  const {isLoading,peliculas}= useMovies()


  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator color="red" size={80}/>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop:top+6}}>

      <View style={{height:440}}>
        <Carousel
        data={peliculas.nowPlaying}
        renderItem={({item})=><Movie movie={item}/>}
        sliderWidth={windowWidth}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
        />

      </View>

      {/*populares */}

      <HorizontalSlider movies={peliculas.popular} title="Popular"/>


      {/*Top Rated */}

      <HorizontalSlider movies={peliculas.topRated} title="Top Rated"/>


      {/*Upcoming */}

      <HorizontalSlider movies={peliculas.upcoming} title="Upcoming"/>


      </View>
    </ScrollView>  
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor: "#000000"
  }
})