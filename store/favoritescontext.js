import { createContext, useState } from "react";

export const FavoritesContext= createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{},
})

function FavoritesContextProvider({children}){
    const [favoriteIds, setfavoriteIds] = useState([])

    function addFavorite(id){
        setfavoriteIds((current)=>[...current,id])
    }
    function removeFavorite(id){
        setfavoriteIds((current)=>current.filter((foodId)=>foodId !== id))
    }

    const value ={
        ids:favoriteIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesContextProvider