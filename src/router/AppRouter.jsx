import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { SithRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<SithRoutes />} />
      </Routes>
    </>
  );
};
