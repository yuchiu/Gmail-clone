import { API_V1 } from "./api";

export default {
  autoAuth: async () => {
    const response = await API_V1().get(`/auths`);
    return response;
  },
  registerUser: async credentials => {
    const response = await API_V1().post(`/auths`, credentials);
    return response;
  },

  loginUser: async credentials => {
    const response = await API_V1().post(
      `/auths/${credentials.username}`,
      credentials
    );
    return response;
  }
};
