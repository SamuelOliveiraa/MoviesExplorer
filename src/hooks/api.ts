import axios from "axios";

import Constants from "expo-constants";

const { API_URL, API_TOKEN, API_KEY } = Constants.expoConfig?.extra || {};

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
});

export async function fetchData(endpoint: string) {
  try {
    const res = await api.get(endpoint);
    return res.data;
  } catch (error: any) {
    // Só loga se não for um erro 404, por exemplo
    if (error.response?.status !== 404) {
      console.error("Erro na API:", error);
    }
    throw error;
  }
}

export default api;
