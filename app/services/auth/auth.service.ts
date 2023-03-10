import { removeTokensStorage, saveToStorage } from "./auth.helper";
import { getAuthUrl } from "@/config/api.config";
import { IAuthResponse } from "@/store/user/user.interface";
import { getContentType } from "api/api.helpers";
import { axiosClassic } from "api/interseptors";
import Cookies from "js-cookie";

export const AuthService = {
  async register(email: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>(
      getAuthUrl("/register"),
      { email, password }
    );

    if (response.data.accessToken) saveToStorage(response.data);

    return response;
  },

  async login(email: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>(
      getAuthUrl("/login"),
      { email, password }
    );

    if (response.data.accessToken) saveToStorage(response.data);

    return response;
  },

  logout() {
    removeTokensStorage();
    localStorage.removeItem("user");
  },

  async getNewToken() {
    const refreshToken = Cookies.get("refreshToken");
    const response = await axiosClassic.post<IAuthResponse>(
      getAuthUrl("/login/access-token"),
      { refreshToken },
      { headers: getContentType() }
    );

    if (response.data.accessToken) saveToStorage(response.data);

    return response;
  },
};
