import { Link } from "react-router-dom";

export const SithCard = ({
  range,
  id,
  sith,
  publisher,
  alter_ego,
  first_appearance,
  planet,
}) => {
  const sithImageUrl = `/assets/siths/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={sithImageUrl} className="card-img" alt={sith} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{sith}</h5>
              <p className="card-text">Alter Ego: {alter_ego}</p>
              <p>Planet: {planet}</p>
              <Link to={`/sith/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
