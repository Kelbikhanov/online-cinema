import { ChangeEvent, useState, useMemo } from "react";
import { useMutation, useQuery } from "react-query";
import { ITableItem } from "@/components/ui/admin-table/admin-table/admin-table.interface";
import { getAdminUrl } from "@/config/url.config";
import { useDebounce } from "@/hooks/useDebounce";
import { GenreService } from "@/services/genre.service";
import { convertMongoDate } from "@/utils/date/convertMongoDate";
import { toastError } from "@/utils/toast-error";
import { toastr } from "react-redux-toastr";

export const useGenres = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const debounceSearch = useDebounce(searchTerm, 500);

  const queryData = useQuery(
    ["genre list", debounceSearch],
    () => GenreService.getAll(debounceSearch),
    {
      select: ({ data }) => data.map(
        (genre): ITableItem => ({
          _id: genre._id,
          editUrl: getAdminUrl(`genre/edit/${genre._id}`),
          items: [genre.name, genre.slug],
        })
      ),

      onError(error) {
				toastError(error, 'genre list')
			},
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSerchTerm(e.target.value);
  };

  const { mutateAsync: deleteAsync } = useMutation(
		'delete genre',
		(genreId: string) => GenreService.deleteGenre(genreId),
		{
			onError(error) {
				toastError(error, 'Delete genre')
			},
			onSuccess() {
				toastr.success('Delete genre', 'delete was successful')
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
