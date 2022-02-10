import useLogin from "../customHooks/login";

function Login() {
  const { loggedIn, handleSubmit } = useLogin();

  return (
    <div>
      {loggedIn.authed ? (
        <p>Hello {loggedIn.name}</p>
      ) : (
        <p>You are logged in yet</p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input type="text" name="name" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
