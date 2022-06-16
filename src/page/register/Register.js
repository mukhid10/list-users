import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../component/button";
import Gap from "../../component/gap";
import Input from "../../component/input";
import Link from "../../component/link";
import "./register.scss";

function Register() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    if (
      register.nama === "" ||
      register.email === "" ||
      register.password === ""
    ) {
      alert("Form register ada yang belum di isi");
    } else {
      localStorage.setItem("register", JSON.stringify(register));
      alert("register Success");
      navigate("/");
    }
  };

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="main-page">
      <div className="left">
        <img
          className="bg-image"
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="imageBG"
        />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input
          label="Full Name"
          placeholder="Full Name"
          name="nama"
          value={register.nama}
          onChange={handleChange}
        />
        <Gap height={10} />
        <Input
          label="Email"
          placeholder="Email"
          name="email"
          value={register.email}
          onChange={handleChange}
        />
        <Gap height={10} />
        <Input
          label="Password"
          placeholder="Password"
          name="password"
          value={register.password}
          onChange={handleChange}
        />
        <Gap height={10} />
        <Button title="Register" onClick={() => handleRegister()} />
        <Gap height={5} />
        <Link
          title="Kembali ke halaman Login"
          onClick={() => {
            handleClick();
          }}
        />
      </div>
    </div>
  );
}

export default Register;
