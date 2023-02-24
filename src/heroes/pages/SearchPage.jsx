import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {SithCard} from '../components';
import { getSithsByName } from '../helpers';

export const SearchPage = () => {

const navigate = useNavigate();
const location = useLocation();

const {q = ''} = queryString.parse(location.search);

const siths = getSithsByName(q);

const {searchText, onInputChange} = useForm({
  searchText: q
});

const onSearchSubmit = (event) => {
  event.preventDefault();
  // if (searchText.trim().length <= 1) return;
  
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

          {
            (q === '')
            ? <div className="alert alert-primary">Search a Sith</div>
            : (siths.length === 0)
            && <div className="alert alert-danger"><b>{q}</b> is not found</div>
          }

        {
          siths.map(aSith => (
            <SithCard key={aSith.id} {...aSith} />
          ))
        }
        
        </div>
      </div>
    </>
  );
};

