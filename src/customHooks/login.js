import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/api" });

function useLogin() {
  const navigateTo = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState({ authed: false, name: "" });

  async function login(requestBody) {
    console.log(requestBody);
    const user = await api.post("/login", requestBody);
    console.log(user.data.message);
    setLoggedIn({ ...loggedIn, name: requestBody.name, authed: true });
    console.log(loggedIn);
  }

  let requestBody = {};
  function handleSubmit(event) {
    event.preventDefault();
    requestBody = {
      name: event.target[0].value,
      password: event.target[1].value,
    };
    login(requestBody);
    // navigateTo("/")
  }
  return { handleSubmit, loggedIn };
}

export default useLogin;
