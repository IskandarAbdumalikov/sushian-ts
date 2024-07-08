import { FC, useState } from "react";
import Module from "../../components/module/Module";
import "./login.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Login: FC = () => {
  const [inLogin, setInLogin] = useState<boolean>(true);
  const [eye, setEye] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://nest-project-khaki.vercel.app/auth/login",
        {
          email,
          password,
        }
      );
      alert("Login successful");
      setEmail("");
      setPassword("");
      setName("");
      console.log(response.data);
    } catch (error) {
      alert("Login failed");
      console.error(error);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://nest-project-khaki.vercel.app/auth/signup",
        {
          name,
          email,
          password,
        }
      );
      alert("Registration successful");
      setEmail("");
      setPassword("");
      setName("");
      console.log(response.data);
    } catch (error) {
      alert("Registration failed");
      console.error(error);
    }
  };

  return (
    <div className="container login">
      {inLogin ? (
        <Module>
          <form onSubmit={handleLogin}>
            <h2
              style={{ textAlign: "center", fontSize: 30, paddingBottom: 20 }}
            >
              Login
            </h2>
            <div style={{ paddingBottom: 30 }} className={"login__header"}>
              <h2
                className={inLogin ? "login" : ""}
                onClick={() => setInLogin(true)}
              >
                Sign in
              </h2>
              <h2
                className={inLogin ? "" : "register"}
                onClick={() => setInLogin(false)}
              >
                Create account
              </h2>
            </div>
            <div className="login__body">
              <input
                required
                placeholder="Email address *"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password">
                <input
                  required
                  placeholder="Password *"
                  type={eye ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="eye-btn"
                  type="button"
                  onClick={() => setEye((p) => !p)}
                >
                  {eye ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="remember">
                <input
                  name="remember__inp"
                  id="remember__inp"
                  type="checkbox"
                />
                <label htmlFor="remember__inp">Remember me</label>
              </div>
              <button type="submit">SIGN IN</button>
              <div
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => setInLogin(false)}
              >
                Don`t have an account?
                <a href="#">Register?</a>
              </div>
            </div>
          </form>
        </Module>
      ) : (
        <Module>
          <form onSubmit={handleRegister}>
            <h2
              style={{ textAlign: "center", fontSize: 30, paddingBottom: 20 }}
            >
              Register
            </h2>
            <div style={{ paddingBottom: 30 }} className={"login__header"}>
              <h2
                className={inLogin ? "login" : ""}
                onClick={() => setInLogin(true)}
              >
                Sign in
              </h2>
              <h2
                className={inLogin ? "" : "register"}
                onClick={() => setInLogin(false)}
              >
                Create account
              </h2>
            </div>
            <div className="login__body">
              <input
                required
                className="name"
                placeholder="name *"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                className="email"
                placeholder="Email address *"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password">
                <input
                  required
                  placeholder="Password *"
                  type={eye ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="eye-btn"
                  type="button"
                  onClick={() => setEye((p) => !p)}
                >
                  {eye ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="remember">
                <input
                  name="remember__inp"
                  id="remember__inp"
                  type="checkbox"
                />
                <label htmlFor="remember__inp">Remember me</label>
              </div>
              <button type="submit">CREATE</button>
              <div
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => setInLogin(true)}
              >
                Have you account?
                <a href="#">SIGN UP?</a>
              </div>
            </div>
          </form>
        </Module>
      )}
    </div>
  );
};

export default Login;
