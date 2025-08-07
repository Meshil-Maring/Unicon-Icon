import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../share-screen/page/Home";
import AddIcon from "../share-screen/page/AddIcon";

const MainRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/add-icon" element={<AddIcon />} />
    </Routes>
  </BrowserRouter>
);

export default MainRoutes;
