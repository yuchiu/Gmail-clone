import axios from "axios";
import { localStore } from "@/utils";

const API_V1 = () =>
  axios.create({
    baseURL: `http://localhost:3030/api/v1`,
    headers: {
      Authorization: `Bearer ${localStore.getToken()}`
    }
  });

export { API_V1 };
