import axiosInstance from "./axiosConfig";

export const calculateFare = async (data, token) => {
  try {
    const response = await axiosInstance.post("/ride/fare", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to calculate fare");
  }
};

export const createRide = async (data, token) => {
  try {
    console.log(data, token);
    const response = await axiosInstance.post("/ride/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to create ride");
  }
};
