import { useContext } from "react";
import UserContext from "../context/user/UserContext";
import axios from "axios";

const useAxios = () => {
  const { user } = useContext(UserContext);

  let instance;

  if (user) {
    instance = axios.create({
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    instance.interceptors.request.use((config) => {
      const payload = { ...config.data, user };
      config.data = payload;
      return config;
    });
  } else {
    instance = axios.create();
  }

  return instance;
};

export default useAxios;
