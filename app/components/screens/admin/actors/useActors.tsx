import { ChangeEvent, useState, useMemo } from "react";
import { useMutation, useQuery } from "react-query";
import { ITableItem } from "@/components/ui/admin-table/admin-table/admin-table.interface";
import { getAdminUrl } from "@/config/url.config";
import { useDebounce } from "@/hooks/useDebounce";
import { ActorService } from "@/services/actor.service";
import { convertMongoDate } from "@/utils/date/convertMongoDate";
import { toastError } from "@/utils/toast-error";
import { toastr } from "react-redux-toastr";

export const useActors = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const debounceSearch = useDebounce(searchTerm, 500);

  const queryData = useQuery(
    ["actor list", debounceSearch],
    () => ActorService.getAll(debounceSearch),
    {
      select: ({ data }) => data.map(
        (actor): ITableItem => ({
          _id: actor._id,
          editUrl: getAdminUrl(`actor/edit/${actor._id}`),
          items: [actor.name, String(actor.countMovies)],
        })
      ),

      onError(error) {
				toastError(error, 'actor list')
			},
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSerchTerm(e.target.value);
  };

  const { mutateAsync: deleteAsync } = useMutation(
		'delete actor',
		(actorId: string) => ActorService.deleteActor(actorId),
		{
			onError(error) {
				toastError(error, 'Delete actor')
			},
			onSuccess() {
				toastr.success('Delete actor', 'delete was successful')
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
