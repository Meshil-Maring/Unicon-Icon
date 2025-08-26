import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
  </Routes>
);

export default MainRoutes;
