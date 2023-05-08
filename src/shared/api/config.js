import axios from "axios";
import Utils from "../helpers/utils";
import { ERROR_CODES } from "../constants/request";
import StorageUtils from "../helpers/storageUtils";

export const BASE_API_URL = "https://jsonplaceholder.typicode.com/";
const LANGUAGE_DEFAULT = "en";

const httpClient = axios.create({
  baseURL: BASE_API_URL,
});

// add a request interceptor
httpClient.interceptors.request.use((request) => requestHandler(request));

// add a response interceptor
httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => responseErrorHandler(error)
);

export default httpClient;

const requestHandler = (request) => {
  request.withCredentials = false;
  //   request.xsrfHeaderName = 'X-CSRFToken';
  //   request.xsrfCookieName = 'csrftoken';
  request.params = Utils.removeEmptyValueProperty(request.params);
  const accessToken = StorageUtils.get("accessToken");
  request.headers = {
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    "Accept-Language": StorageUtils.get("lang") || LANGUAGE_DEFAULT,
  };
  return request;
};

let refreshing = null;
const responseErrorHandler = async (axiosError) => {
  // const originalConfig = axiosError.config;
  // if (axiosError.response?.status === ERROR_CODES.invalidToken) {
  //   try {
  //     refreshing = refreshing || refreshToken(1);
  //     const { token } = await refreshing;
  //     StorageUtils.set("accessToken", token);
  //     return httpClient(originalConfig);
  //   } catch (error) {
  //     console.log("refresh token error", error);
  //     StorageUtils.clearToken();
  //     redirectToLogin();
  //     return Promise.reject(parseError(error));
  //   } finally {
  //     refreshing = null;
  //   }
  // }
  console.log("fetch error: ", axiosError);
  return Promise.reject(parseError(axiosError));
};

/**
 * Refesh token expired
 * @returns {string}
 */
export const refreshToken = async () => {
  return new Promise((resolve, reject) => {
    const token = StorageUtils.getRefreshToken();
    const refreshUrl = `${BASE_API_URL}account/auth/refresh-token/`;
    const request = () => {
      axios
        .post(refreshUrl, { refresh_token: token })
        .then((res) => resolve(res.data))
        .catch((error) => {
          console.log("Error refreshing");
          reject(error);
        });
    };

    request();
  });
};

/**
 * @param {Object} axiosError
 * @returns {string}
 */
const parseError = (axiosError) => {
  const defaultErr = {
    detail: "Something was wrong!",
  };
  const { data } = axiosError?.response ?? {};
  return data || defaultErr;
};
