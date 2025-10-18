import axios from "axios";

const authApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
});

export const loginUser = async (user: { email: string; password: string }) => {
  try {
    const response = await authApi.post("/login", user);

    console.log(response.data.data);

    return response.data.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    // console.log(error);
  }
};

export const registerUser = async (user: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await authApi.post("/register", user);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
