import { Navbar } from "../../UI";
import { Navigate, Route, Routes } from "react-router-dom";
import { ApprenticePage, MasterPage, SearchPage, SithPage } from "../pages";

export const SithRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="master" element={<MasterPage />} />
          <Route path="apprentice" element={<ApprenticePage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="sith" element={<SithPage />} />

          <Route path="/" element={<Navigate to="/apprentice" />} />
        </Routes>
      </div>
    </>
  );
};
