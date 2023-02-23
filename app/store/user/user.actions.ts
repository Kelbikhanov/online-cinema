/* register */
import { IAuthResponse, InterfaceEmailPassword } from "./user.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "@/services/auth/auth.service";
import { toastr } from "react-redux-toastr";
import { toastError } from "@/utils/toast-error";
import { errorCatch } from "api/api.helpers";

export const register = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
  "auth/register",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.register(email, password)
      toastr.success('Registration', 'Completed successfully')
      return response.data

    } catch (error) {
      toastError(error)
      return thunkApi.rejectWithValue(error)
    }
  }
);

export const login = createAsyncThunk<IAuthResponse, InterfaceEmailPassword>(
  "auth/login",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.register(email, password)
      toastr.success('Login', 'Completed successfully')
      return response.data

    } catch (error) {
      toastError(error)
      return thunkApi.rejectWithValue(error)
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async() => {
  await AuthService.logout()
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getNewToken()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorizaiton is finished, plz sign in again'
				)
				thunkAPI.dispatch(logout())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)