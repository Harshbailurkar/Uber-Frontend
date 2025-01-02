import axiosInstance from "./axiosConfig";

export const registerCaptain = async (captainData) => {
  try {
    const response = await axiosInstance.post("/captain/register", captainData);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error("Failed to register");
    } else if (error.response.status === 400) {
      throw new Error("Username or email already exists");
    } else if (error.response.status === 402) {
      throw new Error("please provide all the details");
    }
    throw error.response
      ? error.response.data
      : new Error("Failed to register");
  }
};

export const loginCaptain = async (loginData) => {
  try {
    const response = await axiosInstance.post("/captain/login", loginData);
    return response.data;
  } catch (error) {
    if (error.response.status === 400) {
      throw new Error("Invalid credentials");
    } else if (error.response.status === 404) {
      throw new Error("User Not Found");
    }
    throw error.response ? error.response.data : new Error("Login failed");
  }
};

export const logoutCaptain = async () => {
  try {
    const response = await axiosInstance.post("/captain/logout");
    return response.data;
  } catch (error) {
    if (error.response.status == 500) {
      throw new Error("Failed to logout");
    }
    throw error.response ? error.response.data : new Error("failed to logout");
  }
};
