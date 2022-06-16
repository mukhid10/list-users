import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ListUser from "./page/listUser/index";
import Login from "./page/login/Login";
import NotFound from "./page/notFound";
import Register from "./page/register/Register";
import UserDetail from "./page/userDetail.js";

function App() {
  const isLogin = sessionStorage.getItem("isLogin");
  console.log(isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/users"
          element={isLogin ? <ListUser /> : <Navigate to={"/"} />}
        />
        <Route
          path="/users/id"
          element={isLogin ? <UserDetail /> : <Navigate to={"/"} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
