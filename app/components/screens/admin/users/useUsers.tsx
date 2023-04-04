import { ChangeEvent, useState, useMemo } from "react";
import { useMutation, useQuery } from "react-query";
import { ITableItem } from "@/components/ui/admin-table/admin-table/admin-table.interface";
import { getAdminUrl } from "@/config/url.config";
import { useDebounce } from "@/hooks/useDebounce";
import { UserService } from "@/services/user.service";
import { convertMongoDate } from "@/utils/date/convertMongoDate";
import { toastError } from "@/utils/toast-error";
import { toastr } from "react-redux-toastr";

export const useUsers = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const debounceSearch = useDebounce(searchTerm, 500);

  const queryData = useQuery(
    ["user list", debounceSearch],
    () => UserService.getAll(debounceSearch),
    {
      select: ({ data }) => data.map(
        (user): ITableItem => ({
          _id: user._id,
          editUrl: getAdminUrl(`user/edit/${user._id}`),
          items: [user.email, convertMongoDate(user.createdAt)],
        })
      ),

      onError(error) {
				toastError(error, 'user list')
			},
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSerchTerm(e.target.value);
  };

  const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: string) => UserService.deleteUser(userId),
		{
			onError(error) {
				toastError(error, 'Delete user')
			},
			onSuccess() {
				toastr.success('Delete user', 'delete was successful')
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
