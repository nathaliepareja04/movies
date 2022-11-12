import { FlatList, Text, View } from 'react-native'
import React from 'react'
import Movie from './Movie.jsx'

export default function HorizontalSlider({movies,title}) {
  return (
    <View style={{height: title?260:220}}>

    {title&&(
    <Text style={{fontSize:30, fontWeight:"bold", color:"white", marginLeft:10, fontStyle:"italic"}}>{title}</Text>
    )}

    <FlatList data={movies}
      renderItem={({item})=><Movie movie={item} width={140} height={200} />}
      keyExtractor={(item)=>item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    
    />

  </View>
)
}

