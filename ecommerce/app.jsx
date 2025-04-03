import { useState } from "react";
import "./app.css"; // Import external CSS
import logo from "./assets/amazon-logo.png"; // Import logo correctly

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Logging in with: ${email}`);
  };

  return (
    <div className="amazon-container">
      <div className="login-box">
        <img src={logo} alt="Amazon Logo" className="logo" />

        <h2>Sign in</h2>
        <div className="input-box">
          <label>Email or mobile phone number</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <button onClick={handleLogin} className="sign-in-btn">
          Sign in
        </button>
        <p className="help">
          <a href="#">Forgot password?</a>
        </p>
        <hr />
        <button className="create-account-btn">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}
