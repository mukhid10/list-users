import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../component/button";
import Gap from "../../component/gap";
import { getAllDataAction } from "../../redux/actions/dataUser";
import "./listUser.scss";

function ListUser() {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.dataAllUserReducer);
  const data = dataUser.data;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllDataAction());
  }, []);

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center fw-bold mt-4 mb-5">List User</h1>
        {data &&
          data.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="listUser">
                <div className="div-img">
                  <img className="img-user" src={item.avatar} alt="avatar" />
                </div>
                <div className="text-user">
                  <p>
                    <span>{item.first_name}</span> <span>{item.last_name}</span>
                  </p>
                  <p>{item.email}</p>
                </div>
                <div className="btn-listUser">
                  <div>
                    <Link to={"/users/" + item.id}>
                      <Button title="Details" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <Button title="Log Out" onClick={() => handleLogOut()} />
        <Gap height={50} />
      </div>
    </div>
  );
}

export default ListUser;
