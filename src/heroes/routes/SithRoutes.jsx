import { Navbar } from "../../UI";
import { Navigate, Route, Routes } from "react-router-dom";
import { ApprenticePage, MasterPage, SearchPage, SithPage } from "../pages";
import { Home } from "../pages/Home";

export const SithRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
        <Route path="home" element={<Home />} />
          <Route path="master" element={<MasterPage />} />
          <Route path="apprentice" element={<ApprenticePage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="sith/:id" element={<SithPage />} />

          <Route path="/" element={<Navigate to="/apprentice" />} />
        </Routes>
      </div>
    </>
  );
};
