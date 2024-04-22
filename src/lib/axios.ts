import axios from "axios";

const apiUrl = import.meta.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://my-json-server.typicode.com/matheralvs/ControlFinance/";

export const api = axios.create({
  baseURL: apiUrl,
});
