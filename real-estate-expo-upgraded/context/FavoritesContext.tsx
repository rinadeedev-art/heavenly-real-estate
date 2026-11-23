import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type FavoritesContextValue = {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};
const FavoritesContext = createContext<FavoritesContextValue | null>(null);
const STORAGE_KEY = "@havenly/favorites-v1";

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(value => {
      if (value) setFavoriteIds(JSON.parse(value));
    }).catch(() => {});
  }, []);
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds)).catch(() => {});
  }, [favoriteIds]);
  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  }, []);
  const isFavorite = useCallback((id: string) => favoriteIds.includes(id), [favoriteIds]);
  const value = useMemo(() => ({ favoriteIds, toggleFavorite, isFavorite }), [favoriteIds, toggleFavorite, isFavorite]);
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used inside FavoritesProvider");
  return context;
}
