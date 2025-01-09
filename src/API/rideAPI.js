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

export const rideConfirm = async (data, token) => {
  try {
    const response = await axiosInstance.post("/ride/confirm", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to confirm ride");
  }
};

export const startRide = async (data, token) => {
  try {
    const response = await axiosInstance.post("/ride/start-ride", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to start ride");
  }
};

export const finishRide = async (data, token) => {
  try {
    const response = await axiosInstance.post("/ride/end-ride", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to end ride");
  }
};
