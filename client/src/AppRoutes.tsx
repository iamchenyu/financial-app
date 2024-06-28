import { Routes, Route } from "react-router-dom";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/predictions" element={<Predictions />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
