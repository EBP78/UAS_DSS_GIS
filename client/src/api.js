import axios from "axios";

const url = "http://localhost:5000/";

export const getData = async () => {
  const data = await axios.get(`${url}data`);
  return data.data.data;
};

export const topsis = async () => {
  const result = axios.get(`${url}topsis`);
  return result;
};
