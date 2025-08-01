export type MovieDetailsProps = {
  id: number;
  title: string;
  backdrop_path: string;
  original_name: string;
  overview: string;
  poster_path: string;
  release_date: string;
  first_air_date?: string;
  runtime: number;
  status: string;
  vote_average: number;
  number_of_seasons: number;
  type: "movie" | "tv";
};

export type MovieProps = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  original_name?: string;
  first_air_date?: string;
  vote_average: number;
  popularity: number;
  media_type: "movie" | "tv";
};

export type CardMovieType = {
  id: number;
  title: string;
  year: string;
  stars: string;
  image: string;
  remove?: boolean
};
