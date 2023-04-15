import { ChangeEvent, useState, useMemo } from "react";
import { useMutation, useQuery } from "react-query";
import { ITableItem } from "@/components/ui/admin-table/admin-table/admin-table.interface";
import { getAdminUrl } from "@/config/url.config";
import { useDebounce } from "@/hooks/useDebounce";
import { MovieService } from "@/services/movie.service";
import { convertMongoDate } from "@/utils/date/convertMongoDate";
import { toastError } from "@/utils/toast-error";
import { toastr } from "react-redux-toastr";
import { getGenresList } from "@/utils/movie/getGenresList";

export const useMovies = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const debounceSearch = useDebounce(searchTerm, 500);

  const queryData = useQuery(
    ["movie list", debounceSearch],
    () => MovieService.getAll(debounceSearch),
    {
      select: ({ data }) => data.map(
        (movie): ITableItem => ({
          _id: movie._id,
          editUrl: getAdminUrl(`movie/edit/${movie._id}`),
          items: [movie.title, getGenresList(movie.genres), String(movie.rating)],
        })
      ),

      onError(error) {
				toastError(error, 'movie list')
			},
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSerchTerm(e.target.value);
  };

  const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => MovieService.deleteMovie(movieId),
		{
			onError(error) {
				toastError(error, 'Delete movie')
			},
			onSuccess() {
				toastr.success('Delete movie', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	)
};
