import CardsContainer from "@/components/CardsContainer";
import Container from "@/components/Container";
import EmptyComponent from "@/components/EmptyComponent";
import HeaderPages from "@/components/HeaderPages";
import Loading from "@/components/Loading";
import { fetchData } from "@/hooks/api";
import { MovieProps } from "@/types/MovieType";
import colors from "@/utils/colors";
import { Input, InputField } from "@gluestack-ui/themed";
import { MagnifyingGlassIcon, XCircleIcon } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";

export default function Search() {
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<MovieProps[]>([]);

  async function searchMovie() {
    setLoading(true);
    const res: { results: MovieProps[] } = await fetchData(
      `/search/multi?query=${search}`
    );

    const onlyMoviesAndSeries = res.results
      .filter(
        item =>
          (item.media_type === "movie" || item.media_type === "tv") &&
          item.popularity > 0 &&
          item.vote_average > 0
      )
      .sort((a, b) => b.vote_average - a.vote_average);

    if (onlyMoviesAndSeries) {
      setData(onlyMoviesAndSeries);
      setLoading(false);
    }
  }

  useEffect(() => {
    searchMovie();
  }, [search]);

  return (
    <Container>
      <HeaderPages
        title="Buscar"
        description="Encontre filmes buscando pelo título"
        Icon={MagnifyingGlassIcon}
      />
      <Input
        mt="$4"
        h="$12"
        alignItems="center"
        px="$3"
        borderColor={focused ? "$purpleBase" : "$gray300"}
      >
        <MagnifyingGlassIcon
          size={18}
          color={focused ? colors.purpleBase : colors.gray400}
        />
        <InputField
          value={search}
          onChangeText={setSearch}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Pesquisar Filme/Series"
          placeholderTextColor="$gray400"
          color="$white"
        />

        {search && (
          <Pressable onPress={() => setSearch("")}>
            <XCircleIcon weight="fill" size={20} color={colors.gray400} />
          </Pressable>
        )}
      </Input>

      {loading ? (
        <Loading />
      ) : search && data ? (
        <CardsContainer data={data} />
      ) : (
        <EmptyComponent text="Nenhuma pesquisa realizada" />
      )}
    </Container>
  );
}
