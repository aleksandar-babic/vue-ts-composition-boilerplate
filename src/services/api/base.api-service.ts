import axios from "axios";

/* eslint-disable */
class BaseApiService {
  readonly baseApiUrl = process.env.VUE_APP_CORE_API_BASE_URL;

  get<T>(suffix: string) {
    return axios.get<T>(`${this.baseApiUrl}/${suffix}`);
  }

  post<T>(suffix: string, payload: Record<string, any>) {
    return axios.post<T>(`${this.baseApiUrl}/${suffix}`, payload);
  }

  put<T>(suffix: string, payload: Record<string, any>) {
    return axios.put<T>(`${this.baseApiUrl}/${suffix}`, payload);
  }

  delete<T>(suffix: string) {
    return axios.delete<T>(`${this.baseApiUrl}/${suffix}`);
  }
}

export default BaseApiService;
