import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodIngredients({data}) {
  return (
  data.map((item,index)=>(
    <View key={index} style={styles.listItem}>
        <Text style={styles.itemText}>{item}</Text>
    </View>
  ))
  )
}

const styles = StyleSheet.create({
    listItem:{
        backgroundColor:"orange",
        marginVertical:4,
        marginHorizontal:12,
        borderRadius:10,
        paddingVertical:4
    },
    itemText:{
        color:"#351401",
        textAlign:"center"
    },

})