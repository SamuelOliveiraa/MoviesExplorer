import CardsContainer from "@/components/CardsContainer";
import Container from "@/components/Container";
import HeaderPages from "@/components/HeaderPages";
import Loading from "@/components/Loading";
import { fetchData } from "@/hooks/api";
import { MovieProps } from "@/types/MovieType";
import { FilmSlateIcon } from "phosphor-react-native";
import { useEffect, useState } from "react";

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  async function loadMovies() {
    setLoading(true);
    const moviesData: { results: MovieProps[] } = await fetchData(
      "/movie/popular"
    );

    if (moviesData.results) {
      setMovies(
        moviesData.results.sort((a, b) => b.vote_average - a.vote_average)
      );
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <Container>
      <HeaderPages
        title="Filmes"
        description="Explore os filmes populares hoje e encontre coisas novas para assistir!"
        Icon={FilmSlateIcon}
      />
      {loading ? <Loading /> : <CardsContainer data={movies} />}
    </Container>
  );
}
