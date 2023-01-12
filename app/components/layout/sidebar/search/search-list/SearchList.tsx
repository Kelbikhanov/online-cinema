import styles from "./SearchList.module.scss";
import { getMovieUrl } from "@/config/url.config";
import { IMovie } from "@/shared/types/movie.types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => {
          return (
            <Link key={movie._id} href={getMovieUrl(movie.slug)}>
              <Image
                src={movie.poster}
                alt={movie.title}
                width={50}
                height={50}
                objectFit="cover"
                objectPosition="top"
                draggable={false}
              />
              <span>{movie.title}</span>
            </Link>
          );
        })
      ) : (
        <div className="text-white text-center my-4">Movie not found!</div>
      )}
    </div>
  );
};

export default SearchList;
