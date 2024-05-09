import axios from 'axios';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (pageNumber = 1, pageSize = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        pageNumber,
        pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
