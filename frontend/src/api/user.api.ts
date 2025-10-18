import axios from "axios";

const userApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/user`,
});

export const createUser = async (user: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await userApi.post("/", user);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
