import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import SelectClass from "../pages/SelectClass";
import After10th from "../pages/After10th";
import AfterInter from "../pages/AfterInter";
import Intermediate from "../pages/Intermediate";
import Polytechnic from "../pages/Polytechnic";
import ITI from "../pages/ITI";
import Vocational from "../pages/Vocational";
import Paramedical from "../pages/Paramedical";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Main App */}
      <Route path="/home" element={<Home />} />
      <Route path="/select-class" element={<SelectClass />} />
      <Route path="/after-10th" element={<After10th />} />
      <Route path="/after-inter" element={<AfterInter />} />
      <Route path="/intermediate" element={<Intermediate />} />
      <Route path="/polytechnic" element={<Polytechnic />} />
      <Route path="/iti" element={<ITI />} />
      <Route path="/vocational" element={<Vocational />} />
      <Route path="/paramedical" element={<Paramedical />} />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;