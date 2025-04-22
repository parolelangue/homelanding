
import axios from "axios";
const apiServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

apiServer.interceptors.request.use(
  async (config) => {
    if (typeof window === "undefined") {
      // set token
      const cookies = (await import("next/headers")).cookies;
      config.params = {
        ...config.params,
        // locale:
        //   cookies().get("topdev_locale")?.value === "vi" ? "vi_VN" : "en_US",
      };

      // Only set source when in backend call
    //   config.headers.set("X-Topdev-Source", "FrontendV4-Server");
    } else {
      config.params = { ...config.params };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);


apiServer.interceptors.response.use((response) => {
  return response;
});

export default apiServer;