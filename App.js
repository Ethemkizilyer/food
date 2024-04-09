import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './screens/Categories';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodOverview from './screens/FoodOverview';
import FoodDetail from './screens/FoodDetail';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favorites from './screens/Favorites';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/favoritescontext';
import { Provider } from 'react-redux'
import { store } from './store/redux/store';
const Stack= createNativeStackNavigator()
const Drawer= createDrawerNavigator()

function DrawerNavigator(){
  return (
    <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:"blue"},headerTintColor:"white",contentStyle:{backgroundColor:"lightblue"}}}>
    <Drawer.Screen name="Categories" component={Categories} options={{title:"Tüm Kategoriler",drawerIcon:()=>(
      <Ionicons name="list" size={24} color="black" />
    )}}/>
    <Drawer.Screen name="Favorites" component={Favorites} options={{title:"Favoriler",drawerIcon:()=>(
      <Ionicons name="star" size={24} color="black" />
    )}}/>
  </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <FavoritesContextProvider>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"blue"},headerTintColor:"white",contentStyle:{backgroundColor:"lightblue"}}}>
      {/*  <Stack.Navigator initialRouteName='FoodOverview'>Hangi name i yazarsam ilk sayfa o olur */}
        {/* <Stack.Screen name='Categories' component={Categories} options={{title:"Tüm Kategoriler"}}/> */}
        <Drawer.Screen name='Drawer' component={DrawerNavigator} options={{headerShown:false}}/>
        <Stack.Screen name='FoodOverview' component={FoodOverview}/>
        <Stack.Screen name='FoodDetail' component={FoodDetail} options={{title:"İçerik"}}/>
      </Stack.Navigator>
      </FavoritesContextProvider>
      </Provider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
