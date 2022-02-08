import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:5000/api" });

function Login() {
  async function login(requestBody) {
    console.log(requestBody);
    const user = await api.post("/login", requestBody);
    console.log(user);
  }

  let requestBody = {};
  function handleSubmit(event) {
    event.preventDefault();
    requestBody = {
      name: event.target[0].value,
      password: event.target[1].value,
    };
    login(requestBody);
  }
  return (
    <div>
      <p>Please Login here</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input type="text" name="name" />
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
