import { MovieProps } from "@/types/MovieType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveFavorite({
  id,
  title,
  original_title,
  overview,
  poster_path,
  backdrop_path,
  release_date,
  original_name,
  first_air_date,
  vote_average,
  popularity,
  media_type
}: MovieProps) {
  try {
    const favorites = await getAllFavorites();

    const newFavorite = {
      id,
      title,
      original_title,
      overview,
      poster_path,
      backdrop_path,
      release_date,
      original_name,
      first_air_date,
      vote_average,
      popularity,
      media_type
    };

    const isAlredyHas = favorites.find(item => item.id === id);

    if (!isAlredyHas) {
      favorites.push(newFavorite);
      await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    }
  } catch (error) {
    console.log("Não foi possivel adicionar filme favorito");
  }
}

export async function getAllFavorites(): Promise<MovieProps[]> {
  try {
    const favorites = await AsyncStorage.getItem("favorites");

    if (!favorites) {
      await AsyncStorage.setItem("favorites", JSON.stringify([]));
      return [];
    }

    return JSON.parse(favorites);
  } catch (error) {
    console.error("Erro ao obter os favoritos:", error);
    return [];
  }
}

export async function alredySaved(id: number) {
  const favorites = await getAllFavorites();

  return favorites.some(item => item.id === id);
}

export async function removeFavorite(id: number) {
  try {
    const favorites = await getAllFavorites();

    const updatedFavorites = favorites.filter(item => item.id !== id);

    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));

  } catch (error) {
    console.log("N~~ao foi possivel remover o filme/serie");
  }
}
