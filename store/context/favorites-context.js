import { createContext, useState } from 'react'

export const FavoritestContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
})

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  function addFavorite(id) {
    setFavoriteMealIds((currentFavoriteIds) => [...currentFavoriteIds, id])
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavoriteIds) => currentFavoriteIds.filter((mealId) => mealId !== id))
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  }

  return <FavoritestContext.Provider value={value}>{children}</FavoritestContext.Provider>
}

export default FavoritesContextProvider
