import React from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios");
const api = axios.create({ baseURL: "http://localhost:5000/api" });

function useSignup() {
  const [badrequest, setBadrequest] = React.useState(false);
  const navigateTo = useNavigate();

  async function signup(userData) {
    try {
      console.log("in custom hook signup");
      const { status } = await api.post("/signup", userData);
      if (status === 200) {
        navigateTo("/login");
      }
    } catch (error) {
      setBadrequest(true);
    }
  }
  return { badrequest, signup };
}

export default useSignup;
