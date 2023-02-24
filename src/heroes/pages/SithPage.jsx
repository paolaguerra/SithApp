import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getSithById } from "../helpers";

export const SithPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const oneSith = useMemo(() => getSithById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!oneSith) {
    return <Navigate to="/apprentice" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <br />
        <img
          src={`/assets/siths/${id}.jpg`}
          alt={oneSith.sith}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{oneSith.sith}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b> {oneSith.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Pubisher:</b> {oneSith.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {oneSith.first_appearance}
          </li>
          <li className="list-group-item">
            <b>Planet:</b> {oneSith.planet}
          </li>
          <li className="list-group-item">
            <b>Range:</b> {oneSith.range}
          </li>

          {oneSith.master ? (
            <li className="list-group-item">
              <b>Master:</b> {oneSith.master}
            </li>
          ) : (
            <li className="list-group-item">
              <b>Apprentices:</b> {oneSith.apprentices}
            </li>
          )}
          <li className="list-group-item">
            <b>Quote:</b> {oneSith.quote}
          </li>
          <li className="list-group-item">
            <b>Description:</b> {oneSith.description}
          </li>
        </ul>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
