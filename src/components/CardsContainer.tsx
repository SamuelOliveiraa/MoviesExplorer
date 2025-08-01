import { MovieProps } from "@/types/MovieType";
import { View } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import Card from "./Card";
import EmptyComponent from "./EmptyComponent";

type Props = {
  data: MovieProps[];
  remove?: boolean
};

export default function CardsContainer({ data, remove}: Props) {
  function getYear(date: string | undefined) {
    return date?.slice(0, 4) || "";
  }

  return (
    <View mt="$4" gap="$5">
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          gap: 20,
          justifyContent: "center"
        }}
        contentContainerStyle={{
          gap: 20,
          alignItems: "center"
        }}
        ListFooterComponent={() => <View mt="$32" />}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            title={item.title || item.original_name || ""}
            year={getYear(item.release_date || item.first_air_date)}
            stars={item.vote_average.toFixed(1)}
            image={item.poster_path}
            remove={remove}
          />
        )}
        ListEmptyComponent={
          <EmptyComponent text="Infelizmente não há filmes/series para mostrar" />
        }
      />
    </View>
  );
}
