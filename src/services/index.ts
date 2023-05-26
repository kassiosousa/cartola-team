import { api } from "./api";

export const loadMarketStatus = async () => {
  try {
    const response = await api.get("mercado/status");
    return response.data;
  } catch (error) {
    console.log("erro");
  }
};

export const loadTeamData = async () => {
  try {
    const response = await api.get("time/id/42163");
    return response.data;
  } catch (error) {
    console.log("erro");
  }
};
