import styles from "./MovieList.module.scss";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { getMovieUrl } from "@/config/url.config";
import { IMovie } from "@/shared/types/movie.types";
import { getGenresListEach } from "@/utils/movie/getGenresList";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const MovieItem: FC<{ movie: IMovie[] }> = ({ movie }) => {
  return (
    <div className={styles.item}>
      <Link href={getMovieUrl(movie.slug)}>
        <Image
          width={65}
          height={97}
          src={movie.poster}
          alt={movie.title}
          draggable={false}
          priority
        />
      </Link>
      <div className={styles.info}>
        <div>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.genres}>
            {movie.genres.map((genre, idx) => {
              return (
                <Link key={genre._id} href={getMovieUrl(genre.slug)}>
                  {getGenresListEach(idx, movie.genres.length, genre.name)}
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styles.rating}>
          <MaterialIcon name="MdStarRate" />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
