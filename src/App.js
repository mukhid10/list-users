import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListUser from "./page/listUser/index";
import Login from "./page/login/Login";
import NotFound from "./page/notFound";
import Register from "./page/register/Register";
import UserDetail from "./page/userDetail.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<ListUser />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
