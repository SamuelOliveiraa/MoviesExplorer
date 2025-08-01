import { removeFavorite } from "@/storage/FavoriteStorage";
import { CardMovieType } from "@/types/MovieType";
import colors from "@/utils/colors";
import { Image, Pressable, Text, View } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  CircleIconIcon,
  StarIcon,
  TrashSimpleIcon
} from "phosphor-react-native";

export default function Card({
  title,
  year,
  stars,
  image,
  id,
  remove
}: CardMovieType) {
  function handleMovieDetails() {
    router.navigate({
      pathname: "/(tabs)/(stack)/MovieDetails",
      params: { id, original_title: title }
    });
  }

  async function handleRemove() {
    await removeFavorite(id);
  }

  return (
    <Pressable onPress={handleMovieDetails}>
      <View w="$40" h="$64" borderRadius="$md" overflow="hidden">
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${image}`
          }}
          size="full"
          resizeMode="cover"
          alt="Imagem de um filme"
        />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.99)"]}
          style={{
            position: "absolute",
            bottom: 0,
            height: "50%",
            width: "100%"
          }}
        />

        <View
          position="absolute"
          h="$full"
          w="$full"
          bottom={0}
          alignContent="flex-end"
          justifyContent="flex-end"
          px="$2"
          pb="$2"
          gap={4}
        >
          <Text color="$white" fontSize="$sm" fontWeight="bold">
            {title}
          </Text>
          <View flexDirection="row" gap={10} alignItems="center">
            <StarIcon weight="fill" size={14} color={colors.gray700} />
            <Text color="$gray700" size="xs">
              {stars}
            </Text>
            <CircleIconIcon weight="fill" size={8} color={colors.gray700} />
            <Text color="$gray700" size="xs">
              {year}
            </Text>
          </View>
        </View>
        {remove && (
          <Pressable
            w="$9"
            h="$9"
            top={3}
            right={3}
            bgColor="$gray200"
            position="absolute"
            borderRadius="$md"
            alignItems="center"
            justifyContent="center"
            onPress={handleRemove}
          >
            <TrashSimpleIcon color={colors.purpleLight} size={20} />
          </Pressable>
        )}
      </View>
    </Pressable>
  );
}
