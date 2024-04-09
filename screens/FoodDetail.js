import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { FOODS } from '../data/dummy-data'
import FoodIngredients from '../components/FoodIngredients'
import { Ionicons } from '@expo/vector-icons';
import { FavoritesContext } from '../store/favoritescontext';
import {useSelector,useDispatch} from "react-redux"
import { addFavor,removeFavor } from '../store/redux/favorites';
export default function FoodDetail({route,navigation}) {
  const dispacth =useDispatch()
  const favoriteContext =useContext(FavoritesContext)

  const favorFoodIds=useSelector((state)=>state.favorFoods.ids)

    const foodId =route.params.foodId
    const selectedFood=FOODS.find((food)=>food.id === foodId)

    // const foodIsFavorite = favoriteContext.ids.includes(foodId) /* CONTEXT İLE KULLANIM */
    const foodIsFavorite = favorFoodIds.includes(foodId)  /* REDUX TOOLKİT İLE KULLANIM */

    const presHandler=()=>{
      console.log("Tıklandı")
    }

    function changeFavorite(){
      if(foodIsFavorite){
        favoriteContext.removeFavorite(foodId)
        dispacth(removeFavor({id:foodId}))
      }
      else {
        favoriteContext.addFavorite(foodId)
        dispacth(addFavor({id:foodId}))
      }
    }

    useLayoutEffect(() => {    
        navigation.setOptions({
          headerRight:()=>{
            return (
                <Pressable onPress={presHandler} style={({pressed})=>(pressed ? styles.pressed : null)}>
                    <Ionicons name={foodIsFavorite ? "star" : "star-outline"} size={24} color="white" onPress={changeFavorite}/>
                </Pressable>
            )
          }
        });
      }, [navigation,changeFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri:selectedFood.imageUrl}}/>
        <Text style={styles.title}>
            {selectedFood.title}
        </Text>
        <View style={styles.details}>
            <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
            <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>İçindekiler</Text>
            </View>
            <FoodIngredients data={selectedFood.ingredients}/>
          </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:50
    },
    image:{
        width:"100%",
        height:300
    },  
    title:{
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold",
        marginTop:5,
        textTransform:"uppercase"
    },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color:"red",
    textTransform:"capitalize"
  },
  listContainer:{
    width:"100%",
    paddingHorizontal:10
  },
  subTitleContainer:{
    alignItems:"center",
    borderBottomWidth:2,
    borderBottomColor:"orange",
    marginVertical:5
  },
  subTitle:{
    color:"orange",
    fontSize:24,
    fontWeight:"bold"
  },
  pressed:{
    opacity:0.5
  }

})