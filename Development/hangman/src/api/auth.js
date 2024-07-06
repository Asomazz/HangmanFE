import instance from ".";
import { storeToken } from "./storage";

const register = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/register", userInfo);
    if (data.token) {
      storeToken(data.token);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { register };
