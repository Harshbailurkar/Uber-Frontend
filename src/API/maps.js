import axiosInstance from "./axiosConfig";

export const getSuggestions = async (data, token) => {
  try {
    const response = await axiosInstance.get("/maps/get-suggestions", {
      params: data, // Query parameters
      headers: {
        Authorization: `Bearer ${token}`, // Authorization header with token
      },
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to get suggestions");
  }
};

export const getDistanceTime = async (data) => {
  //{{url}}/maps/get-distance-time?origin=PHN technology viman nagar pune&destination=somnath nagar pune
  try {
    const response = await axiosInstance.get("/maps/get-distance-time", {
      params: data,
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to get distance and time");
  }
};

export const getCordinates = async (data) => {
  //{{url}}/maps/get-cordinates?address=PHN technology viman nagar pune
  try {
    const response = await axiosInstance.get("/maps/get-cordinates", {
      params: data,
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to get cordinates");
  }
};
