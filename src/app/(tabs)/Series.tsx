import CardsContainer from "@/components/CardsContainer";
import Container from "@/components/Container";
import HeaderPages from "@/components/HeaderPages";
import Loading from "@/components/Loading";
import { fetchData } from "@/hooks/api";
import { MovieProps } from "@/types/MovieType";
import { MonitorPlayIcon } from "phosphor-react-native";
import { useEffect, useState } from "react";

export default function Series() {
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState<MovieProps[]>([]);

  async function loadSeries() {
    setLoading(true);
    const seriesData: { results: MovieProps[] } = await fetchData(
      "/tv/popular"
    );

    if (seriesData.results) {
      setSeries(
        seriesData.results.sort((a, b) => b.vote_average - a.vote_average)
      );
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSeries();
  }, []);

  return (
    <Container>
      <HeaderPages
        title="Series"
        description="Escolha a sua proxima serie para maratonar esse fim de semana."
        Icon={MonitorPlayIcon}
      />
      {loading ? <Loading /> : <CardsContainer data={series} />}
    </Container>
  );
}
