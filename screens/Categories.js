import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid'

export default function Categories({navigation}) {
    function renderCategoryItem (e){
      function pressHandler(){
        navigation.navigate("FoodOverview",{
          categoryId:e.item.id
        })
      }
        console.log(e.item)
        return(
          <CategoryGrid title={e.item.title} color={e.item.color} pressFood={pressHandler}/>
        )
    }
  return (
    <FlatList
    data={CATEGORIES}
    keyExtractor={(item)=>item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
    />
  )
}

const styles = StyleSheet.create({})