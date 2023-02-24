import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {SithCard} from '../components';

export const SearchPage = () => {

const navigate = useNavigate();
const location = useLocation();

const {searchText, onInputChange} = useForm({
  searchText: ''
});

const onSearchSubmit = (event) => {
  event.preventDefault();
  if (searchText.trim().length <= 1) return;
  
  navigate(`?q=${searchText}`);

};

  return (
    <>
      <br />
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Sith"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Search a Sith</div>
          <div className="alert alert-danger">No Sith Found</div>
          
          <SithCard />

        </div>
      </div>
    </>
  );
};
