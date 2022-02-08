import React from "react";

function Signup() {
  return (
    <div>
      <p>Please sign up here</p>
      <form>
        <label>
          Username
          <input type="text"></input>
        </label>
        <br/>
        <label>
          Password
          <input type="text"></input>
        </label>
        <br/>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
