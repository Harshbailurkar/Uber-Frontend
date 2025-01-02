import axiosInstance from "./axiosConfig";

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users/register", userData);
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

export const loginUser = async (loginData) => {
  try {
    const response = await axiosInstance.post("/users/login", loginData);
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
export const logoutUser = async () => {
  try {
    const response = await axiosInstance.post("/users/logout");
    return response.data;
  } catch (error) {
    if (error.response.status == 500) {
      throw new Error("Failed to logout");
    }
    throw error.response ? error.response.data : new Error("failed to logout");
  }
};
export const getUser = async (token) => {
  try {
    const response = await axiosInstance.post(
      "/users/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      throw new Error("Failed to get user");
    }
    throw error.response
      ? error.response.data
      : new Error("Failed to get user");
  }
};
