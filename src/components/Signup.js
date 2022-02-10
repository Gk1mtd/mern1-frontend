import React from "react";
import useSignup from "../customHooks/signup";

function Signup() {
  const { badrequest, signup } = useSignup();

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
