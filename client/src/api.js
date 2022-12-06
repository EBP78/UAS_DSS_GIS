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

export const insertData = async (data) => {
  const res = await axios.post(`${url}data`, data);
  return res;
};

export const deleteData = async (id) => {
  const res = await axios.delete(`${url}data/${id}`);
  return res;
};

export const loginUser = async (name, pass) => {
  const hasil = await axios.get(`${url}user/${name}/${pass}`);
  console.log(`${url}user/${name}/${pass}`);
  return hasil;
};
