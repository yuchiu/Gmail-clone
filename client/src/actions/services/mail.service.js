import { API_V1 } from "./api";

export default {
  fetchMailList: async () => {
    const response = await API_V1().get(`/mails`);
    return response;
  }
};
