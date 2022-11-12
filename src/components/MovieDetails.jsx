import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import { Link } from '@react-navigation/native'
import CastItem from './CastItem.jsx'


export default function MovieDetails({movieFull,cast}) {
  return (
    <>
      {/*detalles*/}
      <View style={{marginHorizontal:20}}>
        <View style={{flexDirection:"row"}}>
          <Ionicons name="star-outline" size={20} color="#d6b458" style={{marginTop:10}}/>

          {/*puntuacion*/}
          <Text style={{color:"#ffff", marginTop:13, marginLeft: 5}}>{movieFull.vote_average}</Text>

          {/*generos*/}
          <Text style={{color:"#ffff", marginTop:13, marginLeft: 5}}>-{movieFull.genres.map(g=>g.name).join(", ")}</Text>

        </View>
            
        {/*fecha produccion*/}

        <Text style={{color:"#ffff", marginTop:5, fontSize:16, fontWeight:"bold"}}> <Ionicons name='calendar-outline' size={20}/>  {movieFull.release_date}</Text>
            
        {/*pais produccion*/}

        <Text style={{color:"#ffff", marginTop:5, fontSize:16, fontWeight:"bold"}}> <Ionicons name='location-outline' size={20} color="#CC0408"/> {movieFull.production_countries.map(c=>c.name).join(", ")}</Text>
            
        {/*compañias produccion*/}
        <Text style={{color:"#ffff", marginTop:10, fontSize:23, fontWeight:"bold"}}>Compañias de Producción</Text>

        <Text style={{color:"#ffff", marginTop:5, fontSize:16}}>{movieFull.production_companies.map(pc=>pc.name).join(", ")}</Text>

        {/*sipnosis*/}
        <Text style={{color:"#ffff", marginTop:10, fontSize:23, fontWeight:"bold"}}>Sinopsis</Text>

        <Text style={{color:"#ffff", marginTop:5, fontSize:16}}>{movieFull.overview}</Text>

        {/*casting*/}
        <View style={{ marginTop:10, marginBottom:10}}>
          <Text style={{color:"#ffff", fontSize:23, fontWeight:"bold"}}>Casting</Text>

          <FlatList data={cast}
            renderItem={({item})=><CastItem actor={item}/>}
            keyExtractor={(item)=>item.id.toString()}
            style={{ marginTop:10, height:70}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          
          />

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({})