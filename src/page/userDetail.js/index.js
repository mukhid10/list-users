import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../component/button";
import "./userdetail.scss";

function UserDetail() {
  const userId = JSON.parse(localStorage.getItem("userByID"));
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const getDataById = async () => {
    const result = await axios.get(userId);
    setData(result.data.data);
  };

  const handleClick = () => {
    navigate("/users");
  };

  useEffect(() => {
    getDataById();
  }, [userId]);

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-3">User Detail</h1>
        <div className="userDetail">
          <div className="left">
            <img src={data.avatar} alt="" />
          </div>
          <div className="right">
            <table>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>: {data.id}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>
                    : {data.first_name} {data.last_name}
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>: {data.email}</td>
                </tr>
              </tbody>
            </table>
            <div className="btn-right">
              <div>
                <Button title="Kembali" onClick={() => handleClick()} />
              </div>
            </div>
          </div>
        </div>
        <Button title="Log Out" onClick={() => handleLogOut()} />
      </div>
    </div>
  );
}

export default UserDetail;
