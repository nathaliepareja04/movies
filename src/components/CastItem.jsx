import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CastItem({actor}) {

    const uri=`https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={styles.container}>
        {actor.profile_path && 
        <Image source={{uri}} style={styles.image}/>
        }

        <View style={styles.actorInfo}>

        <Text style={{fontSize:18,fontWeight:"bold"}}>
            {actor.name}
        </Text>

        <Text style={{fontSize:16,fontStyle:"italic", opacity:0.7}}>
            {actor.character}
        </Text>
        
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"#C9C9C9",
        borderRadius:10,
        shadowColor: "#F50900",
        shadowOpacity: 30.0,
        shadowRadius: 20.0,
        elevation: 30,
        height:70,
        marginLeft:10,
    },

    actorInfo:{
        marginLeft:10,
        paddingRight:10,
        marginTop:2
    },

    image:{
        width:70,
        height:70,
        borderRadius:10
    }
})