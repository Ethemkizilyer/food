import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from '../store/favoritescontext';
import { FOODS } from '../data/dummy-data';
import FoodList from '../components/FoodList';
import {useSelector} from 'react-redux';
export default function Favorites() {
  const favorFood=useSelector((state)=>state.favorFoods.ids)
  const favoriteContext =useContext(FavoritesContext)
  console.log("redux",favorFood)
  console.log("context",favoriteContext)
//   const favoriteFoods =FOODS.filter((food)=>favoriteContext.ids.includes(food.id)) /* CONTEXT İLE KULLANIM */
  const favoriteFoods =FOODS.filter((food)=>favorFood.includes(food.id)) /* REDUX TOOLKİT İLE KULLANIM */
  return (
    <View style={styles.root}>
       { favoriteFoods.length === 0 ? <View style={styles.container}><Text  style={styles.text}>Favorilere herhangi birşey eklemediniz.</Text></View> : <FoodList items={favoriteFoods}/>}
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
     flex:1,  
    },
    container:{
     flex:1,
     alignItems:"center",
     justifyContent:"center"   
    },
    text:{
        fontSize:18,
        fontWeight:"bold"
    }
})