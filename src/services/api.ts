import axios from "axios";

const proxy = "https://cors-anywhere.herokuapp.com";

export const api = axios.create({
  baseURL: `${proxy}/https://api.cartolafc.globo.com/`,
});
