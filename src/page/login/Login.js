import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../component/button";
import Gap from "../../component/gap";
import Input from "../../component/input";
import Link from "../../component/link";
import "../register/register.scss";

function Login() {
  const navigate = useNavigate();

  const dataRegister = JSON.parse(localStorage.getItem("register"));

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (
      login.email === dataRegister.email &&
      login.password === dataRegister.password
    ) {
      alert("Login Success");
      sessionStorage.setItem("isLogin", true);
      navigate("/users");
    } else {
      alert("Password atau Email Salah");
    }
  };

  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div className="main-page">
      <div className="left">
        <img
          className="bg-image"
          src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlc3QlMjB3b3JrJTIwaW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="imageBG"
        />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input
          label="Email"
          placeholder="Email"
          name="email"
          value={login.email}
          onChange={handleChange}
        />
        <Gap height={10} />
        <Input
          label="Password"
          placeholder="Password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <Gap height={10} />
        <Button title="Login" onClick={handleLogin} />
        <Gap height={5} />
        <Link
          title="Tidak punya akun klik disini untuk Register"
          onClick={() => {
            handleClick();
          }}
        />
      </div>
    </div>
  );
}

export default Login;
