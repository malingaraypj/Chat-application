import axios from "axios";

const authApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
});

export const loginUser = async (user: { email: string; password: string }) => {
  try {
    const response = await authApi.post("/login", user);
    return response.data;
  } catch (error) {
    let errMsg = "some error occured while logging user";
    if (axios.isAxiosError(error)) {
      errMsg = error.response?.data?.message || errMsg;
    }
    console.error("Error logging in user:", errMsg);
    throw errMsg;
  }
};

export const registerUser = async (user: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await authApi.post("/register", user);
    return response.data;
  } catch (error) {
    let errMsg = "some error occured while registering user";
    if (axios.isAxiosError(error)) {
      errMsg = error.response?.data?.message || errMsg;
    }
    console.error("Error registering user:", errMsg);
    throw errMsg;
  }
};
