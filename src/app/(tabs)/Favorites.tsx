import CardsContainer from "@/components/CardsContainer";
import Container from "@/components/Container";
import HeaderPages from "@/components/HeaderPages";
import { getAllFavorites } from "@/storage/FavoriteStorage";
import { MovieProps } from "@/types/MovieType";
import { useFocusEffect } from "expo-router";
import { BookmarksSimpleIcon } from "phosphor-react-native";
import { useCallback, useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState<MovieProps[]>([]);

  async function loadData() {
    setFavorites(await getAllFavorites());
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [favorites])
  );

  return (
    <Container>
      <HeaderPages
        title="Favoritos"
        description="Sua lista de filmes e series salvos"
        Icon={BookmarksSimpleIcon}
      />

      <CardsContainer data={favorites} remove={true} />
    </Container>
  );
}
