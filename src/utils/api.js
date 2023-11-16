import axios from "axios";

const BASE_URL = "/.functions/proxy?path=";

export const fetchDataFromApi = async (postcode) => {
  const apiUrl = `${BASE_URL}${postcode}`;

  try {
    const { data } = await axios.get(apiUrl);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
