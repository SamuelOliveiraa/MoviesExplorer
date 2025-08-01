import ButtonBack from "@/components/ButtonBack";
import Container from "@/components/Container";
import Loading from "@/components/Loading";
import { fetchData } from "@/hooks/api";
import { alredySaved, saveFavorite } from "@/storage/FavoriteStorage";
import { MovieDetailsProps, MovieProps } from "@/types/MovieType";
import { VideoType } from "@/types/VideoType";
import colors from "@/utils/colors";
import {
  Button,
  Divider,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  View
} from "@gluestack-ui/themed";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { BookmarkIcon, StarIcon, YoutubeLogoIcon } from "phosphor-react-native";
import { useCallback, useEffect, useState } from "react";
import { Linking } from "react-native";

export default function MovieDetails() {
  const { id, original_title } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [keyFromTrailer, setKeyFromTrailer] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [duration, setDuration] = useState("");

  const [data, setData] = useState<MovieDetailsProps>();

  async function loadData() {
    // Change Loading Spinner to True
    setLoading(true);

    try {
      // Search the ID by Movie
      let data = await fetchData(`/movie/${id}`);

      // If was not a Movie, search ID for Tv Show
      if (data.title !== original_title) {
        data = await fetchData(`/tv/${id}`);
      }

      setData(data);
    } catch (error) {
      try {
        const tvData = await fetchData(`/tv/${id}`);
        setData(tvData);
      } catch (err) {
        console.error("Não foi possível carregar dados do filme ou série", err);
        setData(undefined);
      }
    } finally {
      setLoading(false);
    }
  }

  async function fetchVideosData() {
    if (!data) return;

    let dataVideos: { results: VideoType[] } | null = null;

    try {
      // Try yo find movie
      dataVideos = await fetchData(`/movie/${id}/videos`);
    } catch (error: any) {
      if (error.response?.status === 404) {
        //If is not a movie, try to Tv
        try {
          dataVideos = await fetchData(`/tv/${id}/videos`);
        } catch (err2) {
          console.error("Erro ao buscar vídeos como série:", err2);
        }
      } else {
        console.error("Erro ao buscar vídeos como filme:", error);
      }
    }

    // If can get data video
    if (dataVideos && dataVideos.results) {
      const trailer = dataVideos.results.find(
        item =>
          item.type === "Trailer" ||
          item.type === "Teaser" ||
          item.type === "Official Trailer"
      );
      setKeyFromTrailer(trailer ? trailer.key : "");
    } else {
      setKeyFromTrailer("");
    }
  }

  async function openYoutube() {
    const appUrl = `vnd.youtube://${keyFromTrailer}`;
    const webUrl = `https://www.youtube.com/watch?v=${keyFromTrailer}`;

    const supported = await Linking.canOpenURL(appUrl);

    if (supported) {
      await Linking.openURL(appUrl);
    } else {
      Linking.openURL(webUrl);
    }
  }

  function convertDate() {
    if (!data) return;
    let newDate = new Date(data.release_date);

    if (data.first_air_date) {
      newDate = new Date(data.first_air_date);
    }

    const date = new Intl.DateTimeFormat("pt-BR").format(newDate);
    setReleaseDate(date);
  }

  function converterMinstoHours() {
    if (!data || data.number_of_seasons) return;

    const hour = Math.floor(data.runtime / 60);
    const minutesLeft = data.runtime % 60;
    setDuration(
      `${String(hour).padStart(2, "0")}:${String(minutesLeft).padStart(2, "0")}`
    );
  }

  async function checkIfItemHasSaved() {
    setSaved(await alredySaved(Number(id)));
  }

  async function handleSave() {
    if (!data) return;
    const item: MovieProps = {
      id: Number(id),
      title: data.title,
      backdrop_path: data.backdrop_path,
      original_name: data.original_name,
      overview: data.overview,
      poster_path: data.poster_path,
      release_date: data.release_date,
      first_air_date: data.first_air_date,
      vote_average: data.vote_average,
      original_title: data.original_name,
      popularity: 0,
      media_type: data.type
    };
    setSaved(true);
    saveFavorite(item);
  }

  useEffect(() => {
    if (!data) return;

    convertDate();
    converterMinstoHours();
    fetchVideosData();
    checkIfItemHasSaved();
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      setData(undefined);
      setKeyFromTrailer("");
      setSaved(false);
      if (id && original_title) {
        loadData();
      }
    }, [id])
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <View position="absolute" top="$3" left="$2" w="$24" zIndex={100}>
            <ButtonBack />
          </View>
          <ScrollView mb="$16" showsVerticalScrollIndicator={false}>
            <View w="$full" h="$64" rounded="$xl">
              <Image
                rounded="$xl"
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`
                }}
                size="full"
                resizeMode="cover"
                alt="Imagem de um filme"
              />
            </View>

            <Heading color="$white" my="$4">
              {data?.title || data?.original_name}
            </Heading>
            <View flexDirection="row" justifyContent="space-between">
              <View flexDirection="column">
                {data?.number_of_seasons ? (
                  <View flexDirection="row" gap="$1">
                    <Text color="$gray600">Temporadas:</Text>
                    <Text color="$gray500">{data?.number_of_seasons}</Text>
                  </View>
                ) : (
                  <View flexDirection="row" gap="$1">
                    <Text color="$gray600">Duração:</Text>
                    <Text color="$gray500">{duration}</Text>
                  </View>
                )}
                <View flexDirection="row" gap="$1">
                  <Text color="$gray600">Lançamento:</Text>
                  <Text color="$gray500">{releaseDate}</Text>
                </View>
              </View>
              <View
                w="$24"
                rounded="$md"
                bgColor="$gray300"
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
                gap="$2"
              >
                <StarIcon color={colors.purpleBase} weight="fill" size={17} />
                <Text color="$white">{data?.vote_average.toFixed(1)}</Text>
                <Text color="$gray500" fontSize="$sm" mt="$1">
                  / 10
                </Text>
              </View>
            </View>
            <Divider my="$4" bgColor="$gray300" />
            <Text color="$gray600">{data?.overview}</Text>

            <Divider my="$4" bgColor="$gray300" />
          </ScrollView>

          <View
            flexDirection="row"
            gap="$3"
            w="$full"
            flex={1}
            alignItems="flex-end"
          >
            <Pressable
              w="$12"
              h="$12"
              bgColor="$gray300"
              alignItems="center"
              justifyContent="center"
              onPress={handleSave}
            >
              <BookmarkIcon
                color={colors.purpleBase}
                size={24}
                weight={saved ? "fill" : "regular"}
              />
            </Pressable>

            <Button
              bgColor="$purpleBase"
              gap="$2"
              rounded="$md"
              flex={1}
              h="$12"
              onPress={openYoutube}
            >
              <YoutubeLogoIcon color={colors.white} />
              <Text color="$white">Assistir ao trailer</Text>
            </Button>
          </View>
        </Container>
      )}
    </>
  );
}
