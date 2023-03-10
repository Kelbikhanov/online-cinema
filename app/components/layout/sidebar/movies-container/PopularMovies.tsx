import MovieList from "./MovieList";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import { MovieService } from "@/services/movie.service";
import { FC } from "react";
import { useQuery } from "react-query";

const PopularMovies: FC = () => {
  const { isLoading, data: popularMovies } = useQuery(
    "popular movies in idebar",
    () => MovieService.getMostPopularMovies()
  );
  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="h-28 mb-4" />
    </div>
  ) : (
    <MovieList
      link="/trending"
      movies={popularMovies || []}
      title="Popular movies"
    />
  );
};

export default PopularMovies;
