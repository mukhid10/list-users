import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../component/button";
import "./userdetail.scss";

function UserDetail() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getDataById = async () => {
    const result = await axios.get("https://reqres.in/api/users/" + id);
    setData(result.data.data);
  };

  useEffect(() => {
    getDataById();
  }, [id]);

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
            <div className="btn-right mb-2">
              <div>
                <Link to={"/users"}>
                  <Button title="Kembali" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Link to={"/"}>
            <Button title="Log Out" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
