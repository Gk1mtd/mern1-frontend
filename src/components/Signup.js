import React from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios");
const api = axios.create({ baseURL: "http://localhost:5000/api" });

function Signup() {
  const [badrequest, setBadrequest] = React.useState(false);
  const navigator = useNavigate();

  async function signup(userData) {
    try {
      // console.log("bla");
      const { status } = await api.post("/signup", userData);
      if (status === 200) {
        navigator("/login");
      }
    } catch (error) {
      setBadrequest(true);
    }
  }
  return (
    <div>
      <p>Please sign up here</p>
      {badrequest && (
        <p>User already in use or missing Username and Password</p>
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const userData = {
            name: event.target.name.value,
            password: event.target.password.value,
          };
          signup(userData);
        }}
      >
        <label htmlFor="name">
          Username
          <input type="text" name="name"></input>
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input type="password" name="password"></input>
        </label>
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
