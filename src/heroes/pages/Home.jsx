import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const onNavigateSearch = () => {
        navigate("/search");
      };

  return (
    <div className="home">
      <h1 className="main-title">
      Looking for a Sith
        <br />
        for your empire?
        <br />
        Let's start!
        <br />
      </h1>
      <button type="button" class="btn-sith btn-lg btn btn-danger" onClick={onNavigateSearch}>
        Seach
      </button>
    </div>
  );
};
