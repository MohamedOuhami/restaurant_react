import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      let res = await fetch("http://localhost:8080/api/v1/users/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (res.status === 200) {
        const data = await res.text(); // Get the response as text
        console.log("Response Data:", data);
        setMessage(data)
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <h1>User Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      <p>{message}</p>
    </>
  );
}
export default Login;
