import { IMovie } from "@/shared/types/movie.types";

export interface IMovieList {
    title: string;
	link: string;
    movie: IMovie[];
}