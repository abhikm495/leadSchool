import axios from "axios";

const BASE_URL = "https://www.zippopotam.us/in";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {});
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
